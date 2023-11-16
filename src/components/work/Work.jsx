
import {useEffect,useRef} from 'react'
import SplitType from 'split-type'

export default function Work({gsap,ScrollTrigger,mm}){
    let fadingDevRef = useRef()
    let workRef = useRef()
    let tl2 = gsap.timeline()
    
    
    const paintings = [
        {
          id: "1",
          name: "Mona Lisa",
          url: "mona-lisa.jpg",
          date: "1519",
        },
        {
          id: "2",
          name: "La Belle Ferroniere",
          url: "la-belle-ferroniere.jpg",
          date: "1490",
        },
        {
          id: "3",
          name: "Cecilia Gallerani",
          url: "cecilia-gallerani.jpg",
          date: "1490",
        },
        {
          id: "4",
          name: "Portrait of a Musician",
          url: "portrait-of-a-musician.jpg",
          date: "1487",
        },
      ];
      
    let paintingsMap = paintings.map(paint=>{
       return (
        <div className="single-project lg:w-1/4 h-96 lg:h-full relative flex overflow-hidden" key={paint.id}>
        <img src={`./${paint.url}`} alt="" className='w-full h-full object-cover z-0'/>
        <div className="p-6 py-9 lg:p-10 flex flex-col  justify-evenly h-full lg:h-4/5 my-auto lg:border-r z-10 w-full">
        <h4 className="md:text-2xl lg:text-4xl  lg:leading-relaxed ">{paint.name}</h4>
        <p className="text-lg font-raleway font-semibold mb-auto">{paint.date}</p>
        <span className="  text-center">{paint.id}</span>
        </div>
        </div>
       )
    })
    useEffect(()=>{

    let fadingDev = fadingDevRef.current
    let work= workRef.current

    mm.add("(min-width: 1023px)",()=>{
      let splitText2 = new SplitType("h2",{types:"chars"})


        ScrollTrigger.create({
            animation:tl2,
            trigger: work,
            start: "top top",
            end: work.offsetWidth + 2000,
            pin:true,
            scrub:1,
            ease:"power2.inOut",
          })
          tl2.from(splitText2.chars,{
            opacity:0,
            y:100,
            duration:1,
            stagger:.2,
            rotate:50,
            ease:"back"
        })
        tl2.to(work,{
            x:-fadingDev.offsetWidth,
        })
        
     
      },workRef);

},[])

    return(
        <div id="work" className="min-h-screen relative flex font-swash uppercase flex-col lg:flex-row w-full lg:w-200" ref={workRef}>
            <div className="w-full grid place-content-center p-10 lg:p-0" ref={fadingDevRef}>
            <h2 className="font-swash main-title uppercase  text-main">  paintings </h2>
            </div>
            {paintingsMap}
        </div>
    )
}