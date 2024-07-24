import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [articles, setArticle] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=paul_freeman")
      .then((responses) => {
        return responses.json();
      })
      .then((data) => {
        setArticle(data);
      });
  });
  return (
    <div className="bg-white">
      <Header/>


      {articles.map((article) => {
        return (
          <div key={article.id}>
            <Link href={article.url} target="_blank"> {article.title} </Link>
          </div>
        );
      })}
    </div>
  );
}
