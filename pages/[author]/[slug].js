import { useState, useEffect } from "react";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import Markdown from "react-markdown";
import { Header } from "@/components/header";
import { MainLayOut } from "@/components/MainLayOut";

export default function Page() {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const { author, slug } = router.query;

  useEffect(() => {
    if (router.isReady) {
      LoadMore();
    }
  }, [router.isReady]);

  function LoadMore() {
    setLoading(true);

    fetch(`https://dev.to/api/articles/${author}/${slug}`)
      .then((responses) => {
        return responses.json();
      })
      .then((detail) => {
        setArticle(detail);
        setLoading(false);
      });
  }

  if (loading) return <div>Loading...</div>;
  return (
    <MainLayOut>
      <main className="bg-white text-[#3B3C4A]">
        <div className="prose max-w-[796px] mx-auto mt-[100px]">
          <div className="text-4xl font-semibold text-[#181A2A]">
            {article.title}
          </div>
          <div>{parse(article.body_html)}</div>
        </div>
      </main>
    </MainLayOut>
  );
}
