import React from 'react';
import logo from './logo.svg';
import './App.css';
import Settings from "./Settings";
import Draw from "./Draw";
import PropTypes from 'prop-types';
// import './draw.js';


const App = props => {

    const startHandler = evt => {
        console.log(evt.target. value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Cosh Strange Attractors</h1>
            </header>
            <section className="content-wrap">
                <div className="sidebar">
                    <Settings handler={startHandler}/>
                </div>
                <div className="content">
                    <canvas id="canvas" width="800" height="500"></canvas>
                </div>
            </section>
            <footer>
                <Draw />
            </footer>
        </div>
    );
}

// ??????
// App.propTypes = PropTypes.func.isRequired();



export default App;
