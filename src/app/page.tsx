import Image from "next/image"
import Navbar from "@/components/Navbar"
import { ImageError } from "next/dist/server/image-optimizer"
export default function Page(){
    return(
        <>
        <Navbar/>
        {/*Hero*/}
        <div className="banner overflow-hidden sm:p-6 sm:h-[663px] h-[853px] w-[390px] sm:w-[1349px]">
            <div className="sm:w-[596px] sm:p-7 p-5 sm:m-8 sm:h-[500px] flex flex-col gap-5 sm:gap-10">
                <h1 className="font-extrabold sm:text-6xl text-4xl sm:mt-14 mt-8 ">
                FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
                <p className="sm:text-base text-sm">Browse through our diverse range of meticulously crafted garments,
                     designed to bring out your individuality and cater to your sense of style.
                 </p>
                <button className="sm:h-16 h-14 sm:w-[45%] hover:bg-white hover:text-black hover:border-2 hover:border-black hover:text-bold text-white rounded-full bg-black">Shop Now</button>
            </div>
             {/*Mobile*/}
            <div className="h-[55px] w-[278px] absolute top-[480px] left-[56px] flex justify-between sm:hidden">
                <div className="h-[48px] w-[106px] flex flex-col">
                    <h1 className="text-black text-2xl font-bold font-sans">200+</h1>
                    <p className="text-xs font-normal">Internation Brands</p>
                </div>
                <div className="h-[48px] w-[117px] flex flex-col">
                <h1 className="text-black text-2xl font-bold font-sans">2,000+</h1>
                <p className="text-xs font-normal">High-Quality Products</p>
                </div>
            </div>
            <div className="sm:hidden flex flex-col absolute h-[48px] w-[103px] top-[541px] left-[144px]">
            <h1 className="text-black text-2xl font-bold font-sans">30,000+</h1>
            <p className="text-xs font-normal">Happy Customers</p>
            </div>

            {/*Star*/}
            <Image src={"/images/Vector.png"} alt="star" height={56} width={38} className="absolute top-[740px] sm:h-[56px] sm:w-[56px] left-[30px] sm:top-[431px] sm:left-[700px] "/>

            {/*Hero image*/}
            <Image src={"/images/image.png"} alt="hero" height={600} width={620} className="absolute top-[585px] h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] sm:top-[197px] sm:left-[720px]"/>

            {/*Star2*/}
            <Image src={"/images/Vector.png"} alt="" height={95} width={65} className="absolute top-[650px] left-[300px] sm:h-[95] sm:w-[95] sm:top-[260px] sm:left-[1195px]"/>

            {/*Brand logos*/}
        </div>
        <div className="sm:w-[1349px] gap-7 sm:gap-10 w-[390px] flex sm:flex-row flex-col items-center justify-center sm:p-0 p-4 h-[146px] sm:h-[122px] overflow-hidden bg-black">
            <div className="flex items-center gap-10 sm:w-[50%] sm:justify-between">
            <Image src={"/images/versace.png"} alt="" height={150} width={70} className=" sm:h-[30px] sm:w-[150px]" />
            <Image src={"/images/zara.png"} alt="" height={100} width={70} className=" sm:h-[40px] sm:w-[150px]"/>
            <Image src={"/images/gucci.png"} alt="" height={100} width={70} className=" sm:h-[33px] sm:w-[150px]" />
            </div>
            <div className="flex items-center gap-5 sm:w-[35%] sm:justify-evenly sm:gap-5">
            <Image src={"/images/prada.png"} alt="" height={100} width={70} className=" sm:h-[30px] sm:w-[150px]"/>
            <Image src={"/images/calvin.png"} alt="" height={100} width={70} className="sm:h-[30px] sm:w-[150px]" />
            </div>
        </div>
        <div className="bg-slate-500 h-[700px] w-[390px] sm:w-[1349px] flex flex-col items-center">
            <div className="flex items-center justify-center bg-slate-400 mt-12 h-20 w-[50%]">
             <h1 className="text-6xl font-extrabold">New Arrivals</h1>
            </div>
            <div className="sm:h-[450px] mt-10 grid grid-flow-row grid-cols-4 gap-3 bg-slate-400 w-[85%]">
                <div className="sm:h-[450px] sm:w-[280px] bg-slate-300">
                    <div className="black sm:h-[350px] w-full bg-gray-600"></div>
                    <h2>T shirt with Tape Details</h2>
                </div>

                <div className="sm:h-[450px] sm:w-[280px] bg-slate-300">
                    <div className="jean sm:h-[350px] w-full bg-gray-600"></div>
                </div>

                <div className="sm:sh-[450px] sm:w-[280px] bg-slate-300">
                    <div className="check sm:h-[350px] w-full bg-gray-600"></div>
                </div>

                <div className="sm:h-[450px] sm:w-[280px] bg-slate-300">
                    <div className="stripe sm:h-[350px] w-full bg-gray-600"></div>

                </div>
            </div>
        </div>
        </>
    )
}
