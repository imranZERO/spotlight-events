import toast from 'react-hot-toast';
import {updateProfile} from 'firebase/auth';
import {useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from '../providers/AuthProvider';

const Register = () => {
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();
	const {createUser} = useContext(AuthContext);

	const handleRegister = e => {
		e.preventDefault();

		const form = new FormData(e.currentTarget);
		const name = form.get('name');
		const email = form.get('email');
		const photo = form.get('photo');
		const password = form.get('password');
		console.log(name, photo, email, password);

		// validation
		if (password.length < 6) {
			toast.error('Password should be at least 6 characters.');
			return;
		} else if (!/[A-Z]/.test(password)) {
			toast.error('Password must contain at least 1 capital letter.');
			return;
		} else if (!/[\W_]/.test(password)) {
			toast.error('Password must contain at least 1 special character.');
			return;
		} else {
			createUser(email, password)
				.then(result => {
					updateProfile(result.user, {
						displayName: name,
						photoURL: photo,
					});
					console.log(result.user);
					navigate('/');
					toast.success('User Registered Successfully');
				})
				.catch(error => {
					toast.error(error.message);
				});
		}
	};

	return (
		<>
			<div className="p-4 text-center">
				<h1 className="text-4xl font-lora font-medium">Please Register</h1>

				<form
					onSubmit={handleRegister}
					className="max-w-md flex flex-col mx-auto my-6 gap-4">
					<input
						className="input input-bordered"
						placeholder="Full Name"
						type="text"
						name="name"
						required
					/>
					<input
						className="input input-bordered"
						placeholder="Enter E-mail"
						type="email"
						name="email"
						required
					/>
					<input
						className="input input-bordered"
						placeholder="Photo URL"
						type="text"
						name="photo"
					/>
					<label className="input-group">
						<input
							type={showPassword ? 'text' : 'password'}
							placeholder="Enter Password"
							name="password"
							className="input input-bordered w-full"
							required
						/>
						<span
							onClick={() => setShowPassword(!showPassword)}
							className="btn border">
							{showPassword ? 'Hide' : 'Show'}
						</span>
					</label>
					<input
						type="submit"
						value="Submit"
						className="btn btn-neutral text-white capitalize text-lg"
					/>
				</form>
				<p className="mb-6 text-lg">
					Have an account? Please
					<Link
						className="btn btn-sm btn-accent capitalize text-lg mx-2"
						to={'/login'}>
						Login
					</Link>
				</p>
			</div>
		</>
	);
};

export default Register;
