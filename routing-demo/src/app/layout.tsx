import type { Metadata } from "next";
import { ErrorWrapper } from "./error-wrapper";
import "./globals.css";
export const metadata: Metadata = {
  title: "routing-demo",
  description: "Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem"
          }}
          >
            <p>Header</p>
        </header>
        {/* <ErrorWrapper>{children}</ErrorWrapper> */}
        {children}
        <footer
          style={{
            backgroundColor: "grey",
            padding: "1rem"
          }}
          >
            <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
