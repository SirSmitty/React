import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//opens acces to navigation package
import Navigation from '../Navigation';

//defines nagivation app
const App = () => (
    <Router>
        <Navigation />
    </Router>
);

export default App;