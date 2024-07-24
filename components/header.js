import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const nav_bar = [
  { text: "Home", link: "#" },
  { text: "Blog", link: "#" },
  { text: "Contact", link: "#" },
];

export function Header() {
  return (
    <div className="py-8">
      <div className="flex items-center justify-between max-w-[1130px] m-auto">
        <div className="flex text-[#141624] text-3xl items-center gap-[9px]">
          <img src="./images/logo.svg" className="dark:text-white h-9 w-9" />
          <span>
            Meta
            <b>Blog</b>
          </span>
        </div>
        <div className="flex gap-10 text-lg text-[#3B3C4A]">
          {nav_bar.map((bar) => {
            return <Link href={bar.link}>{bar.text}</Link>;
          })}
        </div>
        <div className="relative ">
            <input placeholder="Search" className="flex flex-row-reverse py-2 px-4 max-w-[166px] bg-[#F4F4F5] text-[14px]"></input>
            <CiSearch size={16} className="h-4 absolute right-2 top-auto bottom-auto"/>
        </div>
      </div>
    </div>
  );
}
