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
  const articles = getHeroDetails(4);
  console.log(articles);
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
      const responses = await fetch(`https://dev.to/api/articles?state=fresh`);
      const datas = await responses.json();
      setHeroArticles(datas);
    }
  }
  return heroArticles.slice(0, number);
}

// {
//   "type_of": "article",
//   "id": 194541,
//   "title": "There's a new DEV theme in town for all you 10x hackers out there (plus one actually useful new feature)",
//   "description": "",
//   "cover_image": "https://res.cloudinary.com/practicaldev/image/fetch/s--74Bl23tz--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--xU8cbIK4--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/8a39dzf3oovzc2snl7iv.png",
//   "readable_publish_date": "Oct 24",
//   "social_image": "https://res.cloudinary.com/practicaldev/image/fetch/s--SeMxdKIa--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--xU8cbIK4--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/8a39dzf3oovzc2snl7iv.png",
//   "tag_list": [],
//   "tags": "meta, changelog, css, ux",
//   "slug": "there-s-a-new-dev-theme-in-town-for-all-you-10x-hackers-out-there-plus-one-actually-useful-new-feature-2kgk",
//   "path": "/devteam/there-s-a-new-dev-theme-in-town-for-all-you-10x-hackers-out-there-plus-one-actually-useful-new-feature-2kgk",
//   "url": "https://dev.to/devteam/there-s-a-new-dev-theme-in-town-for-all-you-10x-hackers-out-there-plus-one-actually-useful-new-feature-2kgk",
//   "canonical_url": "https://dev.to/devteam/there-s-a-new-dev-theme-in-town-for-all-you-10x-hackers-out-there-plus-one-actually-useful-new-feature-2kgk",
//   "comments_count": 37,
//   "positive_reactions_count": 12,
//   "public_reactions_count": 142,
//   "collection_id": null,
//   "created_at": "2019-10-24T13:41:29Z",
//   "edited_at": "2019-10-24T13:56:35Z",
//   "crossposted_at": null,
//   "published_at": "2019-10-24T13:52:17Z",
//   "last_comment_at": "2019-10-25T08:12:43Z",
//   "published_timestamp": "2019-10-24T13:52:17Z",
//   "reading_time_minutes": 15,
//   "user": {},
//   "organization": {}
//   }
