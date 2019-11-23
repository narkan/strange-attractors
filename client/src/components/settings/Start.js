import React, { useEffect } from 'react';

const Start = props => {

   // console.log(props);

    return (
        <div className="start-wrap">
            <h2>Start</h2>
            <input type="text"
                   value={props.start}
                   onChange={props.startHandler}
            />
        </div>
    );
};

export default Start;