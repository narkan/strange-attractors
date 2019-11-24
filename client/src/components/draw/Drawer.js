import React, { useEffect } from 'react';


const Drawer = props => {

    // useEffect( () => {
    //
    // });

    console.log(props);

    // CANVAS
    // See Canvas.js
    // const canvasElement = document.getElementById('canvas');
    // const canvas = canvasElement.getContext('2d');
    const canvasElement = props.canvasElement;
    const canvas        = props.canvas;

    const canvasWidth   = canvasElement.width;
    const canvasHeight  = canvasElement.height;

    // console.log(canvasWidth + ' ' + canvasHeight);

    canvas.font = "12px Courier";
    canvas.fillStyle = "black";


    // TIME
    const start = -10;   // Start time
    // const start = props.start;   // Start time
    const end = 10;    // End time
    const inc = 0.1;   // Increment
    const frameRate = 200;   // FPS
    let t = start;           // Time


    // POINTS
    let point = {};   // { x, y }
    const pointRadius = 3;


    // DRAW A FRAME AT REGULAR INTERVALS
    // const frameCreator = setInterval(drawFrame, 1000 / frameRate);
    drawFrame();

    /**
     * Draw next frame
     *     (Called by setInterval every xxx milliseconds)
     */
    function drawFrame() {

        for( t = start; t < end; t += inc ) {
            // Clear canvas before drawing
            clearTextOnly();
            // clearWholeCanvas();

            getCoords();
            drawPoint();
        }


        // t += inc;

        // If the end is reached, stop the Interval timer
        // if (t > end) {
        //     clearInterval(frameCreator);
        // }
    }


    /**
     * Add a point to the canvas
     */
    function drawPoint() {

        // Draw the point
        canvas.beginPath();
        canvas.arc(canvasWidth / 2 + point.x, canvasHeight / 2 - point.y, pointRadius, 0, 2 * Math.PI);
        canvas.fill();

        // Add text showing the coordinates to the canvas
        canvas.fillText('t: ' + t.toFixed(3), 20, canvasHeight - 70);
        canvas.fillText('x: ' + point.x.toFixed(3), 20, canvasHeight - 50);
        canvas.fillText('y: ' + point.y.toFixed(3), 20, canvasHeight - 30);
        canvas.fillText('fps: ' + frameRate, 20, canvasHeight - 10);
    }


    /**
     * Get the coordinates for the point
     */
    function getCoords() {
        let x = Number(t * 10);
        let y = Number(2 * t * t);

        // let x = Number( - (t * t) - (point.x * point.y) + t);
        // let y = Number( - (point.x * point.y) + (point.x * t) + point.y + t);

        // let x = parseInt( - (x * x) - (t * t) + (x * t) - y * t - x);
        // let y = parseInt( - (x * x) + (t * t) + (x * t) - x - y);

        point.x = x;
        point.y = y;
    }


    /**
     * Clear the canvas area where the text is displayed
     */
    function clearTextOnly() {
        canvas.clearRect(0, canvasHeight - 80, canvasWidth, canvasHeight);
    }


    /**
     * Clear the whole canvas
     */
    function clearWholeCanvas() {
        canvas.clearRect(0, 0, canvasWidth, canvasHeight);
    }

    return (
        <div>
            <p>Drawing</p>
        </div>
    );
};

export default Drawer;
