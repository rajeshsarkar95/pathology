import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { DM_Sans, DM_Serif_Display } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-dm-sans",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-dm-serif",
});

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
    <html lang="en" className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
      <body>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.875rem",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}