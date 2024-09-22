import Image from "next/image";
import { CiCirclePlus } from "react-icons/ci";

export default function Card() {
    return (
        <div className="space-y-3">
            {/* 2 col  */}
            <div className="grid grid-cols-2 gap-x-3">
                <div className="p-2 px-3 w-full bg-red rounded-lg text-white space-y-3">
                    <div>
                    <p className="text-[14px] font-bold">Oh Tidak!</p>
                    <p className="text-light_grey text-[12px] font-semibold">Kamu Tergolong</p>
                    </div>
                    <p className="text-[24px] font-bold">Diabetes</p>
                </div>
                <div className="p-2 px-3 w-full bg-sec_blue rounded-lg text-black space-y-3">
                    <div>
                    <p className="text-[14px] text-main_blue font-bold">Gula Darah</p>
                    <p className="text-light_grey text-[12px] font-semibold">Oct 10</p>
                    </div>
                    <div className=" flex justify-between items-end">
                    <p className="text-[24px] font-bold">135 <strong className="text-[14px] ml-1">mg/dL</strong></p>
                    <CiCirclePlus className="h-[36px] w-auto text-main_blue relative" />
                    </div>
                </div>
            </div>

            {/* 3 col */}
            <div className="grid grid-cols-3 gap-x-3">

                <div className="p-2 px-3 w-full bg-sec_blue rounded-lg text-black space-y-3">
                    <div>
                    <p className="text-[14px] text-main_blue font-bold">HbA1c</p>
                    <p className="text-yellow text-[12px] font-semibold">Prediabetes</p>
                    </div>
                    <div className=" flex justify-between items-end">
                    <p className="text-[24px] font-bold">5,8 <strong className="text-[14px]">%</strong></p>
                    <div className="h-auto w-[24px] mb-1 text-main_blue">
                        <Image src="/logos/edit.svg" height={500} width={500} alt=""/>
                    </div>
                </div>
                </div>

                <div className="p-2 px-3 w-full bg-sec_blue rounded-lg text-black space-y-3">
                    <div>
                    <p className="text-[14px] text-main_blue font-bold">Berat Badan</p>
                    <p className="text-light_grey text-[12px] font-semibold">Oct 10</p>
                    </div>
                    <div className=" flex justify-between items-end">
                    <p className="text-[24px] font-bold">55 <strong className="text-[14px]">kg</strong></p>
                    <div className="h-auto w-[24px] mb-1 text-main_blue">
                        <Image src="/logos/edit.svg" height={500} width={500} alt=""/>
                    </div>
                    </div>
                </div>

                <div className="p-2 px-3 w-full bg-sec_blue rounded-lg text-black space-y-3">
                    <div>
                    <p className="text-[14px] text-main_blue font-bold">Colestrol Lv.</p>
                    <p className="text-light_grey text-[12px] font-semibold">Oct 10</p>
                    </div>
                    <div className=" flex justify-between items-end">
                    <p className="text-[24px] font-bold">135 <strong className="text-[9px] absolute mt-2 ml-2 leading-tight">mg<br></br>/dL</strong></p>
                    <div className="h-auto w-[24px] mb-1 text-main_blue">
                        <Image src="/logos/edit.svg" height={500} width={500} alt=""/>
                    </div>
                    </div>
                </div>
        </div>
    </div>
    )
}