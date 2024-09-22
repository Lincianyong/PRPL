"use client";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import Card from "./_components/Cards";
import Articles from "./_components/Article";


export default function Home() {
    return (
    <div className="px-5 overflow-clip">
        {/* Logo */}
        <div className="flex pt-10 h-auto justify-between">
            <div className="w-[150px]">
                <Image src="/logos/diatect.png" height={500} width={500} alt="" />
            </div>
            <IoMenu className="w-[36px] font-bold h-auto text-main_blue -mr-1"/>
        </div>

        {/* card */}
        <div className="mt-12">
            <Card />
        </div>

        {/* trend */}
        <div className="mt-12 space-y-4">
        <h1 className="font-bold text-[20px]">Tren Gula Darah</h1>
        </div>

        {/* article */}
        <div className="mt-12 space-y-4">
        <h1 className="font-bold text-[20px]">Artikel Terkait</h1>
            <Articles />
        </div>
    </div>
    );
};