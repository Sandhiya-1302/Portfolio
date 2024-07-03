'use client';
import React from 'react';
import { useEffect } from 'react';
import './styles/port.css';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { details, description } from './data';



export default function About() {

    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);


    return (
        <section id="about">

            <div className='body'>
                <div style={{ backgroundColor: 'black', width: '1000px', height: '550px', textAlign: 'center', padding: '20px' }}>
                    <h1 style={{ color: '#e31e45', fontWeight: 'bold' }} className='display-5'><u>About me</u></h1>
                    <p style={{ fontSize: '20px', padding: '20px', color: 'white' }}>{description}</p>
                    <div className='' style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
                        {details.map((detail, index) => {
                            return (
                                <>
                                    <div data-aos="fade-down">
                                        <Button className='anime' style={detail.btnStyle}>{detail.skill}<div >  <Image src={detail.imgSrc} width='300px' alt='next' className='icon' style={detail.imgStyle} /></div></Button>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}