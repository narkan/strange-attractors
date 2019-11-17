import React from 'react';

import * as PropTypes from "prop-types";


const Settings = props => {



    return (
        <div>
            <h2>Speed</h2>
            <select className="speed">
                <option>1</option>
                <option>2</option>
            </select>

            <h2>Start</h2>
            <input type="text" name="start" onChange={props.handler}/>
        </div>
    );
};

// Settings.propTypes = {onChange: PropTypes.func};


export default Settings;