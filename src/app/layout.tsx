import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "LAL Pathology — Blood Reports Online | NABL Accredited Lab",
  description:
    "Access your blood test reports online instantly. NABL accredited diagnostic lab offering CBC, Thyroid, Liver, Kidney, Diabetes, Vitamin tests with 24-hour digital reports.",
  keywords: [
    "blood test report online",
    "pathology lab Dehradun",
    "NABL accredited lab",
    "CBC test",
    "thyroid profile",
    "LAL pathology",
  ],
  openGraph: {
    title: "LAL Pathology — Your Health Reports, Anywhere",
    description:
      "Secure, instant access to your blood test reports. NABL accredited with 50,000+ patients served.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.875rem",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
