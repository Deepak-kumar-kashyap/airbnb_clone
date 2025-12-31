import axios from 'axios'
import React, { Children, createContext, useContext, useState } from 'react'
import { authDataContext } from './AuthContext'
import { userDataContext } from './UserContext'
import { listingDataContext } from './ListingContext'



export const bookingDataContext = createContext()


function BookingContext({ children }) {

  let [checkIn, setCheckIn] = useState("")
  let [checkOut, setCheckOut] = useState("")
  let [total, setTotal] = useState(0)
  let [night, setNight] = useState(0)
  let {serverUrl} = useContext(authDataContext)
  let {getCurrentUser} = useContext(userDataContext)
  let {getListing} = useContext(listingDataContext)
  let [bookingData, setBokingData] = useState([])

  const handleBooking = async (id)=>{
    try {
      let result = await axios.post(serverUrl + `/api/booking/create/${id}`,
        {
          checkIn, checkOut, totalRent:total
        },{withCredentials:true}
      )
      await getCurrentUser()
      await getListing()
      setBokingData(result.data)
      console.log(result.data)

    } catch (error) {
      console.log(error)
      setBokingData(null)
    }
  }


  let value = {
    checkIn, setCheckIn,
    checkOut, setCheckOut,
    total, setTotal,
    night, setNight,
    bookingData, setBokingData,
    handleBooking

  }

  return (
    <bookingDataContext.Provider value={value}>
      {children}
    </bookingDataContext.Provider>
  )
}

export default BookingContext
