import "./styles/global.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./theme-provider";
export const metadata = {
  title: "Bryan Bauzon - Software Developer",
  description:
    "My online space that shows my interests and passion in software technologies and other stuffs.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" className="scroll-smooth">
        {/* https://stackoverflow.com/questions/75337953/what-causes-nextjs-warning-extra-attributes-from-the-server-data-new-gr-c-s-c */}
        <body
          suppressHydrationWarning={true}
          className={`bg-light dark:bg-darkMode`}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div> {children}</div>
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
