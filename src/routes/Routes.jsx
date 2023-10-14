import {createBrowserRouter} from 'react-router-dom';
import Root from '../layout/Root.jsx';
import BookNow from '../pages/BookNow.jsx';
import Contact from '../pages/Contact.jsx';
import EventDetails from '../pages/EventDetails.jsx';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import ErrorPage from '../pages/error-page.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root></Root>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
				loader: () => fetch('/events.json'),
			},
			{
				path: '/event/:id',
				element: (
					<PrivateRoute>
						<EventDetails></EventDetails>
					</PrivateRoute>
				),
				loader: () => fetch('/events.json'),
			},
			{
				path: '/login',
				element: <Login></Login>,
			},
			{
				path: '/register',
				element: <Register></Register>,
			},
			{
				path: '/booknow',
				element: (
					<PrivateRoute>
						<BookNow></BookNow>
					</PrivateRoute>
				),
			},
			{
				path: '/contact',
				element: (
					<PrivateRoute>
						<Contact></Contact>
					</PrivateRoute>
				),
			},
		],
	},
]);

export default router;
