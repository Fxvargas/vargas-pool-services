import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Switch>
                <Route path="/services" exact component={Services} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/" exact component={Home} />
            </Switch>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
