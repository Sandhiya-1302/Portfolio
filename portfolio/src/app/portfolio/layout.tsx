'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

export default function RootLayout({
    children, about, projects, details
  }: Readonly<{
    children: React.ReactNode;
    about: React.ReactNode;
    projects: React.ReactNode;
    details: React.ReactNode;

  }>) {
    return (
      <html lang="en">
        <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
       
        
        
      </head>
       
        <body>
          
            
            <div>{children}</div>
            <div>{about}</div>
            <div>{projects}</div>
            <div>{details}</div>

            
        </body>
      </html>
    );
  }