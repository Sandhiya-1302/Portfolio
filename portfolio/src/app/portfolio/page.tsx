'use client';
import React from "react";
// import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import './styles/port.css';
import Button from 'react-bootstrap/Button';
import { Nav } from "react-bootstrap";
import 'aos/dist/aos.css';
import AOS from 'aos';
import PortNav from "./@navbar/page";


export default function PortfolioHome(){

  function handleClick(){
    //move to about section
    window.scrollTo({top: 695, behavior: 'smooth'});

  }

  useEffect(() => {
    AOS.init({
        duration: 1200,
    });
    }, []);

  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 991px)' });
  // const isDesktop = useMediaQuery({ query: '(min-width: 992px)' });

    return (
      
        <section id="home">
          
        <div className= 'body' style={{textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
        <div >
        <div style={{display: 'flex', marginTop: '-180px', marginLeft: '300px', position: 'fixed', zIndex: '1', border: 'none', backgroundColor: 'rgba(255, 255, 255, 0.327)'}}>

          <PortNav />
      
        </div>
        </div>
            
        
            <div style={{textAlign: 'center'}}>
            <h1 className="display-5" style={{fontWeight: 'bold', fontSize: '5rem', marginBottom: '20px'}}>Hello!</h1>
            <h1 className="display-5" style={{fontWeight: 'bold', fontSize: '5rem', marginBottom: '20px'}}>I'm Sandhiya</h1>
            <div >
            
            <div >
              <Button variant="dark" style={{fontSize: '2rem', fontWeight: 'bold', backgroundColor: '#ed2449', color: 'black'}} onClick={handleClick}>Checkout Portfolio <i className="bi bi-eye-fill" style={{fontSize: '2rem', fontWeight: 'bold', marginLeft: '5px'}}></i></Button>
            </div>

            </div>

            </div>
            

        </div>
        
        </section>
        

    )

}