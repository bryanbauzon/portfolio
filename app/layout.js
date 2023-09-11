import Link from "next/link";
import './styles/global.css'
import { Analytics } from '@vercel/analytics/react';
export const metadata = {
  title: "Bryan Bauzon - Portfolio",
  description: "Photography and Videography",
};

export default function RootLayout({ children }) {

  return (
    <>
      <html lang="en" className="scroll-smooth">
        {/* https://stackoverflow.com/questions/75337953/what-causes-nextjs-warning-extra-attributes-from-the-server-data-new-gr-c-s-c */}
        <body suppressHydrationWarning={true}>
          <div> {children}</div>
          <Analytics />
        </body>
      </html>
      
    </>
  );
}
