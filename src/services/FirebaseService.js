import auth from "@react-native-firebase/auth";
import Toast from "react-native-toast-message";

class FirebaseService {
    static onAuthenticated = () => {
        return auth().onAuthStateChanged((user) => {
            console.log("--->user", user);
        });
    };

    static createUser = (email = "", password = "") => {
        return auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                return Promise.resolve(true);
            })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    Toast.show({
                        type: "error",
                        text1: "That email address is already in use!"
                    });
                }

                if (error.code === "auth/invalid-email") {
                    Toast.show({
                        type: "error",
                        text1: "That email address is invalid!"
                    });
                }
                console.log(error)

                return Promise.reject(false);
            });
    };
}

export { FirebaseService };
