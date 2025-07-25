import "./globals.css";
import { Roboto } from "next/font/google";
import { Work_Sans } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const workSans = Work_Sans({
    subsets: ["latin"],
    variable: "--font-work-sans"
});

export const metadata = {
  title: {
    default: "Thapa Technical | Learn Web Development",
    template: "%s | Thapa Technical",
  },
  description: "Free tutorials on React.js, Next.js, and web development by Thapa Technical.",
  keywords: ["React", "Next.js", "Web Development", "Thapa Technical"],
  authors: [
    { name: "Diksha Gupta" },
    { name: "Gupta Technical", url: "https://guptatechnical.com" },
  ],
  icons: {
    icon: "/vercel.svg", 
  },
  metadataBase: new URL("https://thapatechcal.com"),

  openGraph: {
    title: "Thapa Technical",
    description: "Join the best web dev tutorials!",
    url: "https://yourdomain.com",
    siteName: "Thapa Technical",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Thapa Technical Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Thapa Technical",
    description: "Learn Web Dev from scratch with Thapa Technical!",
    creator: "@thethapatechnical",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${workSans.variable}`}
      >
        <h1 className={`text-green-400 ${workSans.className}`}>Hello Guys👋</h1>
      
        {children}
      </body>
    </html>
  );
}
