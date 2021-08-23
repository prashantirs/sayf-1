import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JoinWaitlist from "./JoinWaitlist/JoinWaitlist";
import Navbar from "./Navbar/Navbar";
import Middle from "./Middle/Middle";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Middle />
            <Footer />
          </Route>
          <Route path="/join-waitlist">
            <JoinWaitlist />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
