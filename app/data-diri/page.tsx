"use client";
import Image from "next/image";

export default function DataDiri() {
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
          <div className="space-y-2">
            <p className="">
              <strong>Tanggal Lahir</strong>
              <strong className="text-red">*</strong>
            </p>
            <div className="border-[1px] border-light_grey p-2 rounded-lg">
              <input
                type="date"
                placeholder="10/10/2000"
                className="font-semibold text-light_grey w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4">
            <div className="space-y-2 basis-1/2">
                <p className="">
                <strong>Tinggi (dalam cm)</strong>
                <strong className="text-red">*</strong>
                </p>
                <div className="border-[1px] border-light_grey p-2 rounded-lg">
                <input
                    type="text"
                    placeholder="170"
                    className="font-semibold w-full"
                />
                </div>
            </div>
            <div className="space-y-2 basis-1/2">
                <p className="">
                <strong>Berat (dalam kg)</strong>
                <strong className="text-red">*</strong>
                </p>
                <div className="border-[1px] border-light_grey p-2 rounded-lg">
                <input
                    type="text"
                    placeholder="55"
                    className="font-semibold w-full"
                />
                </div>
          </div>
          
          </div>

          <div className="space-y-2">
            <p className="">
              <strong>Gula Darah (dalam mg/dL)</strong>
              <strong className="text-red">*</strong>
            </p>
            <div className="border-[1px] border-light_grey p-2 rounded-lg">
              <input
                type="text"
                placeholder="135"
                className="font-semibold w-full"
              />
            </div>
          </div>

          <div className="space-y-2">
            <p className="">
              <strong>HbA1c (dalam %)</strong>
              <strong className="text-red">*</strong>
            </p>
            <div className="border-[1px] border-light_grey p-2 rounded-lg">
              <input
                type="text"
                placeholder="5,8"
                className="font-semibold w-full"
              />
            </div>

            <div className="space-y-2">
            <p className="">
              <strong>Level Kolestrol (dalam mg/dL)</strong>
              <strong className="text-red">*</strong>
            </p>
            <div className="border-[1px] border-light_grey p-2 rounded-lg">
              <input
                type="text"
                placeholder="185"
                className="font-semibold w-full"
              />
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

        </div>
    </div>
    );
};