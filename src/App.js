import logo from './logo.svg';
import './App.css';
import { ethers } from 'ethers'
function App() {

	const connect = async () => {

		const provider = new ethers.providers.Web3Provider(window.ethereum)


		await provider.send("eth_requestAccounts", []);


		const signer = provider.getSigner()

		const addr = await signer.getAddress()


		

		console.log(addr)
		alert(addr)


	}
	return (
		<div className="App">

			<button onClick={connect}>connect wallet</button>
			{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
		</div>
	);
}

export default App;
