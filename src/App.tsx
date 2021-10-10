import LaunchList from "./components/launchList/LaunchList";
import style from "./style/App.module.scss";

function App() {
	return (
		<div className={style.container}>
			<h1>🚀 SpaceX Launches 🚀</h1>
			<LaunchList />
		</div>
	);
}

export default App;
