import React, { useState } from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import { useEffect } from 'react';
const { Countdown } = Statistic;
export default function Static({ time, userInfo, opponentInfo }) {
    const [userTimer, setuserTimer] = useState(userInfo?.timer || 60000)
    const [opponentTimer, setopponentTimer] = useState(opponentInfo?.timer || 60000)
    const [isActive, setIsActive] = useState(false);
    const [user, setuser] = useState(userInfo || {})
    const [opponent, setopponent] = useState(opponentInfo || {})

    useEffect(() => {
        setuser({ ...userInfo })
        setopponent({ ...opponentInfo })
    }, [userInfo, opponentInfo])

    useEffect(() => {
        let interval;
        if (!userTimer || !opponentTimer) {
            clearInterval(interval);
            console.log('Time Over')
        }
        if (user.time) interval = setInterval(() => {
            setuserTimer((prevMilliseconds) => prevMilliseconds - 10);
        }, 10);
        if (opponent.time) interval = setInterval(() => {
            setopponentTimer((prevMilliseconds) => prevMilliseconds - 10);
        }, 10)
        return () => {
            clearInterval(interval);
        };
    }, [isActive, userTimer, opponentTimer]);




    const formatTime = (milliseconds) => {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        const millis = milliseconds % 1000;

        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(millis).padStart(3, "0")}`;
    };

    const handleStart = () => {
        setIsActive(true);
    };

    const handlePause = () => {
        setIsActive(false);
    };

    const handleResume = () => {
        setIsActive(true);
    };

    return (
        <div className="static">
            <Row>
                <Col span={12}>
                    <div className="countdown-timer">
                        <h1>You:</h1>
                        <div className="timer">{formatTime(userTimer)}</div>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="countdown-timer">
                        <h1>Opponent:</h1>
                        <div className="timer">{formatTime(userTimer)}</div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
