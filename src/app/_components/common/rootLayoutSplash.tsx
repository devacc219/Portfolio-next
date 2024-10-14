'use client';
import { useState } from "react";
import Splash from "../splash/splash";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

export default function RootLayoutSplash({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    const [splash,setSplash]=useState(true);
    setTimeout(()=>setSplash(false),1500);
  
    if(splash){
      return <Splash/>
    }
    return (
        <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    );
}