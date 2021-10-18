import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import QuotesPage from "./components/QuotesPage";
import ScrollToTop from "./components/ScrollTpTop";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Switch>
          <Route path="/manglishawareness" exact component={Homepage} />
          <Route
            path="/manglishawareness/quotespage"
            exact
            component={QuotesPage}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
