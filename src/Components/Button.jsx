import { useNavigate } from "react-router-dom"

const Contact = ({text}) => {
  const navigat = useNavigate();
  return (
    <div className="flex gap-10">
    <button
    onClick={() => navigat("/ContactPage")}
    className="shadow-[0_0_15px_#3b82f6] text-center w-[120px] px-3 py-2 border-emerald-500 hover:shadow-[0_0_20px_#10b981]    rounded brightness-90"  >Contact me</button>
    <button className="shadow-[0_0_15px_#FF5733] text-center w-[120px]  border-emerald-500 hover:shadow-[0_0_20px_#10b981]  rounded brightness-90 text-xl" >{text}</button>
  </div>
  )
}

export default Contact
