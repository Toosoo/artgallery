import { useEffect, useRef } from "react"

export default function Header({tl}){
    let nav = useRef()
useEffect(()=>{
    tl.fromTo(nav.current,{
        opacity:0,
        y:-50,
    },{
        opacity:1,
        y:0,
        ease:"power4.inOut",
        duration:1.5,
    })
},[])
    return(
     
        <>
        
        <nav className="flex justify-between align-middle  w-full fixed top-0 left-0 pt-10 px-5 lg:px-10" ref={nav}>

            <svg  viewBox="0 0 228 228" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-6' id='shape1'>
            <path d="M226.72 150.45L227.4 79.6L113.98 113.7L149.39 0.900024H78.54L113.64 113.75L0.599976 78.57V149.43L113.7 113.92L113.72 114L78.54 227.1H149.39L113.89 114L113.93 113.85L226.72 150.45Z" fill="#000"/>
            <path d="M167.95 219.498L218.53 169.881L114.217 113.793L219.018 59.0701L168.919 8.97158L113.942 113.588L58.8862 8.78066L8.78062 58.8862L113.864 113.751L113.821 113.821L8.97154 168.919L59.07 219.018L113.942 113.942L114.076 113.864L167.95 219.498Z" fill="#000"/>
            </svg>
            <span className='text-black text-xl font-semibold uppercase font-raleway'>art gallery</span>
            

            <svg  viewBox="0 0 228 228" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-6' id='shape1'>
            <path d="M226.72 150.45L227.4 79.6L113.98 113.7L149.39 0.900024H78.54L113.64 113.75L0.599976 78.57V149.43L113.7 113.92L113.72 114L78.54 227.1H149.39L113.89 114L113.93 113.85L226.72 150.45Z" fill="#000"/>
            <path d="M167.95 219.498L218.53 169.881L114.217 113.793L219.018 59.0701L168.919 8.97158L113.942 113.588L58.8862 8.78066L8.78062 58.8862L113.864 113.751L113.821 113.821L8.97154 168.919L59.07 219.018L113.942 113.942L114.076 113.864L167.95 219.498Z" fill="#000"/>
            </svg>
        
        </nav>
        


    


        </>
   
    )
 
}

