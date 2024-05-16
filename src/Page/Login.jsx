import { getAuth } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider ,signInWithPopup} from "firebase/auth";
import app from "../Firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { userInfo } from "../Redux/counterSlice";
import { useNavigate } from "react-router-dom";
function Login() {
  // fire base area start
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const userDispatch = useDispatch()
  const navaget = useNavigate("")


  const googleHandeler = ()=>{
    signInWithPopup(auth,provider)
         .then((result)=>{
           const user = result.user;
           console.log(user)
           userDispatch(userInfo({
               name :user.displayName,
               email :user.email,
               image:user.photoURL,

           }));
           setTimeout(()=>{
            navaget("/")
           },1500)

         }).catch(error=>{
           console.log(error)
         })
  }
  
  // fire base area end

  return (
    <div className=" h-screen flex items-center justify-center">
        <div className="main max-w-md mx-auto px-4">
            <p className="my-4  text-xl font-bold">Acount/Login</p>
            <div className="all-input-content">
                <p className=" text-base font-mainFont  font-semibold">Phone/Email</p>
                <input className="w-[300px] outline-none border-[1px] border-[#DDDDDD] font-mainFont font-bold  placeholder:font-mainFont py-2 px-1" type="text" placeholder="Inter your email" />
            </div>
            <div className="all-input-content mt-4">
                <p className=" text-base font-mainFont  text-[#64748B]  font-semibold">Password</p>
                <input className="w-[300px] rounded-sm outline-none border-[1px] border-[#DDDDDD] font-mainFont font-bold  placeholder:font-mainFont py-2 px-1" type="text" placeholder="Password" />
            </div>
            <div className="button-area cursor-pointer rounded-sm  hover:bg-cyan-800 duration-300 bg-[#3749BB] font-mainFont text-white text-center py-2 mt-4">
               Login
            </div>
              <div className="social-area flex justify-center my-4 ">
                <div
                   onClick={googleHandeler}
                className="item cursor-pointer bg-slate-500 rounded-full items-center justify-center flex h-8 w-8  ">
                  <FaGoogle className="text-white text-md"/>
                </div>
             
            </div>
            <div className="bottom-area flex justify-center items-center">
               <div className="first bg-[#DDDDDD] h-[1px] w-1/5"></div>
               <div className="middle w-3/5 text-center text-[#64748B]">
                  Dont have't account??
               </div>
               <div className="last bg-[#DDDDDD] h-[1px] w-1/5"></div>
            </div>
            <div className="create-account text-center rounded-sm text-[#3749BB] hover:text-white duration-300 border-[1px] border-[#3749BB] hover:bg-[#3749BB] py-2 mt-4 cursor-pointer">
                 <p>Create Your Account</p>
            </div>
        </div>
    </div>
  )
}

export default Login