import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export default function ChessBoard({ poz }) {
    const [chessboardState, setChessboardState] = useState([]);
    const [dragging, setdragging] = useState(false)
    useEffect(() => {
        if (poz?.length) setChessboardState([...poz])
    }, [poz])
    return (
        <div className="chessboard grid-item" style={{ width: '96%', height: '96%' }}>
            <div className="overflow-hidden">
                <div className="relative" style={{ paddingBottom: '100%', }}>
                    <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 piece">
                        {chessboardState.length ? chessboardState.map((value, index) => (
                            <div
                                key={index}
                                className={` ${(index + Math.floor(index / 8)) % 2 === 0 ? 'bg-white' : 'bg-black'
                                    } square`}
                            >
                                <div id={index} className={value} draggable='true' />
                            </div>
                        )): 'Matching ...'}
                    </div>
                </div>
            </div>
        </div>
    );
}
