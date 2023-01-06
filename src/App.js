import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Body from './components/body';
import useWindowDimensions from './function/windowSize';

function App() {
	const { height, width } = useWindowDimensions();
	return (
		<div className='App'>
			<Navbar />
			<Body width={width} />
		</div>
	);
}

export default App;
