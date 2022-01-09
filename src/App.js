import {
	BrowserRouter as Router,
	Route,
	Routes
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
	return (
		<Router>
			{/* Switch는 Route를 찾고 찾으면 컴포넌트를 렌더링함. */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/movie" element={<Detail/>} />
			</Routes>
		</Router>
	);
}

export default App;
