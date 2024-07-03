'use client';
import './styles/port.css';
import Image from 'react-bootstrap/Image';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';



export default function Details(){
  const resume = "https://drive.google.com/file/d/1dwyLZKRgd5rDz2KVRceeR9PiAUPj-Trz/view";


    return (
        
        <section id="contact">
        <div className='body' style={{textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
          <div >
        <div style={{marginTop: '60px', backgroundColor: '#F3F8FF', boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px', borderRadius: '5px', padding: '20px', marginBottom: '40px'}}>
        <div>
            <p style={{color: '#ed2467', fontSize: '2rem', paddingLeft: '10px', paddingRight: '10px', marginBottom: '10px', backgroundColor: '#424242', borderRadius: '5px'}} >If you are a recruiter, you may need my resume <i className="bi bi-emoji-smile"></i>  </p>
        </div>

        
           <a href='./sandhiyaResume.pdf' className="btn"  ><Image src='resume.gif' width='200px' alt='resume' style={{border: '2px solid black', borderRadius: '5px'}} /></a>
        
        
       

        </div>
        </div>

        
        {/* <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '800px'}}>
        <div style={{backgroundColor: '#3B3C44', width: '600px', height: '400px', padding: '30px', borderRadius: '5px'}}>
        
        <FloatingLabel
        controlId="floatingInput"
        label="Your name"
        className="mb-3"
        style={{ color: 'gray', border: '1px solid gray', borderRadius: '10px'}}
        
      >
        <Form.Control type="text" placeholder="name" style={{ border: '1px solid gray', borderRadius: '10px', color: 'white'}} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingemail" label="Your email" className="mb-3" style={{color: 'gray', border: '1px solid gray', borderRadius: '10px'}} >
        <Form.Control type="email" placeholder="email" style={{ border: '1px solid gray', borderRadius: '10px', color: 'white'}} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea1" label="Comments" style={{color: 'gray', border: '1px solid gray', borderRadius: '10px'}}>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px',  border: '1px solid gray', borderRadius: '10px', color: 'white' }}
          
        />
      </FloatingLabel>

        </div> */}

      <p style={{color: 'black', fontSize: '1.8rem', paddingLeft: '10px', paddingRight: '10px', marginBottom: '10px', marginTop: '20px'}}>You can reach out to me anytime through the platforms mentioned below!</p>

        <div style={{ borderRadius:'5px', padding: '15px', display: 'flex', justifyContent: 'space-between', width: '400px'}}>
            
        <a href='mailto:sandysandhiya1302@gmail.com'><i className="bi bi-envelope" style={{fontSize: '50px', marginRight: '10px', color: '#ed2467'}}></i></a>
        <a href='https://www.linkedin.com/in/sandhiya-panneerselvam-1302s/'><i className="bi bi-linkedin" style={{fontSize: '50px', marginRight: '10px', color: '#ed2467'}}></i></a>
        <a href='https://github.com/Sandhiya-1302'><i className="bi bi-github" style={{fontSize: '50px', marginRight: '10px', color: '#ed2467'}}></i></a>
   
        </div>
       



        </div>
        </section>
        
    )
}