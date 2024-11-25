import Nav from "@components/Nav";
import "@styles/globals.css";


export const metadata = {
  title: "AI Prompts",
  description: "Prompts to share",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav/>
          {children}
        </main>
      
    </body>
  </html>
);

export default RootLayout;