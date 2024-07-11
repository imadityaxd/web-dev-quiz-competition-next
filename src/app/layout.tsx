import type { Metadata } from "next";
import { Inter, Playfair_Display, Kanit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });
const play_fair_display_init = Playfair_Display({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-playfair_display",
});
const kanit= Kanit({
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
      <body className={`${inter.className} ${play_fair_display_init.variable} ${kanit.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

