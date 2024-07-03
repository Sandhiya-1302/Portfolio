'use client';

import { Nav } from "react-bootstrap";


export default function PortNav(){
    return (
        <div >
            <Nav className="justify-content-end" activeKey="/home" >
            
        <Nav.Item>
          <Nav.Link href="#home" ><h1 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#ed2467'}}>Home</h1></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#about"><h1 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#ed2467'}}>About</h1></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#projects"><h1 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#ed2467'}}>Projects</h1></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#contact"><h1 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#ed2467'}}>Contact</h1></Nav.Link>
        </Nav.Item>
        
        
        
      </Nav>
      </div>
        
    )
}