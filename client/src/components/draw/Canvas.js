import React, { useEffect, useRef } from 'react';


const Canvas = props => {
    const canvasRef = useRef(null);

    useEffect( () => {
        const canvasElement = canvasRef.current;
        const canvas = canvasElement.getContext("2d");

        props.canvasSetter(canvasElement, canvas);
    });

    return (
        <div className="canvas-wrap">
            <canvas ref={canvasRef} width={800} height={500}></canvas>
        </div>
    );
};

export default Canvas;