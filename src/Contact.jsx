import React, { useState } from 'react'
import web from '../src/images/20943459.jpg'



const Contact = () => {

    const [data, setData] = useState({
        fullname:'',
        phone:"",
        msg:'',
        email:'',
       
    });

    const InputEvent=(event)=>{
        const {name,value} = event.target;

        setData((preval)=>{
            return{
                ...preval,
                [name]:value,
            }
        })
    }

    const formSubmit = (e)=>{
        e.preventDefault()
        alert(`Hello, ${data.fullname}.Your Mobile No is ${data.phone}.Your Email Id is ${data.email} and your feedback is ${data.msg}`)
    }

    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'> Contact Us </h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Mobile Number</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter Your Number" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label"  >Enter Your Feedback</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='msg' value={data.msg} onChange={InputEvent}></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <br/>
        </>
    )
}

export default Contact
