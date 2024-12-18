import {RiArrowLeftLine,RiArrowRightLine} from "@remixicon/react";
import Image from "next/image";
export default function Page(){
    return(
        <>
        {/*Main section*/}
        <section className="sm:h-[600px] h-[400px] flex justify-center w-[390px] sm:w-[1349px]">

            {/*Main div*/}
            <div className="h-[500px] flex flex-col w-[358px] mt-10 sm:w-[1239px]">

                {/*Heading and arrows*/}
                <div className="h-[150px] flex items-center justify-between">
                    {/*Heading*/}
                    <div className="sm:h-[58px] w-[200px] flex items-center sm:w-[630px]">
                        <h1 className="sm:text-5xl text-3xl font-extrabold">Our Happy Customer</h1>
                    </div>
                    {/*Arrows*/}
                    <div className="sm:h-[60px] w-[100px] flex gap-2 justify-center items-center sm:w-[200px]">
                        <div className="h-[30px] flex items-center justify-center w-[50px">
                            <RiArrowLeftLine size={25} className="sm:w-[34px] sm:h-[34px]"/>
                        </div>
                        <div className="h-[30px] flex items-center justify-center w-[50px]">
                            <RiArrowRightLine size={25} className="sm:w-[34px] sm:h-[34px]"/>
                        </div>
                    </div>
                </div>
                
                {/*Customers*/}
                <div className="sm:h-[350px] grid grid-cols-3 items-center sm:gap-4">
                    {/*First customer*/}
                    <div className="sm:h-[240px] h-[187px]  flex items-center border rounded-2xl justify-center w-[358px] sm:w-[400px] bg-white">
                        <div className="h-[162px] w-[336px] flex flex-col justify-between bg-white">
                            {/*Stars*/}
                            <div className="flex gap-1">
                            <Image src={"/images/Star 3.png"} alt="" height={10} width={13} className="sm:h-[20px] sm:w-[20px]"></Image>
                            <Image src={"/images/Star 3.png"} alt="" height={10} width={13}  className="sm:h-[20px] sm:w-[20px]"></Image>
                            <Image src={"/images/Star 3.png"} alt="" height={10} width={13}  className="sm:h-[20px] sm:w-[20px]"></Image>
                            <Image src={"/images/Star 3.png"} alt="" height={10} width={13}  className="sm:h-[20px] sm:w-[20px]"></Image>
                            <Image src={"/images/Star 3.png"} alt="" height={10} width={13}  className="sm:h-[20px] sm:w-[20px]"></Image>
                            </div>

                            {/*Customer Name And Review*/}
                            <h1 className="text-xl font-bold">Sarah M.</h1>
                            <p className="text-base text-gray-500">"I'm blown away by the quality and style of the clothes I received from Shop.co.
                                 From casual wear to elegant dresses,
                                 every piece I've bought has exceeded my expectations.”
                            </p>
                        </div>
                    </div>

                        {/*Second customer*/}
                    <div className="h-[240px] hidden sm:flex items-center justify-center border rounded-2xl w-[400px]">
                        <div className="h-[162px] gap-2 w-[336px] flex flex-col justify-between">
                            {/*Stars*/}
                            <div className="flex gap-1">
                            <Image src={"/images/Star 3.png"} alt="" height={10} width={13} className="sm:h-[20px] sm:w-[20px]"></Image>
                            <Image src={"/images/Star 3.png"} alt="" height={10} width={13}  className="sm:h-[20px] sm:w-[20px]"></Image>
                            <Image src={"/images/Star 3.png"} alt="" height={10} width={13}  className="sm:h-[20px] sm:w-[20px]"></Image>
                            <Image src={"/images/Star 3.png"} alt="" height={10} width={13}  className="sm:h-[20px] sm:w-[20px]"></Image>
                            <Image src={"/images/Star 3.png"} alt="" height={10} width={13}  className="sm:h-[20px] sm:w-[20px]"></Image>
                            </div>

                            {/*Customer Name And Review*/}
                            <h1 className="text-xl font-bold">Alex K.</h1>
                            <p className="text-base text-gray-500">
                                "Finding clothes that align with my personal style used 
                                to be a challenge until I discovered Shop.co.
                                 The range of options they offer is truly remarkable,
                                 catering to a variety of tastes and occasions.”
                            </p>
                        </div>
                    </div>
                    {/*Third Customer*/}
                    <div className="h-[240px] hidden sm:flex items-center justify-center w-[400px] border rounded-2xl">
                        <div className="h-[162px] gap-2 w-[336px] flex flex-col justify-between">
                            {/*Stars*/}
                            <div className="flex gap-1">
                            <Image src={"/images/Star 3.png"} alt="" height={10} width={13} className="sm:h-[20px] sm:w-[20px]"></Image>
                            <Image src={"/images/Star 3.png"} alt="" height={10} width={13}  className="sm:h-[20px] sm:w-[20px]"></Image>
                            <Image src={"/images/Star 3.png"} alt="" height={10} width={13}  className="sm:h-[20px] sm:w-[20px]"></Image>
                            <Image src={"/images/Star 3.png"} alt="" height={10} width={13}  className="sm:h-[20px] sm:w-[20px]"></Image>
                            <Image src={"/images/Star 3.png"} alt="" height={10} width={13}  className="sm:h-[20px] sm:w-[20px]"></Image>
                            </div>

                            {/*Customer Name And Review*/}
                            <h1 className="text-xl font-bold">James L.</h1>
                            <p className="text-base text-gray-500">
                            "As someone who's always on the lookout for unique fashion pieces,
                             I'm thrilled to have stumbled upon Shop.co.
                             The selection of clothes is not only diverse but also on-point with the latest trends.”
                            </p>
                        </div>
                    </div>
                </div>
            </div>  
        </section>
        </>
    )
}