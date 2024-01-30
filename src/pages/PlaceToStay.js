import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Place from '../components/Place'

const PlaceToStay = ({setModal}) => {
  return (
    <div>
      <Navbar setModal={setModal} />
      <Place />
      <Footer />
    </div>
  )
}

export default PlaceToStay