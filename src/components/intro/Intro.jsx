
import {useContext, useEffect,useRef} from 'react'

export default function Intro({gsap,Observer,mm,tl}){

  let introRef = useRef(null)
  const cursorRef = useRef(null)
  const textRef = useRef(null)
  const dotRef = useRef(null)  


  useEffect(()=>{
      let intro = introRef.current
      const cursor = cursorRef.current
      const dot = dotRef.current
      const text = textRef.current
      
      
      gsap.set(cursor, {xPercent: intro.offsetWidth / 2 / 1.5, yPercent: intro.offsetHeight - 250 });
      
      mm.add("(min-width: 1023px)",()=>{
        gsap.set(cursor, {xPercent: -50, yPercent: -50});
        let xTo = gsap.quickTo(cursor, "x", {duration: 0.6, ease: "power3"}),
        yTo = gsap.quickTo(cursor, "y", {duration: 0.6, ease: "power3"});
        intro.addEventListener("mousemove",(e)=>{
          xTo(e.clientX -10);
        yTo(e.clientY); 
        })

      })

      Observer.create({
          target: cursor,         
          type: "pointer,touch",    
          onPress: () => {
            gsap.to(dot,{
                  width:100,
                  duration:1,
                  ease:"power4.inOut",
              })
              gsap.to(cursor,{color:"#fff"},"<")
              text.textContent =  "Press & Hold"

              
          }, 
          onRelease:()=>{
            if(dot.style.width === "100px") {
        
              gsap.to(intro,{
                yPercent:-100,
                duration:1.5, 
                opacity:0,
                ease:"power4.inOut",
                onStart:()=>  tl.progress(0),
                onComplete:()=> { 
                  gsap.set("body",{overflowY:"auto"})
                  dot.style.width = "0px"
                }
                
              })
            } 
            else {
              gsap.to("#cursor span",{
                width:0,
                duration:1,
                ease:"power4.inOut"
            })
            gsap.to(cursor,{color:"#000"},"<")
            text.textContent =  "Start"
            }
          }
        });

      
    },[])
    return( 
  
    <div id="intro" className="px-5" ref={introRef}>
         <div id="cursor" className="absolute flex items-center justify-center rounded-full border font-semibold border-black" ref={cursorRef}>
         <span ref={dotRef}></span>
         <h5  ref={textRef}>Start</h5>
         
         </div>
       <div className='flex items-center justify-center text-center h-full'>
      <div id="quote" className="   w-full md:w-2/3 lg:w-1/3">
        <q className=" text-2xl md:text-4xl  mb-6 block">Simplicity is the ultimate <span>sophistication.</span>
        </q>
        <h6 className="relative w-fit mx-auto mb-12">Leonardo da vinci</h6>
      </div>
       </div>
    </div>
   
    )

}
 