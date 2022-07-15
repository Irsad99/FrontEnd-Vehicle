import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Detail from './pages/details/detail'
import Update from './pages/updates/updates'
import Vehicle from './pages/vehicle/vehicle'
import Search from './pages/search/search'
import SortLocation from './pages/sortLocation/sort.location'
import SortPrice from './pages/sortPrice/sort.price'
import SortType from './pages/sortType/sort_type'
import Login from './pages/login/login'
import Register from './pages/register/register'

function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="detail/:id" element={<Detail />} />
                <Route path="search/:name/:location" element={<Search />} />
                <Route path="update/:id" element={<Update />} />
                <Route path="vehicle" element={<Vehicle />} />
                <Route path="sortlocation/:location" element={<SortLocation />} />
                <Route path="sortprice/:price" element={<SortPrice />} />
                <Route path="sorttype/:type" element={<SortType />} />
            </Routes>
        </BrowserRouter>
    )
}

export default router