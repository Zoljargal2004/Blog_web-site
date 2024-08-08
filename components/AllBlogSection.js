import Image from "next/image";
import { Inter, Thasadith } from "next/font/google";
import { useState, useEffect } from "react";
import Link from "next/link";
import dayjs, { Dayjs } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "@/components/custom-mn";


export function AllBlogPost() {
  const [tags, setTags] = useState([]);
  const [activeTag, setActiveTag] = useState("All");

  useEffect(() => {
    fetchTags();
  }, []);

  async function fetchTags() {
    const responses = await fetch(`https://dev.to/api/tags`);
    const datas = await responses.json();
    datas.unshift({
      id: 0,
      name: "All",
    });
    setTags(datas);
  }

  return (
    <div className="text-[#181A2A] flex-col gap-8 flex px-10  ">
      <span className="text-2xl font-bold  ml-[13px] lg:ml-[0]">All Blog Post</span>
      <div className="hidden justify-between lg:flex">
        <nav className="flex gap-5">
          {tags.map((tag) => {
            return (
              <span
              key={`tag`+tag.id}
                className={`cursor-pointer hover:text-[#D4A373] ${
                  activeTag == tag.name ? "text-[#D4A373]" : ""
                }`}
                id={`tag${tag.id}`}
                onClick={() => {
                  setActiveTag(tag.name);
                }}
              >
                {tag.name[0].toUpperCase() + tag.name.slice(1)}
              </span>
            );
          })}
        </nav>
        <a href="allBlog">View All</a>
      </div>
      <RenderArticles tag={activeTag} />
    </div>
  );
}

function RenderArticles(props) {
  const [articles, setArticles] = useState([]);
  const [canCon, setCanCon] = useState(articles.length<=6 * 6);
  const [packNumber, setPackNumber] = useState(6);

  useEffect(() => {
    getArticles();
  }, [props.tag]);

  async function getArticles() {
    const responses = await fetch(
      `https://dev.to/api/articles?username=arindam_1729`
    );
    const datas = await responses.json();
    const bag = [];
    if (props.tag === "All") {
      setArticles(datas);
    } else {
      for (let i = 0; i < datas.length; i++) {
        if (datas[i].tag_list.includes(props.tag)) {
          bag.push(datas[i]);
        }
      }

      setArticles(bag);
      setPackNumber(6)
    }
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {articles.slice(0, packNumber).map((article) => {
          return <Card key={article.id} details={article} />;
        })}
      </div>
      {canCon && (
        <button
          className="btn btn-outline w-[123px] mx-auto mt-[60px]"
          onClick={() => {
            setPackNumber(packNumber + 6);
            
          }}
        >
          Load More
        </button>
      )}
    </>
  );
}

function Card(props) {
  const article = props.details;
  const relative_date = dayjs(article.published_at).locale("mn").fromNow();

  return (
    <a
      className="p-4 max-w-[392px] border-[1px] border-[rgba(232, 232, 234, 1)] rounded-[12px] flex flex-col items-center gap-4 mx-auto"
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
        <span>{relative_date}</span>
      </div>
    </a>
  );
}
