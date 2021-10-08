import './App.css';
import Pay from './Pay';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App = () => {
  return (
 <Router>
   <Switch>
     <Route path ="/pay">
       <Pay/>
     </Route>
     <Route path ="/success">
     </Route>
   </Switch>
 </Router>
  )
}

export default App;
