import React from 'react'

export default function GameStartButton({handleClick,id}) {
    return (
        <div className='GameStartButton' onClick={(e)=>{handleClick(id,'GameStart')}}>
            <div className="container-button">
                <div className="hover bt-1"></div>
                <div className="hover bt-2"></div>
                <div className="hover bt-3"></div>
                <div className="hover bt-4"></div>
                <div className="hover bt-5"></div>
                <div className="hover bt-6"></div>
                <button ></button>
            </div>
        </div>
    )
}
