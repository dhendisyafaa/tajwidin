import Link from "next/link";
import React from "react";

const CardCategory = () => {
  return (
    <>
      <Link href="/">
        <div className="bg-white shadow rounded-lg w-[150px] h-[180px] flex justify-center items-center px-2 lg:hover:scale-105 duration-200">
          <div className="flex flex-col gap-2 text-center">
            <div className="bg-grey rounded-full w-[80px] h-[80px] m-auto"></div>
            <p className="font-semibold text-xs text-black">
              Hukum Nun Mati dan Tanwin
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardCategory;
