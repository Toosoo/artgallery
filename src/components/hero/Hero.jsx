
import {useEffect,useRef} from 'react'
import SplitType from 'split-type'

export default function Hero({tl,gsap,SplitText,ScrollTrigger}) {
    let davinciRef1 = useRef(null)
    let davinciRef2 = useRef(null)
    let mySplitTextRef = useRef(null)
    let heroRef = useRef(null)
    let tl3 = gsap.timeline()
    useEffect(()=>{
        let hero = heroRef.current

    const heroSplit =   new SplitType(davinciRef2.current, {types:"chars,words"})

       let  mySplitText = new SplitText(mySplitTextRef.current, { types: "chars,words" })
      

           ScrollTrigger.create({
            animation:tl3,
            trigger: hero,
            start: "top top",
            end: hero.offsetHeight,
            pin:true,
            pinSpacing:false,
            scrub:1,
            ease:"power2.inOut",
          })
              tl3.to([davinciRef1.current,davinciRef2.current],{   
               opacity:0,
               y:100,
                ease: "power2.inOut",
            })
            tl.from(mySplitText.chars, {
                duration: 1.2, 
                opacity: 0, 
                y: "random(70, -70)",
                x: "random(70, -70)",
                rotate:"random(80,-80)",
                ease: "power2.inOut",
                stagger: 0.1,
              
           },"<");

            tl.from("h2 img",{
                duration: 1, 
                opacity: 0, 
                scale:2,
                ease: "power2.inOut",
           });
         
    },[])

return(
  
    <div className=' grid place-content-center text-center h-screen text-main hero' ref={heroRef}>
   
        <div className='flex relative flex-col items-center justify-center font-swash hero-title uppercase' >
            <h1 ref={davinciRef1}>
            Leonardo
            </h1>
            <h2 ref={davinciRef2}> 
            da Vinci
            <img src="./portrait.jpg" alt="portrait" />
            </h2>
        </div>
        <h3 className='lg:text-5xl text-2xl font-swash mt-5' ref={mySplitTextRef}>Leonardo di ser Piero da Vinci</h3>
       
    </div>
   
  
)

}