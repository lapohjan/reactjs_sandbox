import React from 'react';
import './Circle.css';

const Circle = (props) => {
    return (
    <div 
        className={"circle" + (props.active ? ' active' : ' ')}
        onClick={props.click}
        style={{
            backgroundColor : props.active ? props.active : props.mydefaultcolor
        }}
        ></div>
    );
};

export default Circle;