export default function RootLayout({
    children, dash1
  }: Readonly<{
    children: React.ReactNode;
    dash1: React.ReactNode;
  }>) {
    return (
      <html lang="en">
       
        <body>
            <div>{children}</div>
            <div>{dash1}</div>
        </body>
      </html>
    );
  }
  