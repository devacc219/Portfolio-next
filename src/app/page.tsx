'use client';
import Splash from "./_components/splash/splash";
import { useState } from "react";

export default function Home() {
  const [splash,setSplash]=useState(true);
  setTimeout(()=>setSplash(false),1500);

  if(splash){
    return <Splash/>
  }
  return (
    <>
    </>
  );
}
