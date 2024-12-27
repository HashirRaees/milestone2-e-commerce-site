import Image from "next/image";
export default function Top() {
  return (
    <>
      <div className="sm:mt-10 h-[1600px] sm:h-[800px] w-[390px] sm:w-[1349px] flex flex-col items-center">
        <div className="flex items-center justify-center mt-12 h-20 sm:w-[50%]">
          <h1 className="sm:text-6xl font-IntegralCF text-4xl font-extrabold">Top Selling</h1>
        </div>
        {/*Clothes*/}
        <div className="sm:h-[450px] h-[1300px] justify-center sm:mt-10 grid sm:grid-flow-row grid-cols-1 items-center sm:grid-cols-4 sm:gap-3 sm:w-[85%]">
          {/*vertical stripe shirt*/}
          <div className="sm:h-[450px] h-[308px] w-[200px] flex flex-col gap-2 sm:w-[280px]">
            <div className="vertical rounded-2xl sm:h-[350px] h-[250px] w-full"></div>
            <h2 className="sm:text-xl font-bold">Vertical Striped Shirt</h2>

            {/*Rating*/}
            <div className="sm:h-[19px] sm:w-[160px] flex gap-2">
              <Image
                src={"/images/Star 3.png"}
                alt=""
                height={10}
                width={13}
                className="sm:h-[18] sm:w-[18]"
              ></Image>
              <Image
                src={"/images/Star 3.png"}
                alt=""
                height={10}
                width={13}
                className="sm:h-[18] sm:w-[18]"
              ></Image>
              <Image
                src={"/images/Star 3.png"}
                alt=""
                height={10}
                width={13}
                className="sm:h-[18] sm:w-[18]"
              ></Image>
              <Image
                src={"/images/Star 3.png"}
                alt=""
                height={10}
                width={13}
                className="sm:h-[18] sm:w-[18]"
              ></Image>
              <Image
                src={"/images/Star 5.png"}
                alt=""
                height={10}
                width={8}
                className="sm:h-[18] sm:w-[18]"
              ></Image>
              <h2 className="text-sm font-normal">
                4.5/<span className="text-gray-600">5</span>
              </h2>
            </div>

            {/*Pricing*/}
            <div className="h-[30px] w-[100px]">
              <h2 className="sm:text-2xl text-base font-bold">$120</h2>
            </div>
          </div>
          {/*Orange T shirt*/}
          <div className="sm:h-[450px] h-[308px] w-[200px] flex flex-col gap-2 sm:w-[280px]">
            <div className="orange rounded-2xl sm:h-[350px] h-[250px] w-full"></div>
            <h2 className="sm:text-xl font-bold">Courage Graphic T shirt</h2>

            {/*Rating*/}
            <div className="h-[19px] sm:w-[160px] flex gap-2">
              <Image
                src={"/images/Star 3.png"}
                alt=""
                height={10}
                width={18}
              ></Image>
              <Image
                src={"/images/Star 3.png"}
                alt=""
                height={10}
                width={18}
              ></Image>
              <Image
                src={"/images/Star 3.png"}
                alt=""
                height={10}
                width={18}
              ></Image>
              <Image
                src={"/images/Star 5.png"}
                alt=""
                height={10}
                width={10}
              ></Image>
              <h2 className="text-sm font-normal">
                3.5/<span className="text-gray-600">5</span>
              </h2>
            </div>
            {/*Pricing*/}
            <div className="h-[30px] flex items-center gap-2 w-[100px]">
              <h2 className="sm:text-2xl text-base">$120</h2>
              <span className="sm:text-2xl font-bold text-gray-600 line-through">
                $160
              </span>
            </div>
          </div>
          {/*Shorts*/}
          <div className="sm:h-[450px] h-[308px] w-[200px] flex flex-col gap-2 sm:w-[280px]">
            <div className="shorts rounded-2xl sm:h-[350px] h-[250px] w-full"></div>
            <h2 className="sm:text-xl font-bold">Loose Fit Bermuda Shorts</h2>

            {/*Rating*/}
            <div className="h-[19px] sm:w-[160px] flex gap-2">
              <Image
                src={"/images/Star 3.png"}
                alt=""
                height={10}
                width={13}
                className="sm:h-[18px] w-[18px]"
              ></Image>
              <Image
                src={"/images/Star 3.png"}
                alt=""
                height={10}
                width={13}
                className="sm:h-[18px] w-[18px]"
              ></Image>
              <Image
                src={"/images/Star 3.png"}
                alt=""
                height={10}
                width={13}
                className="sm:h-[18px] w-[18px]"
              ></Image>
              <Image
                src={"/images/Star 3.png"}
                alt=""
                height={10}
                width={13}
                className="sm:h-[18px] w-[18px]"
              ></Image>
              <Image
                src={"/images/Star 5.png"}
                alt=""
                height={10}
                width={8}
                className="sm:h-[18px] w-[18px]"
              ></Image>
              <h2 className="text-sm font-normal">
                4.5/<span className="text-gray-600">5</span>
              </h2>
            </div>

            {/*Pricing*/}
            <div className="h-[30px] w-[100px]">
              <h2 className="sm:text-2xl text-base">$120</h2>
            </div>
          </div>
          {/*Black jeans*/}
          <div className="sm:h-[450px] h-[308px] w-[200px] flex flex-col gap-2 sm:w-[280px]">
            <div className="blackjean rounded-2xl sm:h-[350px] h-[250px] w-full"></div>
            <h2 className="sm:text-xl font-bold">Faded Skinny Jeans</h2>

            {/*Rating*/}
            <div className="h-[19px] sm:w-[160px] flex gap-2">
              <Image
                src={"/images/Star 3.png"}
                alt=""
                height={10}
                width={13}
                className="sm:h-[18px] w-[18px]"
              ></Image>
              <Image
                src={"/images/Star 3.png"}
                alt=""
                height={10}
                width={13}
                className="sm:h-[18px] w-[18px]"
              ></Image>
              <Image
                src={"/images/Star 3.png"}
                alt=""
                height={10}
                width={13}
                className="sm:h-[18px] w-[18px]"
              ></Image>
              <Image
                src={"/images/Star 3.png"}
                alt=""
                height={10}
                width={13}
                className="sm:h-[18px] w-[18px]"
              ></Image>
              <Image
                src={"/images/Star 5.png"}
                alt=""
                height={10}
                width={8}
                className="sm:h-[18px] w-[18px]"
              ></Image>
              <h2 className="text-sm font-normal">
                4.5/<span className="text-gray-600">5</span>
              </h2>
            </div>

            {/*Pricing*/}
            <div className="h-[30px] flex items-center gap-2 w-[200px]">
              <h2 className="sm:text-2xl font-bold">$130</h2>
              <span className="sm:text-2xl font-bold text-gray-600 line-through">
                $160
              </span>
            </div>
          </div>
        </div>
        <button className="button1 hover:bg-black hover:text-white bg-white h-[46px] mt-8 rounded-3xl w-[358px] sm:w-[218px] text-black border-2 border-gray-300">
          View More
        </button>
      </div>
    </>
  );
}
