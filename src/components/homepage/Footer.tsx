import {RiTwitterFill,RiFacebookFill,RiInstagramLine,RiGithubFill} from "@remixicon/react"
export default function Page(){
    return(
        <>
        {/*Main section*/}
        <section className="h-[589px] w-[390px] flex flex-col items-center sm:w-[1349px]">

            {/*Black Section*/}
            <div className="sm:h-[180px] h-[297px] flex sm:flex-row flex-col justify-between p-4 sm:gap-0 gap-6 sm:p-8 items-center sm:items-center w-[358px] sm:w-[1200px] relative rounded-2xl top-[80px] bg-black">
                {/*Heading*/}
                <div className="sm:h-[94px] h-[105px] w-[297px] sm:w-[551px]">
                    <h1 className="text-white text-3xl sm:text-4xl font-extrabold">
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                    </h1>
                </div>

                {/*Side*/}
                <div className="h-[108px] sm:w-[349px] flex flex-col gap-3">
                    <input type="email" placeholder="Enter Your Email Address" className="sm:w-[349px] w-[311px] p-6 h-[42px] sm:h-[48px] rounded-full"/>
                    <div className="sm:w-[349px] w-[311px] flex items-center justify-center bg-white rounded-full h-[42px] sm:h-[48px]">
                        <h1 className="text-base">Subscribe to newsletter</h1>
                    </div>
                </div>
            </div>
            
            {/*Second Section*/}
            <div className="sm:h-[499px] h-[846px] flex items-center justify-center w-[390px] sm:w-[1349px] bg-gray-200">
                {/*Main div*/}
                <div className="sm:w-[1200px] sm:mt-0 mt-6 sm:h-[177px]">
                    {/*Shop.co and icons*/}
                    <div className="sm:w-[243px]  w-[357px] flex flex-col sm:gap-6 sm:h-[177px]">
                        <div className="w-[243px] flex flex-col gap-4 h-[114px]">
                            <h1 className="text-3xl font-extrabold">Shop.co</h1>
                            <p className="text-sm w-[357px] sm:w-[200px] text-gray-500">
                            We have clothes that suits 
                            your style and which you’re proud to wear.
                            From women to men.
                            </p>
                        </div>
                        {/*Icons*/}
                        <div className="h-[37px] flex gap-2 w-[240px]">
                            {/*Twitter*/}
                            <div className="button1 h-[35px] rounded-full w-[35px] cursor-pointer flex items-center justify-center hover:bg-black bg-white">
                                <RiTwitterFill size={20} className="text-black hover:text-white"/>
                            </div>
                            
                            {/*Facebook*/}
                            <div className="button1 h-[35px] rounded-full w-[35px] cursor-pointer flex items-center justify-center hover:bg-black bg-white">
                                <RiFacebookFill size={20} className="text-black hover:text-white"/>
                            </div>

                            {/*Instagram */}
                            <div className="button1 h-[35px] rounded-full w-[35px] cursor-pointer flex items-center justify-center hover:bg-black bg-white">
                                <RiInstagramLine size={20} className="text-black hover:text-white"/>
                            </div>

                            {/*Github*/}
                            <div className="button1 h-[35px] rounded-full w-[35px] cursor-pointer flex items-center justify-center hover:bg-black bg-white">
                                <RiGithubFill size={20} className="text-black hover:text-white"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>

    )
}