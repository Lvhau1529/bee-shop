import React, { useState, useMemo } from "react";
import emailjs from "emailjs-com";
import { notification } from "antd";
import {
	getProducts,
	countProducts,
	addToCart,
	getCart,
	removeProductInCart,
	removeAllProductInCart,
} from "../services/firebaseService";
import firebase from "../configs/firebase";

// Mail JS settings
const serviceId = "service_jl2dsgm";
const templateId = "template_z5mz581";
const userId = "user_5kh5d9GNrNyJjNHAPwGnD";

// Notification
const destroyNotification = (time) => {
	let secondsToGo = time;
	const timer = setInterval(() => {
		secondsToGo -= 1;
	}, 1000);
	setTimeout(() => {
		clearInterval(timer);
		notification.destroy();
	}, secondsToGo * 1000);
};

const addedFromCart = (type) => {
	notification["success"]({
		message: "Product is added to cart",
		description: "Please check your cart.",
	});
	destroyNotification(3);
};

const removedFromCart = (type) => {
	notification["warning"]({
		message: "Product is removed from cart",
	});
	destroyNotification(3);
};
// ./Notification

// Create Reducer
export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
	const limit = 8;
	const [total, setTotal] = useState(0);
	const [products, setProducts] = useState([]);
	const [page, setPage] = useState(1);
	const [cartProducts, setCartProducts] = useState([]);

	const sendEmail = async () => {
		await emailjs.send(
			serviceId,
			templateId,
			{ message: generateOrderMessage() },
			userId
		);
		await removeAllCart();
	};

	const getCartProducts = async () => {
		try {
			const data = await getCart();
			setCartProducts(data);
		} catch (err) {
			alert(err.response?.data || err.message);
			console.error("Error get cart", err);
		}
	};

	// Send mail
	const generateOrderMessage = () => {
		const user = firebase.auth().currentUser;
		if (!user) return "";
		const { email } = user;
		const productInformations = cartProducts
			.map((item) => `${item.count} ${item.name}`)
			.join(", ");

		return `Customer with email ${email} has ordered ${productInformations}. Total bill is $${cartTotal}`;
	};

	const cartTotal = useMemo(() => {
		return (cartProducts || []).reduce((total, product) => {
			return total + product.price * product.count;
		}, 0);
	}, [cartProducts]);

	const [sort, setSort] = useState({
		sortBy: "price",
		sortOrder: "asc",
	});

	const offset = useMemo(() => {
		return (page - 1) * limit;
	}, [page]);

	const get = async () => {
		const data = await getProducts(offset, sort.sortBy, sort.sortOrder, limit);
		setProducts(data);
	};

	const count = async () => {
		const data = await countProducts();
		setTotal(data);
	};

	const add = (productId, number) => async () => {
		try {
			await addToCart(productId, number);
			await getCartProducts();
			addedFromCart();
		} catch (err) {
			alert(err.response?.data || err.message);
			console.error(err);
		}
	};

	const changeCountNumber = (productId) => async (number) => {
		try {
			await addToCart(productId, number, true);
			await getCartProducts();
		} catch (err) {
			alert(err.response?.data || err.message);
			console.error(err);
		}
	};

	const removeCart = (productId) => async () => {
		try {
			await removeProductInCart(productId);
			await getCartProducts();
			removedFromCart();
		} catch (err) {
			alert(err.response?.data || err.message);
			console.error(err);
		}
	};

	const removeAllCart = async () => {
		try {
			await removeAllProductInCart();
			await getCartProducts();
		} catch (err) {
			alert(err.response?.data || err.message);
		}
	};

	const values = {
		limit,
		total,
		products,
		offset,
		page,
		sort,
		cartProducts,
		cartTotal,
		getCartProducts,
		setPage,
		get,
		count,
		add,
		setSort,
		removeCart,
		changeCountNumber,
		sendEmail,
	};

	return (
		<ProductContext.Provider value={values}>{children}</ProductContext.Provider>
	);
};
