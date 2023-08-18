import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Form, Input } from 'antd';
import { Layout, Menu, theme, message, Result, Spin, Alert } from 'antd';

import '../styles/login.css'
import managerImg from '../assets/manager.png'
import empImg from '../assets/emp.png'
import hrImg from '../assets/hr.png'
import logo from '../assets/logo.png'

export default function Login() {
    const params = useParams();
    const { person } = params;
    const navigate = useNavigate()
    const [uid, setUid] = useState('')
    const [password, setPassword] = useState('')
    // const [msg, setMsg] = useState('')

    // const handleLogin = async (e) => {
    //     e.preventDefault();

    //     const res = await fetch('http://localhost:4100/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         credentials: 'include',
    //         body: JSON.stringify({ uid, password, person })
    //     })

    //     const data = await res.json();
    //     console.log('data in login :>> ', data);

    //     if (data?.err) {
    //         window.alert(data.err)
    //     }
    //     else if (data?.success) {
    //         if (person === "employee") {
    //             window.alert(data.success)
    //             navigate('/dashboard')

    //         }
    //         else if (person === "HR") {
    //             window.alert(data.success)
    //             navigate('/dashboard')
    //         }
    //         else if (person === "manager") {
    //             window.alert(data.success)
    //             navigate('/dashboard')
    //         }
    //     }
    // }
    return (
        <>
            <main className='padding'>
                <div class="box">
                    <div class="inner-box">
                        <div className="left">
                            <div class="header">
                                <div >
                                    <h2>Welcome</h2>
                                    <h5>Login as {person}</h5>
                                </div>
                                <img src={logo} alt="logo" className='logo' />
                            </div>
                            <div class="forms-wrap">
                                <Form name="basic" initialValues={{ remember: true, }} className='loginform'>
                                    <Form.Item
                                        label={person + " ID"}
                                        name="userID"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your user ID!',
                                            },
                                        ]}
                                    >
                                        <Input onChange={(e) => setUid(e.target.value)} />
                                    </Form.Item>

                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                        ]}
                                    >
                                        <Input.Password onChange={(e) => setPassword(e.target.value)} />
                                    </Form.Item>


                                    <Form.Item wrapper Col={{ offset: 8, span: 16, }}>
                                        <Button type="primary" htmlType='submit' onClick={handleLogin}>
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Form>
                                {/* <p class="text">
                                    Forgotten your password or you login datails?
                                    <a href="#"><br />Get help</a> signing in
                                </p> */}
                            </div>
                        </div>

                        <div className="right">
                            {person === 'employee' &&
                                <img src={empImg} alt="employee" width='70%' height='70%' />}
                            {person === 'manager' &&
                                <img src={managerImg} alt="manager" width='100%' height='70%' />}
                            {person === 'HR' &&
                                <img src={hrImg} alt="hr" width='90%' height='75%' />}
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}