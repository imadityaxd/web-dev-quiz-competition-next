import type { Metadata } from "next";
import { Inter, Playfair_Display, Kanit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "./provider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/AuthContext";

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
  title: "web dev quiz",
  description: "javascript output based questions quizzes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${play_fair_display_init.variable} ${kanit.variable} bg-black-100`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <Navbar />
            {children}
          </AuthProvider>
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
