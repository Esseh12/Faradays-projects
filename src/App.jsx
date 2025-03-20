import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'intersection-observer';
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import ProductPage from './Pages/Product/Product';
import ProductDetailPage from './Pages/Product/ProductDetail';
import BlogPage from './Pages/Blogs/Blogs';
import BlogDetail from './Pages/Blogs/BlogDetail';
import ProjectPage from './Pages/Projects/ProjectsPage';
import ProjectDetail from './Pages/Projects/ProjectDetail';
// import Contact from './Pages/Contact'; // Create this component if needed

function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={<Homepage />}
			/>
			<Route
				path='/about'
				element={<About />}
			/>
			<Route
				path='/product'
				element={<ProductPage />}
			/>
			<Route
				path='/product/:id'
				element={<ProductDetailPage />}
			/>
			<Route
				path='/blog'
				element={<BlogPage />}
			/>
			<Route
				path='/blog/:id'
				element={<BlogDetail />}
			/>
			<Route
				path='/projects'
				element={<ProjectPage />}
			/>
			<Route
				path='/projects/:id'
				element={<ProjectDetail />}
			/>
			{/* <Route
				path='/contact'
				element={<Contact />}
			/>{' '} */}
			{/* Add contact route */}
		</Routes>
	);
}

export default App;
