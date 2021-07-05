import firebase from "../configs/firebase"

const collections = {
    products: "products"
}

export const countProducts = async () => {
    const data = await firebase
        .firestore()
        .collection(collections.products)
        .get()

    return data.size
}

export const getProducts = async (offset, sortBy, sortOrder) => {
    const data = await firebase
        .firestore()
        .collection(collections.products)
        .orderBy(sortBy || "createdAt", sortOrder || "desc")
        .startAfter(offset)
        .get()

    return data.docs.map(doc => doc.data())
}