import React from "react";
import imgBack from '../../src/imgs/imgscontactme/mailz.jpeg'
import load1 from '../../src/imgs/imgscontactme/load2.gif'
import Typical from 'react-typical'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useRef } from "react";


export default function ContactMe() {

        const [name, setName] = useState("")
        const [email, setEmail] = useState("")
        const [message, setMessage] = useState("")
        const [banner, setBanner] = useState("")
        const [bool, setBool] = useState(false)

        const handleName =  (e) =>{
            setName(e.target.value);
        };
        const handleEmail =  (e) =>{
            setEmail(e.target.value);
        };
        const handleMessage =  (e) =>{
            setMessage(e.target.value);
        };
        console.log(name);
        const submitForm = async(e) =>{
            e.preventDefault();

            try {
                let data = {
                    name,
                    email,
                    message,
                };
                setBool(true)
                const res = await axios.post('/contact', data)
                if(name.length === 0 || email.length === 0 || message.length === 0){
                    setBanner(res.data.msg)
                    toast.error(res.data.msg)
                    setBool(false)
                }else if(res.status=== 200){
                    setBanner(res.data.msg)
                    toast.success(res.data.msg)
                    setBool(false)

                }
                
            } catch (error) {
                console.log(error)
                
            }

            // let data = {
            //     name,
            //     email,
            //     message,
            // };
           // console.log(data);
        }


    return (
        <div className="container-contactme">
            <div className="central-form">
                <div className="col">

                    <div>
                        {/* HERE I made the text effect infinity loop in movement,.. */}
                            
                            <Typical 
                            className="word-color-white"
                            loop={Infinity} 
                            //Steps Changing following time "1000.."
                            steps={[ 
                                "Ethusiastic Dev 🚨",
                                2000,
                                "Full Stack Developer 🤓",
                                2000,
                                "React Developer 🚀",
                                2000,
                                "Mongo Db / Express 💻",
                                2000,
                            ]}
                            />

                                
                    </div>

                    <div className="back-form">
                                
                                <div className="img-back">
                                    <h4>Send Your Email Here!</h4>
                                </div>

                                <form onSubmit={submitForm}>
                                    <p>{banner}</p>
                                    <label htmlFor="name">Name</label>
                                    <input type='text' onChange={handleName}/>

                                    <label htmlFor="email">Email</label>
                                    <input type='email' onChange={handleEmail}/>

                                    <label htmlFor="message" placeholder="Let your message!">Message</label>
                                    <textarea type='text' onChange={handleMessage}/>

                                    <div className="send-btn">
                                        <button type="submit">
                                            send<z className="fab fa-paper-plane"></z>
                                            {bool? (<b className="load">
                                                <img src={load1} alt="image not responding"/>
                                            </b>):("")}
                                        </button>
                                    </div>
                                </form>

                            </div>

                </div>

            </div>

        </div>
    )
}