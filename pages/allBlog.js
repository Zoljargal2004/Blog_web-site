import Image from "next/image";
import { Inter, Thasadith } from "next/font/google";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import dayjs, { Dayjs } from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import '@/components/custom-mn'

dayjs.extend(relativeTime)

const inter = Inter({ subsets: ["latin"] });

let data = [];

let loadedAll = false;

export default function AllBlog() {
  let page = 0;
  const [articles, setArticle] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    LoadMore();
  }, []);

  async function LoadMore() {
    const responses = await fetch(
      `https://dev.to/api/articles?username=arindam_1729&page=${page}&per_page=6`
    );
    const data = await responses.json();
    data.length < 6 ? (loadedAll = true) : (loadedAll = false);
    const updatedArticles = articles.concat(data);
    setArticle(updatedArticles);
    page++;
    
  }

  return (
    <div className="bg-white text-[#181A2A]">
      <Header />
      <div className="flex flex-col items-center lg:mt-[100px]  lg:gap-12">
        <div className="max-w-[1216px] flex flex-col gap-12">
          <span className="text-2xl font-bold">All Blog Post</span>

          <div className="grid grid-cols-3 gap-5 ">
            {articles.map((article) => (
              <Card details={article} />
            ))}
          </div>
        </div>
        {!loadedAll && (
          <button className="btn btn-outline" onClick={LoadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
}


function Card(props) {
  const article = props.details;
  const relative_date = dayjs(article.published_at).locale('mn').fromNow()

  return (
    <a
      className="p-4 max-w-[392px] border-[1px] border-[rgba(232, 232, 234, 1)] rounded-[12px] flex flex-col items-center gap-4 "
      key={article.id}
      href={article.path}
      target="_blank"
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
        <span className="font-semibold text-2xl">{article.title}</span>
        <div className="flex gap-3 items-center text-[#97989F]">
            <img className="rounded-[50%] w-9" src={article.user.profile_image_90}></img>
            <span>{article.user.username}</span>
            <span>{relative_date}</span>
        </div>
      </div>
    </a>
  );
}
