import toast, {Toaster} from 'react-hot-toast';
import {useContext} from 'react';
import {Link, NavLink, Outlet} from 'react-router-dom';
import {AuthContext} from '../providers/AuthProvider';

function Root() {
	const {user, logOut} = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => {
				console.log('logged out successfully');
				toast.success('Logged out Successfully');
			})
			.catch(error => console.log(error));
	};

	const links = (
		<>
			<li>
				<NavLink
					className="btn btn-sm capitalize rounded-full text-lg"
					style={{textDecoration: 'none'}}
					to="/login">
					Login
				</NavLink>
			</li>
			<li>
				<NavLink
					className="btn btn-sm capitalize rounded-full text-lg"
					style={{textDecoration: 'none'}}
					to="/register">
					Register
				</NavLink>
			</li>
		</>
	);

	const pages = (
		<>
			<li>
				<NavLink
					to={'/booknow'}
					className="btn btn-link text-white no-underline text-lg">
					Book Now
				</NavLink>
			</li>
			<li>
				<NavLink
					to={'/contact'}
					className="btn btn-link text-white no-underline text-lg">
					Contact Us
				</NavLink>
			</li>
		</>
	);

	return (
		<>
			<Toaster />
			<div className="navbar bg-[#201E1E] flex-col md:flex-row gap-4 text-white py-4">
				<div className="md:navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="dropdown-content mt-3 z-[1] p-2 shadow bg-zinc-600 rounded-box w-52">
							{pages}
						</ul>
					</div>
					<Link to="/" className="flex items-center gap-2 mx-4 text-end">
						<img width={50} height={50} src="/favicon.png" alt="" />
						<p className="normal-case lg:text-2xl font-semibold font-lora">
							Spotlight Events
						</p>
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="flex gap-2">{pages}</ul>
				</div>
				<div className="md:navbar-end">
					{user ? (
						<div className="flex items-center gap-4">
							<div className='flex items-center gap-2'>
								<h2>{user.displayName}</h2>
								<img src={user.photoURL ? user.photoURL : '/user-default.png'} className="rounded-full bg-white" width="50" height="50" alt="" />
							</div>
							<button
								onClick={handleLogOut}
								className="btn btn-sm capitalize rounded-full text-lg mx-4">
								Log Out
							</button>
						</div>
					) : (
						<ul className="flex items-center gap-3 px-1 mb-3 md:mb-0 mx-4">
							{links}
						</ul>
					)}
				</div>
			</div>

			<div className="bg-[#EEE0C9]">
				<div className="max-w-[1366px] min-h-[80vh] mx-auto p-4">
					<Outlet></Outlet>
				</div>
			</div>

			<footer className="footer p-10 bg-[#201E1E] text-neutral-content">
				<aside>
					<img width={70} height={70} src="/favicon.png" alt="" />
					<p className="text-base">
						<span className="text-white">&copy; Spotlight Events Ltd.</span>
						<br />
						Hosting artistic events since 1997
					</p>
				</aside>
				<nav>
					<header className="footer-title">Reach Us</header>
					<div className="grid grid-col gap-4">
						<Link to={'/booknow'} className="text-lg">
							Book Now
						</Link>
						<Link to={'/contact'} className="text-lg">
							Contact Us
						</Link>
					</div>
				</nav>
				<nav>
					<header className="footer-title">Social</header>
					<div className="grid grid-flow-col gap-4">
						<a href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="fill-current">
								<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
							</svg>
						</a>
						<a href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="fill-current">
								<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
							</svg>
						</a>
						<a href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="fill-current">
								<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
							</svg>
						</a>
					</div>
				</nav>
			</footer>
		</>
	);
}

export default Root;
