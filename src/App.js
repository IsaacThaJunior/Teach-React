import { useState } from 'react';
import './App.css';

function App() {
	const [first, setFirst] = useState('');

	const handleClick = (e) => {
		setFirst(e.target.value);
	};

	const clear = () => {
		setFirst('');
	};

	return (
		<div className="App">
			<input type="text" value={first} onChange={handleClick} />
			<button onClick={clear}>Clear Input</button>
		</div>
	);
}

export default App;
