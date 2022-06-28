import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Detail from './pages/details/detail'
import Vehicle from './pages/vehicle/vehicle'

function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="vehicle/detail/:id" element={<Detail />} />
                <Route path="detail/:id" element={<Detail />} />
                <Route path="vehicle" element={<Vehicle />} />
            </Routes>
        </BrowserRouter>
    )
}

export default router