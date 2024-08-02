import { Header } from "@/components/header";
import { MainLayOut } from "@/components/MainLayOut";

export default function Page() {
  return (
    <MainLayOut>
      <div className="bg-[#FFFFFF]">
        <NotFound />
      </div>
    </MainLayOut>
  );
}

function NotFound() {
  return (
    <div className="flex text-[#000000] max-w-[642px] mx-auto my-[100px]">
      <span className="text-7xl">404</span>
      <div className="border-l-[1px] h-[156px]"></div>
      <div className="flex flex-col gap-5">
        <h2 className="font-semibold text-2xl">Page Not Found</h2>
        <p className="text-[#696A75] text-[18px]">
          We're so sorry, This page is unknown or does not exist the page you
          are looking for.
        </p>
        <a className="btn" href="">
          Back To Home
        </a>
      </div>
    </div>
  );
}
