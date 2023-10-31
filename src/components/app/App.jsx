import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText, Observer, ScrollTrigger);
import Intro from "../intro/Intro";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Work from "../work/Work";
import Footer from "../footer/Footer";

export default function App() {
  let tl = gsap.timeline();
  let mm = gsap.matchMedia();

  return (
    <>
      <Intro gsap={gsap} tl={tl} Observer={Observer} mm={mm} />
      <Header tl={tl} />
      <Hero gsap={gsap} tl={tl} Observer={Observer} SplitText={SplitText} ScrollTrigger={ScrollTrigger} />
      <Work gsap={gsap} ScrollTrigger={ScrollTrigger} SplitText={SplitText} mm={mm} />
      <Footer />
    </>
  );
}
