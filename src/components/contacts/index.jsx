import Loader from "react-loaders";
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import 'leaflet/dist/leaflet.css';

import { useState, useEffect, useRef } from'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm =  useRef()

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        
        emailjs
        .sendForm(
            'service_e847dlo',
            'template_ab3buq9',
            refForm.current,
           'jt0vZdK7rg6AlXLqZ'
        ).then(
            ()=>{
                alert('Email sent successfully!')
                window.location.reload(false)
            },
            ()=>{
                alert('Failed to send email! Please try again') 
            }
        )
    }
  return (
    <>
        <div className="container contact-page">
            <div className="text-zone">
            <h1>
            <AnimatedLetters letterClass={letterClass}
                strArr={['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'M', 'E']}
                idx={15} />
            </h1>

            <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
            </p>

            <div className="contact-form">
                <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
                </form>
            </div>

                </div>

            <div className="info-map">
                Mio Kiyoka
                <br />
                Branka Taiseki-Ji 10, 22000 <br />
                Sremska Mitrovikitretsu, Japan <br />
                <span>
                    Miokiyoka805@gmail.com
                </span>
            </div>
            {/* <div className="map-wrap">
                <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png">
                    <Marker position={[44.96366, 19.61045]}>
                        <Popup>
                            Miyo lives here, come over for a cup of coffee :
                        </Popup>
                    </Marker>
                    </TileLayer>
                </MapContainer>
            </div> */}
            <div className="map-wrap">
          <MapContainer center={[35.682839, 139.759455]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[35.682839, 139.759455]}>
              <Popup><b>Miyo lives here, come over for a cup of coffee :)</b></Popup>
            </Marker>
          </MapContainer>
        </div>
        </div>
        <Loader type="pacman" />
    </>
  )
}

export default Contact
