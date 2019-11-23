import React, { useEffect } from 'react';


const Canvas = props => {

    useEffect( () => {

    });

    return (
        <div className="canvas-wrap">
            <canvas ref="canvas" width={800} height={500}></canvas>
        </div>
    );
};

export default Canvas;