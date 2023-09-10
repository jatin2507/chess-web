import React, { useEffect, useState } from 'react'
import Login from './Login'
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../Components/Loader';
export default function Auth() {
    const [cookies, setCookie] = useCookies();
    const [loader, setloader] = useState(false)
    const token = useSelector((state) => state.token);
    const dispatch = useDispatch()
    let nevi = useNavigate()
    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
            setloader(false)
            handleNevi('/')
        }
    }, [token]);

    let handleNevi = (filePath) => {
        nevi(filePath)
    }
    
    let handleGuest = () => {
        setloader(true)
        dispatch({ type: 'req@auth:guest', payload: { role: 'guest' } })
    }
    return (
        <div>
            {loader ? <Loader />
                :
                <div className="login-page">
                    <div className="login-box">
                        <div className="illustration-wrapper">
                            <img src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700" alt="Login" />
                        </div>
                        <Form
                            name='login-form'
                            initialValues={{ remember: true }}
                        // onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        >
                            <p className="form-title">Please Select ...</p>
                            <br />
                            <br />
                            <br />
                            <br />
                            <Form.Item>
                                <Button onClick={() => handleNevi('/Login')} className="login-form-button button-hover">
                                    LOGIN OR REGISTER
                                </Button>
                            </Form.Item>
                            <Form.Item>
                                <Button onClick={handleGuest} className="login-form-button button-hover ">
                                    PLAY AS GUEST
                                </Button>
                            </Form.Item>
                        </Form>

                    </div>
                </div>
            }
        </div>
    )
}
