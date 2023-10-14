import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link, useLoaderData} from 'react-router-dom';
import EventCard from './EventCard';

const Home = () => {
	const events = useLoaderData();

	AOS.init();

	return (
		<>
			<div
				data-aos="fade-in"
				className="hero rounded-xl"
				style={{backgroundImage: 'url(https://i.ibb.co/5TJsTwZ/3.jpg)'}}>
				<div className="hero-overlay bg-opacity-60 bg-black rounded-xl"></div>
				<div className="hero-content text-center text-white py-36 lg:py-48">
					<div className="max-w-lg">
						<h1 className="my-3 text-5xl font-bold">Welcome</h1>
						<h2 className="text-2xl my-4">
							to,{' '}
							<span className="text-3xl font-lora font-medium text-amber-400 shadow-xl">
								Spotlight Events
							</span>
						</h2>
						<p className="mb-5 text-lg">
							Discover the Pinnacle of Entertainment: Where Every Moment is a
							Masterpiece. Immerse Yourself in a Universe of Spectacle, Sound, &
							Creativity, All at Your Fingertips.
						</p>
						<Link to="/register" className="btn btn-warning capitalize text-lg">
							Get Started
						</Link>
					</div>
				</div>
			</div>

			<div data-aos="fade-up" className="text-center my-20">
				<h2 className="text-4xl font-lora font-medium mb-4">Our Lovely Team</h2>
				<p className="text-center text-lg max-w-lg mx-auto mt-6 mb-10">
					Meet our talented team who are determined to give you the best
					possible experience at your event.
				</p>
				<div className="flex flex-col md:flex-row gap-6">
					<div>
						<img src="https://i.ibb.co/xG6c73b/team1.jpg" alt="" />
						<h3 className="text-2xl mt-4">Kevin Birgof</h3>
					</div>
					<div>
						<img src="https://i.ibb.co/dQL5d2x/team2.jpg" alt="" />
						<h3 className="text-2xl mt-4">Olga Marchuk</h3>
					</div>
					<div>
						<img src="https://i.ibb.co/gJR8NX1/team3.jpg" alt="" />
						<h3 className="text-2xl mt-4">Nancy Kupry</h3>
					</div>
				</div>
			</div>

			<div data-aos="fade-up">
				<h2 className="text-center text-4xl font-lora font-medium mt-8">
					Services We Provide
				</h2>
				<p className="text-center text-lg max-w-lg mx-auto mt-4">
					We host and organize various types of artistic projects and events
					with an emphasis on creativity.
				</p>
				<div className="grid md:grid-cols-2 gap-6 my-10">
					{events.map(event => (
						<EventCard key={event.id} event={event}></EventCard>
					))}
				</div>
			</div>

			<div data-aos="fade-up" className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-4xl font-bold text-black">
						Trusted by customers everywhere
					</h2>

					<p className="mt-4 text-xl">
						Your Portal to a World of Entertainment Wonders: Curate Your Dream
						Experience, One Event at a Time. Explore the Magic of Live Shows,
						Theater, Film, Music, and More, Tailored Just for You.
					</p>
				</div>

				<div className="mt-8">
					<dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
						<div className="flex flex-col rounded-lg border border-gray-600 px-4 py-8 text-center">
							<dt className="order-last text-lg font-medium">
								Total Sales
							</dt>

							<dd className="text-4xl font-extrabold md:text-5xl">
								$4.8m
							</dd>
						</div>

						<div className="flex flex-col rounded-lg border border-gray-600 px-4 py-8 text-center">
							<dt className="order-last text-lg font-medium">
								Unique Customers
							</dt>

							<dd className="text-4xl font-extrabold md:text-5xl">
								24
							</dd>
						</div>

						<div className="flex flex-col rounded-lg border border-gray-600 px-4 py-8 text-center">
							<dt className="order-last text-lg font-medium">
								Events Organized
							</dt>

							<dd className="text-4xl font-extrabold md:text-5xl">
								86
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</>
	);
};

export default Home;
