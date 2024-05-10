import foterLogo from "../assets/white.png"
import foterLogog from "../assets/pament.png"
import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";





function Foter() {
  return (
    <div className="bg-[#000000] text-white">
        <div className="all-items grid-col-1 gap-10   grid md:grid-cols-2 lg:grid-cols-4 mx-8 py-16">
            {/* social menu area start  */}
            <div className="social-logo flex flex-col gap-6">
                 <div className="image-area">
                    <img className="h-7" src={foterLogo} alt="foter" />
                 </div>
                 <div className="creator">
                     <p className=" font-mainFont font-semibold">© Rakib.com</p>
                 </div>
                 <div className="pament">
                   <img className="max-w-[250px]" src={foterLogog} alt="" />
                  </div>
                  <div className="social-icon">
                     <ul className="flex gap-5">
                        <li className=""><Link to={"https://github.com/rakib883"}><FaGithub className="text-[20px] text-[#9299A4] hover:text-[white] duration-300" /></Link></li>
                        <li className=""><Link to={"https://youtube.com"}><FaYoutube className="text-[20px] text-[#9299A4] hover:text-[white] duration-300" /></Link></li>
                        <li className=""><Link to={"facebook.com"}><FaFacebookF className="text-[20px] text-[#9299A4] hover:text-[white] duration-300" /></Link></li>
                        <li className=""><Link to={"https://github.com/rakib883"}><FaTwitter className="text-[20px] text-[#9299A4] hover:text-[white] duration-300" /></Link></li>
                        <li className=""><Link to={"https://github.com/rakib883"}><FaInstagram className="text-[20px] text-[#9299A4] hover:text-[white] duration-300" /></Link></li>
                     </ul>
                  </div>
            </div>
            {/* social menu are end */}

            {/* location area start */}
            <div className="">
               <div className="heading">
                 <p className="text-[24px] font-semibold font-mainFont">Locate us</p>
               </div>
               <div className="location-area flex flex-col gap-2 py-4">
                 <p className="location ">MBD,Ruwi, Muscat-Oman</p>
                 <p className="location ">Mobile: 00968 97859628</p>
                 <p className="location ">Phone: 00968 24769821</p>
                 <p className="location ">e-mail: bazar@gmail.com</p>
               </div>
            </div>
            {/* location are end */}

           
            {/* profile are start */}
            <div className="profile">
              <div className="heading">
                 <p className="text-[24px] font-semibold font-mainFont">Profile</p>
               </div>
               <div className="profile-area py-4">
                  <p className="location flex py-1 items-center gap-2 cursor-pointer hover:text-white duration-300"> <FaUser />   my account</p>
                  <p className="location flex py-1 items-center gap-2 cursor-pointer hover:text-white duration-300"><FaPaypal />checkout</p>
                  <p className="location flex py-1 items-center gap-2 cursor-pointer hover:text-white duration-300"><IoHome />order tracking</p>
                  <p className="location flex py-1 items-center gap-2 cursor-pointer hover:text-white duration-300"><FaLocationDot />help & support</p>
               </div>
            </div>
            {/* profile are end */}

            {/* subscribe  start */}
            <div className="subcribe">
              <div className="search-area w-full  lg:my-[80px]">
                 <input className="bg-[#000000] text-[#9299A4] placeholder:font-mainFont font-semibold  py-2 w-full  focus-within:border-[white] px-2 border-[1px]" type="text" placeholder="e-mail " />
                  <button className="border-[1px] font-mainFont text-base w-full active:bg-white active:text-black border-white ">Subscribe</button>

              </div>
            </div>
            {/* subscribe end */}
        </div>
    </div>
  )
}

export default Foter