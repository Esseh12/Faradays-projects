import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Pages/Homepage';

function App() {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Homepage />}
				/>
			</Routes>
		</>
	);
}

export default App;
