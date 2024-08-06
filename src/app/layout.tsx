import type { Metadata } from "next";
import { Inter, Playfair_Display, Kanit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "./provider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
const play_fair_display_init = Playfair_Display({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-playfair_display",
});
const kanit = Kanit({
  subsets: ["latin"],
  weight: "400",
  variable: "--kanit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.webdevquiz.online"),
  title: "JavaScript Quiz - Test Your Skills and Compete with Others",
  description:
    "Join the JavaScript and web dev Quiz Challenge to test your skills with output-based questions. Compete in weekly quizzes, see your rank on the leaderboard, and enhance your JavaScript knowledge. Perfect for developers looking to sharpen their coding skills!",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: "JavaScript Quizzes - Test Your Skills and Compete with Others",
    description:
      "Join the JavaScript and web dev Quiz Challenge to test your skills with output-based questions. Compete in weekly quizzes, see your rank on the leaderboard, and enhance your JavaScript knowledge. Perfect for developers looking to sharpen their coding skills!",
    url: "https://www.webdevquiz.online",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.webdevquiz.online/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "JavaScript Quizzes - Test Your Skills and Compete with Others",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${play_fair_display_init.variable} ${kanit.variable} bg-black-100 dark`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              success: {
                icon: "🎉",
                duration: 3000,
                style: {
                  border: "2px solid #4CAF50",
                  background: "#dff0d8",
                  color: "#3c763d",
                  borderRadius: "8px",
                  padding: "12px 20px",
                  fontSize: "16px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                },
              },
              error: {
                icon: "⚠️",
                duration: 3000,
                style: {
                  border: "2px solid #F44336",
                  background: "#f2dede",
                  color: "#a94442",
                  borderRadius: "8px",
                  padding: "12px 20px",
                  fontSize: "16px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                },
              },
            }}
          />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
