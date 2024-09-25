import Image from "next/image";

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

export default function CardArticle() {
  return (
    <div className="grid grid-cols-2 gap-3 w-full max-w-lg">
      {articles.map((article) => (
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
  );
}
