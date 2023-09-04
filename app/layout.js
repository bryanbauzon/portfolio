import Link from "next/link";
import  "./global.css";
import { Analytics } from '@vercel/analytics/react';
export const metadata = {
  title: "Bryan Bauzon - Portfolio",
  description: "Photography and Videography",
 
};

export default function RootLayout({ analytics, teams, children }) {
  return (
    <>
      <html lang="en" >
     <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" sizes="any" />
    
        {/* https://stackoverflow.com/questions/75337953/what-causes-nextjs-warning-extra-attributes-from-the-server-data-new-gr-c-s-c */}
      
        <body suppressHydrationWarning={true}>
        
          <div> {children}</div>
          {/* <section>{analytics} </section>
               <section>{teams}</section> */}
               <Analytics/>
        </body>
      </html>
    </>
  );
}
