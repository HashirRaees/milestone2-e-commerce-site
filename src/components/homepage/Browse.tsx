export default function Browse(){
    return(
        <>
        {/*Main Section*/}
        <div className="flex sm:mt-10 w-[390px] justify-center sm:w-[1349px]">

            {/*Main div*/}
        <div className="sm:w-[1239px] w-[358px] p-4 gap-5 flex sm:p-10 sm:gap-20 items-center flex-col h-[940px] sm:h-[860px] rounded-3xl bg-gray-100">

            {/*Heading*/}
            <h1 className="sm:text-5xl sm:text-justify text-center text-2xl font-extrabold uppercase sm:mt-0 mt-3">Browse By Dress Style</h1>

            {/*Inner Div*/}
            <div className="flex flex-col gap-5 sm:w-[92%] sm:h-[605px]">

                {/*Casual*/}
                <div className="flex flex-col sm:flex-row gap-5">
                <div className="casual w-[330px] sm:w-[407px] h-[190px] sm:h-[289px] rounded-2xl">
                    <h1 className="relative text-xl sm:text-3xl left-[40px] top-[28px]">Casual</h1>
                </div>

                {/*Formal*/}
                <div className="formal w-[330px] sm:w-[644px] h-[190px] sm:h-[289px] rounded-2xl">
                <h1 className="relative text-xl sm:text-3xl left-[40px] top-[28px]">Formal</h1>
                </div>
                </div>
                
                {/*Party*/}
                <div className="flex flex-col sm:flex-row gap-5">
                <div className="party w-[330px] sm:w-[644px] h-[190px] sm:h-[289px] rounded-2xl">
                <h1 className="relative text-xl sm:text-3xl left-[40px] top-[28px]">Party</h1>
                </div>

                {/*Gym*/}
                <div className="gym w-[330px] sm:w-[407px] h-[190px] sm:h-[289px] rounded-2xl">
                <h1 className="relative text-xl sm:text-3xl left-[40px] top-[28px]">Gym</h1>
                </div>
                </div>

            </div>
        </div>
        </div>
        </>
    )
}