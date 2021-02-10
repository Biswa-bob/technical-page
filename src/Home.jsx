import React from 'react'
import { NavLink } from 'react-router-dom'
import web from '../src/images/20943459.jpg'
import Common from './Common'

const Home = () => {
    return (
       <Common
           name='Welcome, Grow your business with'
           imgsrc = {web}
           visit = './services'
           btname='Get Started'
       />
    )
}

export default Home
