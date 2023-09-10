import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
export default function ChessBoard() {
    const renderChessboard = () => {
        const squares = [];
        for (let i = 0; i < 64; i++) {
            const row = Math.floor(i / 8);
            const col = i % 8;
            const squareColor = (row + col) % 2 === 0 ? 'white' : 'black';
            squares.push(
                <div id={String.fromCharCode(65 + col) + (8 - row)} key={i} className={`square ${squareColor}`}>
                </div>
            );
        }
        return squares;
    };
    return (
        <div className="container grid-item" >
            <div className="chessboard">
                {renderChessboard()}
            </div>
        </div>
    );
};

