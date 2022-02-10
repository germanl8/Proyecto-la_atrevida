import React from 'react';
import Barrasup from './components/Barrasup';
import Slide from './components/Slide';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './css/NavBar.css'
import './css/Slide.css'



import './App.css';

const App = () => {

    return (
        <div id='container'>
            <Barrasup></Barrasup>
            <Slide></Slide>
        </div>

    )

};
export default App;