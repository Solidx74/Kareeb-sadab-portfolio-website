"use client";

import { useState } from "react";
import { PortfolioApp } from "@/components/portfolio-app";
import { SplashEntry } from "@/components/splash-entry";

export default function Page() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <PortfolioApp />
      {!entered && <SplashEntry onEnter={() => setEntered(true)} />}
    </>
  );
}
