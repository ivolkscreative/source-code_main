import { Analytics } from "@vercel/analytics/next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/scrolling/SmoothScrolling";
import AnimationPage from "@/components/animation/AnimationPage";

const monserrat = Montserrat({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], style: ["normal", "italic"], subsets: ["latin"], display: "swap" });
export const metadata = {
  title: "iVOLKS Creative",
  description: "Creative house based in Jakarta, Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monserrat.className}>
        <AnimationPage>
          <SmoothScrolling>
            {children}
            <Analytics />
          </SmoothScrolling>
        </AnimationPage>
      </body>
    </html>
  );
}
