import React from 'react'
import {  Routes, Route,} from "react-router-dom";
import { Login } from '../components/Login';
import { Home } from '../components/Home';

export const AllRouter = () => {
  return (
    <div>  
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
    </Routes>
    </div>
  )
}
