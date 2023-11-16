import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

gsap.registerPlugin( Observer, ScrollTrigger);
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
      <Hero gsap={gsap} tl={tl} Observer={Observer}  ScrollTrigger={ScrollTrigger} />
      <Work gsap={gsap} ScrollTrigger={ScrollTrigger} mm={mm} />
      <Footer />
    </>
  );
}
