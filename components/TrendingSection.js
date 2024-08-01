import Image from "next/image";
import { Inter, Thasadith } from "next/font/google";
import { useState, useEffect } from "react";
import Link from "next/link";

export function TrendingSection() {
    let number = 4;
  
    const [trendingArticles, setTrendingArticles] = useState([]);
    useEffect(() => {
      getTrendingArticles();
    }, []);
    async function getTrendingArticles() {
      const responses = await fetch(`https://dev.to/api/articles?state=rising`);
      const datas = await responses.json();
      setTrendingArticles(datas);
    }
  
    return (
      <div className="flex flex-col gap-[30px] text-[#181A2A]">
        <span className="font-bold text-2xl">Trending</span>
        <div className="flex gap-6">
          {trendingArticles.slice(0, number).map((article) => {
            return <Card details={article} />;
          })}
        </div>
      </div>
    );
  }
  
  function Card(props) {
    const { social_image, tag_list, title, path } = props.details;
  
    return (
      <Link href={path} className="flex-1 rounded-[12px]  relative h-[320px] bg-cover bg-center overflow-hidden text-[#FFFFFF] group">
        <img className="object-cover w-full h-full" src={social_image} />
        <div className="absolute z-10 bg-[#14162466] inset-0 flex flex-col-reverse gap-4 p-7">
          <p className="text-[18px] font-semibold overflow-hidden transition-max-height duration-1000 ease-in-out group-hover:max-h-[8em] max-h-[3em]">
            {title}
          </p>
          <div className="flex gap-2 flex-wrap overflow-hidden transition-max-height duration-1000 ease-in-out group-hover:max-h-[10em] max-h-[2em] ">
            {tag_list.map((tag) => (
              <span className="bg-[#4B6BFB] px-[10px] py-1 rounded-[6px]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    );
  }