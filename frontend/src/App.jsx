import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ListingPage1 from './pages/ListingPage1'
import ListingPage2 from './pages/ListingPage2'
import ListingPage3 from './pages/ListingPage3'
import { userDataContext } from './Context/UserContext'
import MyListing from './pages/MyListing'
import ViewCard from './pages/ViewCard'
import MyBooking from './pages/MyBooking'


function App() {
  let {userData} = useContext(userDataContext)
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/ListingPage1' element={userData != null ? <ListingPage1/>:<Navigate to={"/"}/>}/>
        <Route path='/ListingPage2' element={userData != null ? <ListingPage2/>:<Navigate to={"/"}/>}/>
        <Route path='/ListingPage3' element={userData != null ? <ListingPage3/>:<Navigate to={"/"}/>}/>
        <Route path='/mylisting' element={userData != null ? <MyListing/>:<Navigate to={"/"}/>}/>
        <Route path='/viewcard' element={userData != null ? <ViewCard/>:<Navigate to={"/"}/>}/>
        <Route path='/mybooking' element={userData != null ? <MyBooking/>:<Navigate to={"/"}/>}/>


      </Routes>

    </div>
  )
}

export default App
