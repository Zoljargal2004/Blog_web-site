import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

const nav_bar = [
  { text: "Home", link: "../" },
  { text: "Blog", link: "allBlog" },
  { text: "Contact", link: "contact" },
];

export function Header() {
  return (
    <div className="p-5 mb-8 lg:py-8 bg-[#FFFFFF]">
      <div className="flex items-center justify-between max-w-[1130px] m-auto">
        <div className=" text-[#141624] text-3xl items-center gap-[9px] flex">
          <img
            src="../.././images/logo.svg"
            className="dark:text-white h-9 w-9"
          />
          <span>
            Meta
            <b>Blog</b>
          </span>
        </div>
        <div className=" gap-10 text-lg text-[#3B3C4A] hidden lg:flex">
          {nav_bar.map((bar) => {
            return (
              <Link href={bar.link} key={bar.text}>
                {bar.text}
              </Link>
            );
          })}
        </div>
        <div className="relative hidden lg:block">
          <form action={'./search'}>
            <input
            name="q"
              type="search"
              placeholder="Search"
              className="flex flex-row-reverse py-2 px-4 max-w-[166px] bg-[#F4F4F5] text-[14px]"
            ></input>
            <CiSearch
              size={16}
              className=" text-[#3B3C4A] h-4 absolute right-2 inset-y-[10px]"
            />
          </form>
        </div>
        <div className="lg:hidden">
          <GiHamburgerMenu size={32} />
        </div>
      </div>
    </div>
  );
}

function SideBar() {
  return <div className="md:hidden"></div>;
}
