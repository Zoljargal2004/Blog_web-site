import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <div className="bg-[#F6F6F7] p-8 mt-8 lg:mt-10  lg:py-16 lg:px-[352px]">
      <div className="flex flex-col gap-[25px] max-w-[1216px] mx-auto">
        <div className="flex gap-4">
          <div className="flex flex-col gap-3 flex-1">
            <h3 className="text-[#181A2A] text-[18px] font-semibold">About</h3>
            <p className="text-[#696A75] text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div className="flex flex-col gap-1 text-[#3B3C4A]">
              <span>
                <b className="text-[#181A2A]">Email : </b>info@gmail.com
              </span>
              <span>
                <b className="text-[#181A2A]">Phone : </b>+976 99333620
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center text-[#3B3C4A] flex-1">
            <span>Home</span>
            <span>Blog</span>
            <span>Contact</span>
          </div>
          <div className="flex-1">
            <div className="w-36 flex justify-between text-[#6D6E76]">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-[#DCDDDF] text-[#3B3C4A]">
          <div className="flex justify-between">
            <div className="flex gap-[10px]">
              <img src="../../../images/logo.svg" sizes={48} />
              <div className="flex flex-col gap-[2px]">
                <span className="text-[#141624]">
                  Meta<b>Blog</b>
                </span>
                <span>© All Rights Reserved.</span>
              </div>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
