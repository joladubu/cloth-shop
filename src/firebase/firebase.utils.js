import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
        apiKey: "AIzaSyAUdeCLcWUgZJt5niLYegSXULIl4K3NqTs",
        authDomain: "crown-db-bbe4e.firebaseapp.com",
        databaseURL: "https://crown-db-bbe4e.firebaseio.com",
        projectId: "crown-db-bbe4e",
        storageBucket: "crown-db-bbe4e.appspot.com",
        messagingSenderId: "535616448095",
        appId: "1:535616448095:web:721826d7f5ded399b81dea",
        measurementId: "G-V5ZWH4S0XT"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
        // is user Authentication does not exist exit from the function
        if(!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapshot = await userRef.get();

        if(!snapshot.exists) {
                const { displayName, email } = userAuth;
                const createdAt = new Date();

                try {
                        await userRef.set({
                                displayName,
                                email,
                                createdAt,
                                ...additionalData
                })
                } catch(error) {
                        console.log('error creating user', error.message);
                }
        }

        return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// giving access to the google auth provider class from the auth library.
const provider = new firebase.auth.GoogleAuthProvider();
//triggering the google popup whenever we use the google auth provider for authentication and sign in
provider.setCustomParameters({ prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;