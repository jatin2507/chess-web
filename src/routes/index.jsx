import React, { useEffect } from 'react'
import { Menu } from './routes'
import { Route, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { useCookies } from 'react-cookie';

export default function IndexPage() {
    return (Menu.map(({ path, name, component: Component }, key) => (<Route path={path} element={name == 'auth' ? <Component /> : <Navbar route={path} component={Component} />} key={key} />)
    ))
}
