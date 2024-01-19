import { useState } from 'react';

import Balance from './components/Balance';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className='border border-blue-400'>
				<Balance amount={10000000} />
			</div>

			<div className='p-8'>
				<button onClick={() => setCount(count => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test code HMR
				</p>
			</div>

			<p className='text-base text-gray-400/75'>
				For more information about our services, please visit our website at{' '}
				<a className='text-blue-400 underline' href='https://rw.trackxp.com'>
					TrackXP
				</a>
			</p>
		</>
	);
}

export default App;
