import React, { useState } from 'react';
import Content from './Content';
import Button from './Button';
import './Voting.css';


const Voting = () => {
    const [love, setLove] = useState(0);
    const [hate, setHate] = useState(0);

    const addLove = () => setLove(love +1);
    const addHate = () => setHate(hate +1);
    
    const resetVotes = () => {
        setLove(0);
        setHate(0);
      }

    return (
        <div>
            <div>
                <Button handleClick={addLove} text="LOVE"/>
                <Button handleClick={addHate} text="HATE"/>
                <Button handleClick={resetVotes} text="RESET" />
            </div>
            <div>
                <Content love={love} hate={hate} />
            </div>
        </div>
    );
};

export default Voting;

