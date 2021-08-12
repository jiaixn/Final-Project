import Navbar from "./Navbar";
import Home from "./page/Home";
import Rooms from "./page/Rooms";
import SingleRoom from "./page/Singleroom";
import Function from "./page/Function";
import Error from "./page/Error";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  /* main parts of whole website */
  return (
    <div className="App">
      <Router>
        <Navbar
        />
        <Switch>
          <Route exact path="/COMP3340/finalproject/" component={Home}/>
          <Route exact path="/COMP3340/finalproject/rooms/" component={Rooms}/>
          <Route path='/COMP3340/finalproject/rooms/:slug' exact component={SingleRoom} />
          <Route exact path="/COMP3340/finalproject/function/" component={Function}/>
          <Route component={Error} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
