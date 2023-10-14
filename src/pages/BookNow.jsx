import {useContext} from 'react';
import {AuthContext} from '../providers/AuthProvider';

const BookNow = () => {
	const {user} = useContext(AuthContext);

	return (
		<>
			<div
				className="hero rounded-xl"
				style={{backgroundImage: 'url(https://i.ibb.co/ZgXXfJq/4.jpg)'}}>
				<div className="hero-overlay bg-opacity-60 bg-black rounded-xl"></div>
				<div className="hero-content text-center text-white py-24">
					<div className="max-w-lg">
						<h1 className="my-3 text-5xl font-bold">Book Now</h1>
					</div>
				</div>
			</div>

			<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
				<div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
					<div class="lg:col-span-2 lg:py-12">
						<h1 class="text-2xl font-bold text-gray-900 sm:text-3xl mb-6">
							Welcome Back! {user ? user.displayName : ''}
						</h1>
						<p class="max-w-xl text-lg">
							Send your contact details to us with your message and our experts
							will get back to you as soon as possible.
						</p>

						<div class="mt-8">
							<a href="" class="text-2xl font-bold text-pink-600">
								0151 475 4450
							</a>

							<address class="mt-2 not-italic">
								282 Imran H., Pahartali, Ctg 4207
							</address>
						</div>
					</div>

					<div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
						<form action="" class="space-y-4">
							<div>
								<label class="sr-only" for="name">
									Name
								</label>
								<input
									class="w-full rounded-lg border-gray-200 p-3 text-sm"
									placeholder="Name"
									type="text"
									id="name"
								/>
							</div>

							<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
								<div>
									<label class="sr-only" for="email">
										Email
									</label>
									<input
										class="w-full rounded-lg border-gray-200 p-3 text-sm"
										placeholder="Email address"
										type="email"
										id="email"
									/>
								</div>

								<div>
									<label class="sr-only" for="phone">
										Phone
									</label>
									<input
										class="w-full rounded-lg border-gray-200 p-3 text-sm"
										placeholder="Phone Number"
										type="tel"
										id="phone"
									/>
								</div>
							</div>

							<div>
								<label class="sr-only" for="message">
									Message
								</label>

								<textarea
									class="w-full rounded-lg border-gray-200 p-3 text-sm"
									placeholder="Message"
									rows="8"
									id="message"></textarea>
							</div>

							<div class="mt-4">
								<button
									type="submit"
									class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
									Send Enquiry
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default BookNow;
