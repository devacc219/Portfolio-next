'use client';
import { useEffect, useState } from "react";
import Splash from "../splash/splash";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

export default function RootLayoutSplash({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const splashShown = sessionStorage.getItem('splashScreenShown');
  const [showSplash, setShowSplash] = useState(!splashShown )
  const [showContent, setShowContent] = useState(splashShown??false)

  // useEffect(() => {
  //   const splashShown = sessionStorage.getItem('splashScreenShown')
  //   if (splashShown) {
  //     setShowSplash(false)
  //     setShowContent(true)
  //   }
  // }, [])

  const handleSplashComplete = () => {
    setShowContent(true)
  }

  return (
    <>
      {showSplash && <Splash onComplete={handleSplashComplete} />}
      {showContent && (
        <>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}