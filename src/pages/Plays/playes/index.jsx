import React, { useRef, useState } from 'react';
import { Carousel } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Arrow from '../../../Components/Arrow';
import GameStartButton from '../../../Components/Button';



function Playes() {
    const [activeElement, setActiveElement] = useState(null);
    let nevi = useNavigate();
    let silder = useRef()

    const handleClick = (element, type) => {
        if (type === 'ThreeClick') {
            silder.current(element.target.id - 1);
        }
        if (type === 'GameStart') {
           nevi(element);
        }
    };
    const handleNevi = (path) => {
        nevi(path);
    };

    return (
        <div className="playes">
            <Carousel ref={(props) => { silder.current = props?.goTo ?? ''; }} infinite={true} draggable={true} >
                <div>
                    <ThreeButton handleClick={handleClick} id='1' />
                    <GameStartButton id='/multi-player' handleClick={handleClick} />
                </div>
                <div>
                    <ThreeButton handleClick={handleClick} id='2' />
                    <GameStartButton id='/custom-room' handleClick={handleClick} />
                </div>
                <div>
                    <ThreeButton handleClick={handleClick} id='3' />
                    <GameStartButton id="/single-player" handleClick={handleClick} />
                </div>
            </Carousel>
        </div>
    );
}


function ThreeButton({ handleClick, id }) {
    return (
        <>
            <div className="three-button">
                <button className={`button-hover-test ${id == 1 ? 'selected' : ""}`} id='1' onClick={(e) => handleClick(e, 'ThreeClick')}><span id='1' >Multi Player</span></button>
                <button className={`button-hover-test ${id == 2 ? 'selected' : ""}`} id='2' onClick={(e) => handleClick(e, 'ThreeClick')}><span id='2' >Custom Player</span></button>
                <button className={`button-hover-test ${id == 3 ? 'selected' : ''}`} id='3' onClick={(e) => handleClick(e, 'ThreeClick')}><span id='3' >Singe Player</span></button>
            </div>
        </>

    )
}

export default Playes;
