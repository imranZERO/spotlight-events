import toast from 'react-hot-toast';
import {useContext} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {AuthContext} from '../providers/AuthProvider';

const Login = () => {
	const {signInUser, signInGoogle} = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();

	const handleGoogleLogin = e => {
		e.preventDefault();

		signInGoogle()
			.then(() => {
				navigate(location?.state ? location.state : '/');
				toast.success('Logged in Successfully with Google');
			})
			.catch(error => {
				toast.error(error.message);
			});
	};

	const handleLogin = e => {
		e.preventDefault();

		const form = new FormData(e.currentTarget);
		const email = form.get('email');
		const password = form.get('password');

		signInUser(email, password)
			.then(result => {
				console.log(result);
				// e.target.reset();
				navigate(location?.state ? location.state : '/');
				toast.success('Logged in Successfully');
			})
			.catch(error => {
				toast.error(error.message);
			});
	};

	return (
		<>
			<div className="p-4 text-center">
				<h1 className="text-4xl font-lora font-medium">Please Login</h1>
				<form
					onSubmit={handleLogin}
					className="max-w-md flex flex-col mx-auto gap-4 my-6">
					<div className="form-control">
						<input
							type="email"
							placeholder="email"
							name="email"
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control">
						<input
							type="password"
							placeholder="password"
							name="password"
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control">
						<input type="submit" value="Submit" className="btn btn-neutral text-white capitalize text-lg" />
					</div>
				</form>
				<div className="divider max-w-sm mx-auto text-lg">Or</div>
				<button onClick={handleGoogleLogin} className="btn btn-primary text-white capitalize text-lg mt-3 mb-8">
					Login with Google
				</button>
				<p className="mb-6 text-lg">
					New to this website? Please
					<Link className="btn btn-sm btn-accent capitalize text-lg mx-2" to={'/register'}>
						Register
					</Link>
				</p>
			</div>
		</>
	);
};

export default Login;
