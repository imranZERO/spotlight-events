import {Link, useLoaderData, useParams} from 'react-router-dom';

const EventDetails = () => {
	const {id} = useParams();
	const events = useLoaderData();
	const event = events.find(event => event.id === parseInt(id));
	const {title, image, price, description} = event;

	return (
		<>
			<div className="flex flex-col lg:flex-row items-center gap-8 mt-4 mb-10">
				<div className="flex-1">
					<img className="rounded-xl" src={image} alt="" />
				</div>
				<div className="flex-1">
					<h1 className="text-3xl font-lora font-medium">{title}</h1>
					<p className="flex items-center text-2xl my-4">
						<svg
							stroke="currentColor"
							fill="currentColor"
							strokeWidth="0"
							viewBox="0 0 24 24"
							className="text-xl"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M15.999 8.5h2c0-2.837-2.755-4.131-5-4.429V2h-2v2.071c-2.245.298-5 1.592-5 4.429 0 2.706 2.666 4.113 5 4.43v4.97c-1.448-.251-3-1.024-3-2.4h-2c0 2.589 2.425 4.119 5 4.436V22h2v-2.07c2.245-.298 5-1.593 5-4.43s-2.755-4.131-5-4.429V6.1c1.33.239 3 .941 3 2.4zm-8 0c0-1.459 1.67-2.161 3-2.4v4.799c-1.371-.253-3-1.002-3-2.399zm8 7c0 1.459-1.67 2.161-3 2.4v-4.8c1.33.239 3 .941 3 2.4z"></path>
						</svg>
						<span>{price}</span>
					</p>
					<p className="text-xl">{description}</p>
					<Link to="/booknow" className="btn btn-neutral rounded-full my-6 capitalize text-white text-lg">Book Now</Link>
				</div>
			</div>
		</>
	);
};

export default EventDetails;
