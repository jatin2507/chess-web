import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import IndexPage from './routes';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Socketfunction from './utils/socket';
import { useDispatch, useSelector } from 'react-redux';
function App() {
	Socketfunction();
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>{IndexPage()}</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
