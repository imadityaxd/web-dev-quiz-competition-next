import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Play JavaScript Quiz - Rules and Instructions of Competition",
  description: "Get ready to test your JavaScript skills! Review the rules and instructions for the JavaScript quiz competition and click the button to start the quiz.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: "Start JavaScript Quiz - Rules and Instructions",
    description: "Get ready to test your JavaScript skills! Review the rules and instructions for the JavaScript quiz competition and click the button to start the quiz.",
    url: "https://www.webdevquiz.online/start-quiz",
    locale: "en_IN",
    images: [
      {
        url: "https://www.webdevquiz.online/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Start JavaScript Quiz - Rules and Instructions",
      },
    ],
  },
};

const StartQuizLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default StartQuizLayout;
