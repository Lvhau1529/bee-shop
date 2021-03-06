import { useEffect } from "react"
import firebase from "../configs/firebase"

const useUserAuth = (onAuth, onUnAuth) => {
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (!!user) {
                onAuth && onAuth()
            } else {
                onUnAuth && onUnAuth()
            }
        })
    }, [])
}

export default useUserAuth