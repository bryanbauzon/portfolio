import "./styles/global.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./theme-provider";
import { META_TITLE, META_DESCRIPTION } from "./constants/strings";
export const metadata = {
  title: { META_TITLE },
  description: { META_DESCRIPTION },
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
            <div id="top"> {children}</div>
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
