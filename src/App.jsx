import React from 'react';
import Barrasup from './components/Barrasup';
import Slide from './components/Slide';
import Aboutus from './components/Aboutus';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './css/NavBar.css';
import './css/Slide.css';
import './css/Aboutus.css';



import './App.css';

const App = () => {

    return (
        <div id='container'>
            <Barrasup></Barrasup>
            <Slide></Slide>
            <Aboutus></Aboutus>
        </div>

    )

};
export default App;