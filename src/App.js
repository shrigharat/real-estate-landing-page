import './App.css';

import NavBar from "./components/nav-bar/nav-bar.component";
import HomePage from './pages/home/home-page';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePage />
    </div>
  );
}

export default App;
