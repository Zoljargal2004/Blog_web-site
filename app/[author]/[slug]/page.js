import parse from "html-react-parser";

export async function generateMetadata({ params }) {
  const response = await fetch(
    `https://dev.to/api/articles/${params.author}/${params.slug}`
  );
  const article = await response.json();

  return {
    openGraph: { title: article.title, description: article.description, images: [{url: article.social_image}] },
  };
}
export default async function Page({ params }) {
  const response = await fetch(
    `https://dev.to/api/articles/${params.author}/${params.slug}`
  );
  const article = await response.json();

  return (
    <main className="bg-white text-[#3B3C4A]">
      <div className="prose max-w-[796px] mx-auto mt-[100px]">
        <div className="text-4xl font-semibold text-[#181A2A]">
          {article.title}
        </div>
        <div>{parse(article.body_html)}</div>
      </div>
    </main>
  );
}
