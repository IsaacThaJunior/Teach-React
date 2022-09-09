import { useId } from 'react';
import './App.css';

function App() {
	const firstId = useId();
	const secondId = useId();

	return (
		<div className="App">
			<form>
				<div>
					<label htmlFor={`${firstId}-email`}>Email</label>
					<input id={`${firstId}-email`} type="text" placeholder="Your email" />
				</div>
				<div>
					<label htmlFor={`${secondId}-password`}>Password</label>
					<input
						id={`${secondId}-password`}
						type="password"
						placeholder="Your password"
					/>
				</div>
			</form>
		</div>
	);
}

export default App;
