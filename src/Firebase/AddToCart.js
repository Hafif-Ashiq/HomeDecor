import { firebase } from "@react-native-firebase/firestore";

const addToCart = async (id, quantity, userId) => {
    try {
        const user_id = userId
        console.log("User ID =>" + user_id);
        const cartDocRef = firebase.firestore().collection("users").doc(user_id).collection("cart").doc(id)

        const cartSnapShot = await cartDocRef.get()
        if (cartSnapShot.exists) {
            const oldQuantity = cartSnapShot.data().quantity || 0
            const newQuantity = oldQuantity + quantity

            await firebase.firestore().runTransaction(async (transaction) => {
                transaction.update(cartDocRef, { quantity: newQuantity });
            });
            console.log("Quantity updated successfully.");
        }
        else {
            await cartDocRef.set({
                quantity: quantity
            })
            console.log("New item added to cart.");
        }

    } catch (err) {
        console.error(err);
    }
}


export default addToCart