import "./App.css";

import NavBar from "./components/nav-bar/nav-bar.component";
import HomePage from "./pages/home/home-page";
import FeaturedPage from "./pages/featured/featured-page";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/featured" component={FeaturedPage} />
      </Switch>
    </div>
  );
}

export default App;
