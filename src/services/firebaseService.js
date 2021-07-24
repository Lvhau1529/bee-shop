import firebase from "../configs/firebase";

const collections = {
	products: "products",
	carts: "carts",
	tags: "tags",
};

// Database features
export const addProduct = async (data) => {
	await firebase.firestore().collection(collections.products).add(data);
};

export const getTags = async () => {
	const query = await firebase.firestore().collection(collections.tags).get();

	return query.docs.map((doc) => doc.data().name);
};

export const addTags = async (tags) => {
	const allTags = await getTags();

	for (const tag of tags) {
		if (allTags.includes(tag)) continue;
		await firebase.firestore().collection(collections.tags).add({ name: tag });
	}
};

export const removeProduct = async (productName) => {
	let query = firebase.firestore().collection(collections.products);
	query = query.where("name", "==", productName);

	const snapshot = await query.get();
	snapshot.forEach((doc) => doc.ref.delete());

	alert("Product is removed");
};

export const countProducts = async () => {
	const data = await firebase
		.firestore()
		.collection(collections.products)
		.get();

	return data.size;
};

export const getProducts = async (
	offset,
	sortBy,
	sortOrder,
	limit,
	tag,
	search,
	setTotal
) => {
	let query = firebase
		.firestore()
		.collection(collections.products)
		.orderBy(sortBy, sortOrder);

	const data = await query.get();
	let docs = data.docs;

	if (search) {
		docs = docs.filter(
			(item) =>
				item.data().name &&
				item.data().name.toLowerCase().includes(search.toLowerCase().trim())
		);
	}

	if (tag) {
		docs = docs.filter(
			(item) => item.data().tags && item.data().tags.includes(`,${tag},`)
		);
	}

	setTotal(docs.length);

	return docs.slice(offset, offset + limit).map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
};

export const getProductById = async (id) => {
	const doc = await firebase
		.firestore()
		.collection(collections.products)
		.doc(id)
		.get();

	return doc.data();
};

// Cart features
export const addToCart = async (productId, number, isAll = false) => {
	const userId = firebase.auth().currentUser?.uid;
	if (!userId) return;

	let query = firebase.firestore().collection(collections.carts);
	query = query.where("userId", "==", userId);
	query = query.where("productId", "==", productId);
	const data = await query.get();

	const cart = data.docs;
	if (!!cart && !!cart.length) {
		const item = cart[0];

		await firebase
			.firestore()
			.collection(collections.carts)
			.doc(item.id)
			.update({ count: isAll ? number : item.data().count + number });

		return;
	}

	await firebase
		.firestore()
		.collection(collections.carts)
		.add({ userId, productId, count: number });
};

export const getCart = async () => {
	const userId = firebase.auth().currentUser?.uid;
	if (!userId) return [];

	let query = firebase
		.firestore()
		.collection(collections.carts)
		.where("userId", "==", userId);
	const data = await query.get();
	const cart = data.docs.map((doc) => ({
		productId: doc.data().productId,
		count: doc.data().count,
	}));

	const productIds = cart.map((item) => item.productId);
	const productQuery = firebase.firestore().collection(collections.products);

	const productData = await productQuery.get();
	const products = productData.docs
		.filter((doc) => productIds.includes(doc.id))
		.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));

	return products
		.map((product) => {
			const thisProduct = cart.find((item) => item.productId === product.id);
			if (!thisProduct) return null;
			return {
				id: product.id,
				name: product.name,
				price: product.price,
				img: product.img,
				count: thisProduct.count,
			};
		})
		.filter(Boolean);
};

export const removeProductInCart = async (productId) => {
	const userId = firebase.auth().currentUser?.uid;
	if (!userId) return;

	let query = firebase
		.firestore()
		.collection(collections.carts)
		.where("userId", "==", userId);
	query = query.where("productId", "==", productId);

	const snapshot = await query.get();
	snapshot.forEach((doc) => doc.ref.delete());
};

export const removeAllProductInCart = async () => {
	const userId = firebase.auth().currentUser?.uid;
	if (!userId) return;

	let query = firebase
		.firestore()
		.collection(collections.carts)
		.where("userId", "==", userId);

	const snapshot = await query.get();
	snapshot.forEach((doc) => doc.ref.delete());
};
