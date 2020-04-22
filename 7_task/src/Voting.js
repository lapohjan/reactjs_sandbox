import React, { useState } from 'react';
import Content from './Content';
import Button from './Button';
import './Voting.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken, faRedoAlt } from '@fortawesome/free-solid-svg-icons'


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
                <Button handleClick={addLove} text="LOVE  "><FontAwesomeIcon icon={faHeart} /></Button>
                
                <Button handleClick={addHate} text="HATE  "><FontAwesomeIcon icon={faHeartBroken} /></Button>
                
                <Button handleClick={resetVotes} text="RESET  "><FontAwesomeIcon icon={faRedoAlt} /></Button>
            </div>
            <div>
                <Content love={love} hate={hate} />
            </div>
        </div>
    );
};

export default Voting;

