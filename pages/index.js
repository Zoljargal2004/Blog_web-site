import Image from "next/image";
import { Days_One, Inter, Thasadith } from "next/font/google";
import { useState, useEffect } from "react";
import React, { useRef } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import dayjs, { Dayjs } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "@/components/custom-mn";
import { AllBlogPost } from "@/components/AllBlogSection";
import { TrendingSection } from "@/components/TrendingSection";

dayjs.extend(relativeTime);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  
  return (
    <div className="bg-white text-[#181A2A]">
      <Header />
      <div className="max-w-[1216px] mx-auto flex flex-col gap-[100px] ">
        <Hero />
        <TrendingSection />
        <AllBlogPost />
      </div>
    </div>
  );
}

function Hero() {
  const articles = getHeroDetails(9);
 

  if (articles == []) {
     console.log(articles);
    return <div className="text-black">Loading...</div>
  }

  return (
    <div className="carousel rounded-box w-[1216px] mx-auto mt-[100px]">
      {articles.map((article) => (
        <div className="carousel-item w-full relative">
          <img className="w-full object-cover" src={article.social_image} />
          <div className="z-30 absolute left-[10px] bottom-[10px] shadow-extra border-[1px] border-[#E8E8EA] bg-[#FFFFFF] p-10 rounded-[12px] flex flex-col gap-4 max-w-[598px]">
            <div className="flex flex-wrap gap-2">{article.tag_list.map((tag)=>(<SpecialTag tag={tag}/>))}</div>
            <h1 className="text-4xl font-semibold">{article.title}</h1>
            <span className="text-[#97989F] -mt-2">{dayjs(article.published_at).format(`MMM DD, YYYY`)}</span>
          </div>
          <div className="inset-0 absolute z-20 bg-[#14162466]"></div>
        </div>
      ))}
    </div>
  );
}

function SpecialTag(props) {
  return (
    <span className="text-[#FFFFFF] py-1 px-[10px] bg-[#4B6BFB] rounded-[6px]">
      {props.tag}
    </span>
  );
}

function getHeroDetails(number) {
  const [heroArticles, setHeroArticles] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    {
      const responses = await fetch(`https://dev.to/api/articles?state=fresh&per_page=${number}`);
      const datas = await responses.json();
      setHeroArticles(datas);
    }
  }
  return heroArticles;
}



