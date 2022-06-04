// import App from '../pages/App'
import Home from '../pages/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'

const routes = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<App />} /> */}
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Navigate to="/" />}></Route>
        </Routes>);
}


export default routes;