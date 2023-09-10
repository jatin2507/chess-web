import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
export default function Login() {
    const [Register, setRegister] = useState(false)
    let dispatch = useDispatch()
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    let handleGuest = () => {
        dispatch({ type: 'req@auth:guest', payload: { role: 'guest' } })
    }

    return (
        <div className="login-page">
            <div className="login-box">
                    <div className={Register ? "illustration-wrapper-register illustration-wrapper" : "illustration-wrapper"}>
                        <img src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700" alt="Login" />
                    </div>
                <Form
                    name="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <p className="form-title">
                        {Register ? "Welcome To Our ChessHub" : "Welcome back"}
                    </p>
                    <br />
                    <br />
                    {Register &&
                        <>
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input
                                    placeholder="Username"
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password
                                    placeholder="Password"
                                />
                            </Form.Item>
                        </>
                    }
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input
                            placeholder="Username"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                            placeholder="Password"
                        />
                    </Form.Item>


                    <Form.Item>
                        <Button htmlType="submit" className="login-form-button button-hover">
                            {Register ? "Register" : "Login"}
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <a onClick={() => { setRegister(!Register) }} className="button-hover">
                            {Register ? "Already Have Account? Login" : "Don't have an account? Register"}
                        </a>
                        <br />
                        <a onClick={handleGuest} className="button-hover">
                            Play As Guest
                        </a>
                    </Form.Item>

                </Form>
            </div>
        </div>
    );
};
