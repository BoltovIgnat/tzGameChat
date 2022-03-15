import './App.css';
import 'antd/dist/antd.css';
import IbcHeader from './components/header';
import IbcContent from './components/content';
import IbcButtom from './components/buttom';

function App() {
	return (
		<div className="App">
			<IbcHeader />
			<IbcContent/>
			<IbcButtom />
		</div>
	);
}

export default App;
