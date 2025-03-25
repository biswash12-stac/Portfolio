
const About = () => {
  return (
    <div className="bg-black h-screen">
      <div>
      <span  className="text-cyan-400 flex items-center justify-center md:py-4  sm:py-4 md:text-orange-400 text-3xl md:text-5xl font-bold tracking-widest shadow-lg drop-shadow-[0_0_10px_#00ffff]">
        About Me
      </span>

      <blockquote className="md:text-slate-400  max-w-[50rem] sm:mt-6 mt-4 md:mt-1 sm:text-3xl   md:text-2xl ml-6 md:m-auto  sm:text-white ">
        I am Biswash Mainali, a passionate web developer eager to push the boundaries of creativity and functionality.
         I have a strong foundation on frontend and backend .
         More efficent in Javascript also have profound knowledge in framework like Tailwind , React. </blockquote>

         {/* skills part */}
         <div className="text-white flex flex-col items-start justify-center gap-4 mt-4 border-2 border-cyan-400 w-[400px] px-8 "> 
          Html: <input className="w-50" type="range"  min={0} max={100}/>
          CSS: <input className="" type="range"  min={0} max={100}/>
          Java-Script: <input className="" type="range"  min={0} max={100}/>

         </div>
      </div>
    </div>
  );
};

export default About;
