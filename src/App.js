import './App.css';
import ComponentA from './Component/ComponentA';
import ComponentB from './Component/ComponentB';
import ComponentC from './Component/ComponentC';
import { UserProvider } from './Component/ContextB';
import React from 'react';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
	let username = 'LCC';
	let place = 'EKM';
	return (
		<div>
			{/* <ComponentA username={username} /> */}
			
			{/* <UserProvider value={username}>
				<ComponentB />
				<ComponentC />
			</UserProvider> */}

			<UserContext.Provider value={username}>
				<ChannelContext.Provider value={place}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider>

		</div>
	);
}

export default App;
