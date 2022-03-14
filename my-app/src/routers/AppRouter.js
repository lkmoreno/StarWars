import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navbar from "../components/Navbar";
import axios from "axios";


export default function AppRouter() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState();
  const [previusPage, setPreviusPage] = useState();

  useEffect(() => {
    setLoading(true);
    axios({
      url: "https://swapi.dev/api/people",
    })
      .then((response) => {
        setPeople(response.data.results);
        setNextPage(response.data.next);
        setPreviusPage(response.data.previus);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
      <Route exact path="/">
          <HomePage
            loading={loading}
            people={people}
          />
        </Route>
        <Route exact path="/people">
          <HomePage
            loading={loading}
            people={people}
          />
        </Route>
        <Route path="*">
          <h1> 404 Not found</h1>
        </Route>
      </Switch>
    </Router>
  );
}
