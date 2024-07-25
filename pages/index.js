import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

let data = [];

export default function Home() {


  const [articles, setArticle] = useState([]);

  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=arindam_1729&page1&per_page=6`)
      .then((responses) => {
        return responses.json();
      })
      .then((data) => {
        setArticle(data);
      });
  }, []);

  function LoadMore(){
    useEffect(() => {
      fetch(`https://dev.to/api/articles?username=arindam_1729&page1&per_page=6`)
        .then((responses) => {
          return responses.json();
        })
        .then((data) => {
          setArticle(data);
        });
    }, []);
  }




  console.log(articles);
  return (
    <div className="bg-white">
      <Header />
      <div className="flex flex-col items-center lg:mt-[100px]  lg:gap-[100px]">
        {/* here all the article */}
        <div className="max-w-[1216px] flex flex-col items-center">
          <div className="grid grid-cols-3 gap-5 ">
            {articles.map((article) => (
              <div
                className="p-4 max-w-[392px] border-[1px] border-[rgba(232, 232, 234, 1)] rounded-[12px] flex flex-col items-center gap-4"
                key={article.id}
              >
                <div className="rounded-[6px] overflow-hidden ">
                  <img
                    src={article.cover_image}
                    className="object-cover w-[360px] h-[240px]"
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  {article.tag_list.map((tag) => (
                    <span className="text-[#4B6BFB] px-[10px] py-1 bg-[#4B6BFB0D] text-[14px]">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-5">
                  <span className="font-semibold text-2xl">
                    {article.title}
                  </span>
                  <span>{article.created_at.slice(0, 10)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="btn btn-outline" onClick={LoadMore}>Load More</button>
      </div>
    </div>
  );
}

function getAPI() {}

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
