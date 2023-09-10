import { lazy } from 'react';
import ChessBoard from '../Components/chessBoard';
import Login from '../pages/Auth/Login';
import Auth from '../pages/Auth';
import Playes from '../pages/Plays/playes';
import Matching from '../Components/Matching';
import MulitPlayes from '../pages/Plays/MulitPlays/MulitPlayes';
const SinglePlays = lazy(async () => import('../pages/Plays/SinglePlays'));
const Home = lazy(async () => import('../pages/Home'));
let Menu = [
	{
		path: '/',
		name: 'Home',
		component: Matching,
	},
	{
		path: '/play',
		name: 'Play',
		component: Playes,
	},
	{
		path: '/multi-player',
		name: 'Multi Player',
		component: MulitPlayes,
	},
	{
		path: '/online-player',
		name: 'online player',
		component: Home,
	},
	{
		path: '/custom-room',
		name: 'Play With Friend',
		component: ChessBoard,
	},

	{
		path: '/single-player',
		name: 'Single Player',
		component: SinglePlays,
	},
	{
		path: '/top',
		name: 'Top Players',
		component: SinglePlays,
	},
	{
		path: '/learn-chess',
		name: 'Learn Chess',
		component: Home,
	},
	{
		path: '/support',
		name: 'Support',
		component: Home,
	},
	{
		path:'/auth',
		name:'auth',
		component:Auth
	},
	{
		path:'/Login',
		name:'auth',
		component:Login
	}
];

export { Menu };
