import Link from "next/link";
import React from "react";

const CardTajwid = () => {
  return (
    <>
      <Link href="/">
        <div className="flex flex-col justify-between p-3 max-w-lg min-h-[120px] max-h-fit bg-green rounded-xl border-b-4 border-darkGreen text-white shadow-sm">
          <p className="font-bold text-md w-[80%]">
            Hukum Nun Mati dan Tanwin: Izhar
          </p>
          <p className="font-semibold text-[10px]">arti singkat</p>
        </div>
      </Link>
    </>
  );
};

export default CardTajwid;
