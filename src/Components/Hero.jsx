import biswas from "../assets/Image/biswas.png";
import Contact from "./Button";
const Hero = () => {
  return (
    <>
      <div className="bg-[#1B1833]  w-full h-screen flex flex-col-reverse md:flex-col-reverse lg:flex-row  items-center justify-between   px-12 py-40 md:py-40  lg:px-20">
        <div className=" px-15 mb-[180px]  flex item flex-col  justify-center ">
          <h2 className="font-bold text-[#FFB22C] text-6xl font-sans mb-6">
            Hi
          </h2>
          <h3 className="text-cyan-500 font-medium text-4xl mb-4">
            I, am
            <span className="text-[#FBF5E5] font-semibold text-2xl">
              {" "}
              Biswash Mainali
            </span>
          </h3>
          <p className="text-cyan-300 font-semibold font-sans mt-2 text-[30px] md:text-5xl md:font-medium  lg:text-2xl lg:font-medium">
            I am a aspiring developer and a Bachelor student of BCA. <br />
            My hobbies are Making projects and reading philoshopical Books.
          </p>
          <div className=" text-white mt-8 ">
            <Contact text="C V" />
          </div>
        </div>

        <div className="relative   h-[500px] w-[320px]  mr-10 ">
          <img
            className=" rounded-full  border-[4px]   border-[#10B981] shadow-[0_0_20px_#06B6D4]  hover:shadow-[0_0_20px_#10b981] brightness-100 bg-transparent  "
            src={biswas}
            alt="Biswash Mainali"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
