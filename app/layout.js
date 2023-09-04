import Link from "next/link";
import './global.css'

export const metadata = {
  title: "Bryan Bauzon - Portfolio",
  description: "Photography and Videography",
};

export default function RootLayout({ analytics, teams, children }) {
  return (
    <>
      <html lang="en" >
        {/* https://stackoverflow.com/questions/75337953/what-causes-nextjs-warning-extra-attributes-from-the-server-data-new-gr-c-s-c */}
        <body suppressHydrationWarning={true}>
          <div> {children}</div>
        </body>
      </html>
    </>
  );
}
