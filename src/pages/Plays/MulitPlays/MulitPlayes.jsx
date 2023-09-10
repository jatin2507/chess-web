import React, { useState } from 'react'
import Matching from '../../../Components/Matching'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import ConfirmModel from '../../../Components/Poppap/Confirm'
import { useNavigate } from 'react-router-dom'
import ChessBoard from '../../../Components/chessBoard'
import Static from '../../../Components/Satics'
import { Col, Row } from 'antd'

export default function MulitPlayes() {
    const dispatch = useDispatch()
    let nevigate = useNavigate()
    let match = useSelector((state) => state.match);
    let userInfo = useSelector((state) => state.userInfo);
    const [waitingLoader, setwaiting] = useState(true)
    const [user, setuser] = useState()
    const [opponent, setopponent] = useState()

    useEffect(() => {
        dispatch({ type: 'req@playes:findRoom', payload: {} })
        return () => {
            ConfirmModel({
                handleCancel: () => {
                    nevigate(
                        '/multi-player'
                    )
                },
                props: { title: 'Are You Want To Leave Runnig Game', content: 'If You Leave This Page You Lose Game And Opponet will Win This Game Also Your Score Will Effect' }
            })
        }
    }, [])
    useEffect(() => {
        setwaiting(match?.isWaiting)
        let index = match?.players?.indexOf(userInfo._id)
        setuser(match?.playersInfo?.[index])
        setopponent(match?.playersInfo?.[Math.abs(index - 1)])
    }, [match]);
    return (
        <div>
            {waitingLoader ? <Matching /> :
                <div className='grid-container'>
                    <ChessBoard className='grid-item' />
                    <div className="grid-item">
                        <Static />
                    </div>
                </div>
                }
        </div>
    )
}
