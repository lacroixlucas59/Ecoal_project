import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

import Home from "./Home.js";
import About from "./About.js";
import Quizz from "./Quizz.js";


class App extends Component {

    render() {
	return (

    <BrowserRouter>
    <div>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/about" component={About} />
        <Route exact={true} path="/quizz/:id" component={Quizz}/>
        <Route path="*" component={() => <p>Page Not Found</p>} />
      </Switch>
    </div>
  </BrowserRouter>
	);
    }
}

export default App;
