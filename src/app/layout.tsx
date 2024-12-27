'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { SessionProvider } from "next-auth/react";
import "@fontsource/inter";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{backgroundColor: "#f5f7fa"}}>
      <body style={{ margin: 0, padding: 0, backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
