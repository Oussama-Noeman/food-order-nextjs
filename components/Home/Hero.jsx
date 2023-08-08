import Image from "next/image";
import { Cherry_Bomb_One } from "next/font/google";

const Hero = () => {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url("/final-dl.beatsnoop 9.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh", // Set the desired height for your hero section
        }}
      />

      <div className="absolute top-0 left-0 w-full h-full md:flex md:flex-row md:justify-center md:items-center  mobile:mt-32 flex-col items-center sm:mt-32 md:mt-12   justify-center   gap-14">
        <div className=" lg:ms-28 md:ms-20  flex flex-col md:items-start justify-start sm:items-center  ">
          <div
            className="text-red-700 md:text-2xl lg:text-4xl sm:text-xl text-5xl mobile:ms-12 mobile:w-20 font-bold uppercase font-['cherry Bomb']   "
            style={{ fontFamily: "cherry Bomb " }}
          >
            Delight Your Taste <br /> Buds with Every Bite!
          </div>
          <p className="text-black  md:text-xl mobile:text-2xl mobile:w-60  text-base  font-bold  mobile:ms-12 mobile:mt-20 mt-3">
            Its always good time for the great taste of burgers.
          </p>
        </div>

        <div className="relative lg:mx-0 md:mr-12 mx-auto w-[40%] h-[70%] mobile:hidden  ">
          <Image
            src={"/final-dl.beatsnoop 7.png"}
            alt="burger"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
