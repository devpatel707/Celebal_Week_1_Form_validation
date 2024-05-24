

import React from 'react';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import Success from './components/Success';


const App = () => {
  return (
    
    <Router>
      <Switch>
        <Route path="/" exact component={RegistrationForm} />
        <Route path="/success" exact component={Success} />
      </Switch>
    </Router>
    
  );
};

export default App;
