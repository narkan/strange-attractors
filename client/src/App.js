import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './components/draw/Canvas';
import Start from "./components/settings/Start";
import Drawer from './components/draw/Drawer';
import PropTypes from 'prop-types';

const App = props => {
    const [inc, setInc] = useState(0.1);
    const [start, setStart] = useState(-5);
    const [end, setEnd] = useState(5);

    // const [canvas, setCanvas] = useState(null);
    // const [canvasElement, setCanvasElement] = useState(null);

    useEffect(() => {
        console.log("App.js: post-render");

        // Eeek! Pretty sure the Drawer component shouldn't be a React component that is called like this, outside the return statment!!!
        Drawer();

    }, []);

    const canvasSetter = (canvas, canvasElement) => {
        setCanvas(canvas);
        setCanvasElement(canvasElement);
        console.log("In canvasSetter");
    };

    const startHandler = evt => {
        setStart(evt.target.value);
        console.log("Update start: " + start);
    };

    // console.log(start);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Cosh Strange Attractors</h1>
            </header>

            <section className="content-wrap">
                <div className="sidebar">
                    <Start start={start} startHandler={startHandler} />
                </div>

                <div className="content">
                    <Canvas canvasSetter={canvasSetter} />
                    {/*<Drawer canvas={canvas} canvasElement={canvasElement} start={start} />*/}
                </div>
            </section>

            <footer>

            </footer>
        </div>
    );
};

// ??????
// App.propTypes = PropTypes.func.isRequired();



export default App;
