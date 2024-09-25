"use client";
import { useState } from "react";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
// import CardArticle from "./_components/CardArticle";
import { IoSearchSharp } from "react-icons/io5";

export default function Home() {
    const articles = [
        {
          id: "1",
          image: "/logos/photos.jpg",
          title: "10 Tips Seimbangin Gula Darah",
          desc: "Dibuat oleh dr. Esthera Jackson",
        },
        {
          id: "2",
          image: "/logos/photos.jpg",
          title: "10 Tips Seimbangin Gula Darah",
          desc: "Dibuat oleh dr. Esthera Jackson",
        },
        {
          id: "3",
          image: "/logos/photos.jpg",
          title: "10 Tips Seimbangin Gula Darah",
          desc: "Dibuat oleh dr. Esthera Jackson",
        },
      ];

    const [filteredArticles, setFilteredArticles] = useState(articles); 

    function onChange( e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setFilteredArticles(
        articles.filter((article) =>
            article.title.toLowerCase().includes(value.toLowerCase())
        )
        );
    }

    return (
    <div className="px-5 overflow-clip">
        {/* Logo */}
        <div className="flex pt-10 h-auto justify-between">
            <div className="w-[150px]">
                <Image src="/logos/diatect.png" height={500} width={500} alt="" />
            </div>
            <IoMenu className="w-[36px] font-bold h-auto text-main_blue -mr-1"/>
        </div>

        {/* header */}
        <div className="text-left mt-12">
            <h1 className="font-bold text-[24px]">Artikel</h1>
        </div>

        {/* search bar */}
        <div className="flex flex-row gap-2 mt-2">
            <div className="w-full">
                <div className="border-[1px] border-main_blue p-2 rounded-lg">
                <input
                    onChange={onChange}
                    type="text"
                    placeholder="Cari berdasarkan nama artikel"
                    className="font-semibold w-full"
                />
                </div>
            </div>
            <div className="w-[45px] items-center justify-center">
                <div className="border-[1px] bg-main_blue p-2 rounded-lg">
                <IoSearchSharp className="w-[24px] font-bold h-auto text-white"/>
                </div>
          </div>
        </div>

        {/* card */}
        <div className="mt-6">
            <div className="grid grid-cols-2 gap-3 w-full max-w-lg">
            {filteredArticles.map((article) => (
                <div key={article.id} className="border-[1px] w-full border-main_blue rounded-lg p-3 relative">
                <Image
                    src={article.image}
                    height={200}
                    width={400}
                    alt="article image"
                    className="rounded-lg w-full h-auto object-cover mb-2"
                />
                <h2 className="text-[14px] font-bold text-main_blue mb-1 leading-tight">{article.title}</h2>
                <p className="text-dark_grey text-[10px]">{article.desc}</p>
                </div>              
        ))}
        </div>
        </div>
    </div>
    );
};

