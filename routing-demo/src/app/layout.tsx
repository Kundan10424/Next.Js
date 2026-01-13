import type { Metadata } from "next";

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
        {children}
        <footer
          style={{
            backgroundColor: "ghostwhite",
            padding: "1rem"
          }}
          >
            <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
