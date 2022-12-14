import auth from "@react-native-firebase/auth";
import Toast from "react-native-toast-message";

class FirebaseService {
    static onAuthenticated = (callback) => {
        return auth().onAuthStateChanged(callback);
    };

    static createUser = (email = "", password = "") => {
        return auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async () => {
                await auth().currentUser.sendEmailVerification({
                    handleCodeInApp: true,
                    url: "https://connect.page.link",
                    android: {
                        installApp: true,
                        packageName: "com.connectapp"
                    }
                });

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
                console.log(error);

                return Promise.reject(false);
            });
    };

    static signIn = (email, password) => {
        return auth()
            .signInWithEmailAndPassword(email, password)
            .then()
            .catch((err) => {
                if (err.code === "auth/user-not-found") {
                    Toast.show({
                        type: "error",
                        text1: "User doesnot exist!"
                    });
                }

                if (err.code === "auth/wrong-password") {
                    Toast.show({
                        type: "error",
                        text1: "The password is invalid!"
                    });
                }

                return Promise.reject(err);
            });
    };

    static resetPasswordWithEmail = (email) => {
        return auth()
            .sendPasswordResetEmail(email)
            .then()
            .catch((err) => {
                if (err.code == "auth/user-not-found") {
                    Toast.show({
                        type: "error",
                        text1: "That email address is invalid!"
                    });
                }
                return Promise.reject(err);
            });
    };
}

export { FirebaseService };
