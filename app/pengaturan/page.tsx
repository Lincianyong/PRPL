"use client";
import Image from "next/image";
import { IoChevronBackSharp } from "react-icons/io5";


export default function Pengaturan() {
    return (
    <div className="px-5">

    {/* Icon */}
    <div className="flex pt-10 h-auto justify-between">
        <div className="w-full flex flex-row items-center space-x-4">
            <IoChevronBackSharp className="w-[22px] h-auto text-main_blue"/>
            <h1 className="font-bold text-[24px] leading-none">Pengaturan</h1>
        </div>
        <Image src="/logos/profile.png" height={40} width={40} alt="" className="h-[40px] w-[40px] rounded-full" />
    </div>

    {/* header */}
    <div className="flex-col space-y-4 mt-10">
        <div className="flex-col space-y-4 mt-10 border-[2px] border-sec_blue p-4 rounded-xl">

        <div className="space-y-2">
            <p className="">
              <strong>Nama Lengkap</strong>
            </p>
            <div className="border-[1px] border-light_grey p-2 rounded-lg">
              <p className="font-semibold">
                <text>Budi Budiarto</text>
              </p>
            </div>
        </div>

        <div className="space-y-2">
            <p className="">
              <strong>Tanggal Lahir</strong>
            </p>
            <div className="border-[1px] border-light_grey p-2 rounded-lg">
              <p className="font-semibold">
                <text>10/10/2000</text>
              </p>
            </div>
        </div>
        
        <div className="space-y-2">
            <p className="">
              <strong>Tinggi (dalam cm)</strong>
            </p>
            <div className="border-[1px] border-light_grey p-2 rounded-lg">
              <p className="font-semibold">
                <text>170</text>
              </p>
            </div>
        </div>

        <div className="space-y-2">
            <p className="">
              <strong>Alamat E-mail</strong>
            </p>
            <div className="border-[1px] border-light_grey p-2 rounded-lg">
              <p className="font-semibold">
                <text>budibudianto@gmail.com</text>
              </p>
            </div>
        </div>

        <div className="space-y-2">
            <p className="">
              <strong>Password</strong>
            </p>
            <div className="border-[1px] border-light_grey p-2 rounded-lg">
              <div className="flex flex-row justify-between">
              <p className="font-semibold text-main_blue">
                <text>Ubah Password</text>
              </p>
              <IoChevronBackSharp className="w-[20px] h-auto text-main_blue rotate-180"/>
              </div>
            </div>
        </div>

        {/* button */}
        <div className="flex pt-6 justify-end">
            <div className="text-center w-[125px] p-2 rounded-lg bg-main_blue text-white">
            <button type="submit"> Simpan
            </button>
            </div>
        </div>

        </div>
    </div>
    </div>
    );
};