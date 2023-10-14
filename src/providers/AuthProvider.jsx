import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
import {createContext, useEffect, useState} from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const provider = new GoogleAuthProvider();
	const signInGoogle = () => {
		setLoading(true);
		return signInWithPopup(auth, provider);
	};

	const signInUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, currentUser => {
			// console.log('Currently observing', currentUser?.email);
			setUser(currentUser);
			setLoading(false);
		});

		return () => {
			unSubscribe();
		};
	}, []);

	const authInfo = {
		user,
		createUser,
		signInUser,
		signInGoogle,
		logOut,
		loading,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
