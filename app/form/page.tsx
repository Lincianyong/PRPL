"use client";
import { useState } from "react";
import Image from "next/image";
export default function DataDiri() {
    const [color, setColor] = useState(true);
    const [color1, setColor1] = useState(true);


    return (
    <div className="px-5">

        {/* Logo */}
        <div className="w-[150px] pt-10 h-auto">
          <Image src="/logos/diatect.png" height={500} width={500} alt="" />
        </div>

        {/* header */}
        <div className="text-center mt-12">
          <h1 className="font-bold text-[24px]">Isi Data Diri</h1>
          <div className="text-[14px]">
            Mohon diisi berdasarkan data yang sesuai
          </div>
        </div>

        {/* Input fields */}
        <div className="flex-col space-y-4 mt-10">
            <p className="">
                <strong>Jenis Kelamin</strong>
                <strong className="text-red">*</strong>
            </p>
            <div className="grid grid-cols-2 gap-x-4 basis-1/2">          
                <div onClick={()=>setColor((curr)=> !curr)} className= {`transition-all duration-200 border-[1px] border-main_blue p-2 rounded-lg ${color ? 'bg-white text-main_blue' : 'bg-main_blue text-white'}`}> 
                    <p>Laki-laki</p>
                </div>
                <div onClick={()=>setColor((curr)=> !curr)} className= {`transition-all duration-200 border-[1px] border-main_blue p-2 rounded-lg ${!color ? 'bg-white text-main_blue' : 'bg-main_blue text-white'}`}> 
                    <p>Perempuan</p>
                </div>
            </div>
            
            {/* kuisioner */}
            <p className="space-y-2">
                <strong>Lorem ipsum?</strong>
                <strong className="text-red">*</strong>
            </p>
            <div className="grid grid-cols-2 gap-x-4 basis-1/2">          
                <div onClick={()=>setColor1((curr)=> !curr)} className= {`transition-all duration-200 border-[1px] border-main_blue p-2 rounded-lg ${color1 ? 'bg-white text-main_blue' : 'bg-main_blue text-white'}`}> 
                    <p>Pernah</p>
                </div>
                <div onClick={()=>setColor1((curr)=> !curr)} className= {`transition-all duration-200 border-[1px] border-main_blue p-2 rounded-lg ${!color1 ? 'bg-white text-main_blue' : 'bg-main_blue text-white'}`}> 
                    <p>Tidak</p>
                </div>
            </div>

            {/* button */}
            <div className="pt-6">
                <div className="text-center w-full p-3 rounded-lg bg-main_blue text-white">
                <button type="submit"> Kirim
                </button>
                </div>
            </div>
          </div>
        </div>
    );
};