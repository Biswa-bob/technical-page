import React from 'react'
import web from '../src/images/1026.jpg'
import Common from './Common'

const About = () => {
    return (
        <>
         <Common
            name='We are happy to help you !'
           imgsrc = {web}
           visit = './contact'
           btname='Contact Us'
        />
        <br/>
        </>
    )
}

export default About
