import { useId } from 'react';
import './App.css';

function App() {
	const firstId = useId();
	const secondId = useId()

	return <div className="App">
		<h3>The first id generated is {firstId}</h3>
		<h3>The second id generated is {secondId} and different from {firstId} </h3>
	</div>;
}

export default App;
