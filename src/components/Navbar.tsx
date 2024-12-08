import { RiArrowDownSLine,RiShoppingCartLine,RiAccountCircleLine,RiSearchLine,RiMenuLine} from "@remixicon/react"
export default function Nav(){
    return(
        <>
        <header className="sm:h-[38px] sm:w-[1349px] h-[34px] overflow-hidden w-[390px] items-center bg-black flex justify-center">
        <div className="sm:h-[19px] sm:w-[351px]">
        <h2 className="font-normal text-xs sm:text-sm text-white">Sign up and get 20% off to your first order.  
        <span className="font-medium text-xs sm:text-sm underline sm:no-underline"> Sign Up Now</span>
        </h2> 
        </div> 
        </header>
        <nav className="flex justify-center items-center h-24 w-[390px] sm:w-[1349px]">
            <div className="h-[40px] sm:w-[1180px] w-[340px] flex justify-between sm:justify-normal items-center sm:gap-8">
                <div className="flex items-center gap-5">
                <RiMenuLine size={24} className="sm:hidden"/>
                <h1 className="head sm:text-3xl text-xl font-extrabold uppercase cursor-default" >Shop.Co</h1></div>
                <ul className="sm:flex hidden sm:items-center sm:gap-4">
                    <li className="hover:underline cursor-pointer sm:flex sm:items-center">Shop
                        <RiArrowDownSLine size={15}/>
                    </li>
                    <li className="hover:underline cursor-pointer">On sale</li>
                    <li className="hover:underline cursor-pointer">New Arrivals</li>
                    <li className="hover:underline cursor-pointer">Brands</li>
                </ul>
                <input type="text" name="search" className="sm:h-[48px] sm:w-[577px] hidden sm:flex sm:rounded-3xl sm:p-4" placeholder="Search For Products..."></input>
                <div className="h-[24px] w-[96] sm:w-[62px] flex justify-between gap-3">
                <RiSearchLine size={24} className="sm:hidden"/>
                <RiShoppingCartLine size={24}/>
                <RiAccountCircleLine size={24}/>
                </div>
            </div>
        </nav>
        </>
    )
}