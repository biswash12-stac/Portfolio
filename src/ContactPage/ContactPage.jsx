
import { useState } from "react";
import NewButton from "../Components/NewButton";
const ContactPage = () => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
e.preventDefault()
   if(!name|| !email ||!message){
    alert("Please fill all the fields")
    
   }
    setName("");
    setEmail("");
    setMessage("");
}

  return (
    <div className="bg-[#171513] min-h-screen px-4">
      <span className="flex items-center justify-center py-5 bg-gradient-to-r from-green-500 to-red-500 bg-clip-text text-transparent font-bold text-3xl sm:text-5xl  md:text-5xl">
        Get in Touch
      </span>
      <div className="flex flex-col md:flex-row md:justify-around md:mt-2 mt-2   gap-8 px-4  ">
        {/* text part in form section */}
        <div className="text-white flex flex-col w-full md:w-1/2 mb-8 md:mb-0 ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-yellow-400 font-bold font-sans">
            Let&apos;s Build Together
          </h2>
          <br />
          <p className="text-gray-300 sm:text-2xl sm:space-y-4 md:text-xl">
            I’m always eager to learn, collaborate, and grow in the tech world.{" "}
            <br /> Whether you have a project idea, feedback, or advice,
            <br /> I’d love to hear from you!
          </p>

          <div className="flex  flex-col  text-start py-2 sm:text-2xl sm:text-orange-600 md:text-white mt-2 gap-4">
            {/* email */}
            <div className="flex items-center gap-3 mb-4">
              <i className="ri-mail-line sm:text-3xl text-2xl "></i>
              <p className="text-sm sm:text-base">mainalibiswas757@gmail.com</p>
            </div>
            {/* address */}
            <div className="flex items-center gap-2 mb-2">
              <i className="ri-map-pin-2-fill"></i>
              <address>Kageshwori Manohara, Gothatar</address>
            </div>

            {/* Contact */}
            <div className="flex items-center gap-2 mb-2">
              <i className="ri-phone-fill"></i>
              <span>+977 984774304</span>
            </div>
          </div>
        </div>

        {/* form section */}
        <form
       
          action=""
          className="flex flex-col text-white w-full md:max-w-[18rem]  gap-2 "
        >
          <label  htmlFor="Name">Your Name</label>
          <input 
          value={name}
          onChange={(e) => setName(e.target.value)}

          className="bg-[#222630] px-4 py-3 mb-3 outline-none w-full max-w-[18rem] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]" type="text" name="Your Name" />

          <label className="mb-2" htmlFor="Email">Email</label>
          <input 
          value={email}
          onChange={(e) => setEmail(e.target
          .value)}
          className="bg-[#222630] mb-5 px-4 py-3 outline-none w-full max-w-[18rem] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]" type="email" name="email" />

          <label className="mb-2" htmlFor="Message">Write Some Message</label>
          <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-[#222630] px-4 py-3 outline-none w-full  max-w-[18rem] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] mb-8 " name="Write some message "  cols={50}></textarea>
<NewButton  onClick={handleSubmit}  />
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
