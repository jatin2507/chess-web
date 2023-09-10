import React, { useState } from 'react'
import Matching from '../../../Components/Matching'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function MulitPlayes() {
    const [waitingLoader, setwaiting] = useState(true)
    const dispatch = useDispatch()
    let waiting = useSelector((state) => state.waiting);
    useEffect(() => {
        dispatch({ type: 'req@playes:findRoom', payload: {} })
    }, [])
    useEffect(() => {
        setwaiting(waiting?.isWaiting)
    }, [waiting]);
    return (
        <div>
            {waitingLoader ? <Matching /> : <div>Multi Playes</div>}
        </div>
    )
}
