import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Root from "./components/Root/Root.jsx";
import Sessions from "./components/Sessions/Sessions.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="sessions" element={<Sessions/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
