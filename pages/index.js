import Image from "next/image";
import { Days_One, Inter, Thasadith } from "next/font/google";
import { useState, useEffect } from "react";
import React, { useRef } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import dayjs, { Dayjs } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "@/components/custom-mn";
import { AllBlogPost } from "@/components/AllBlogSection";
import { TrendingSection } from "@/components/TrendingSection";
import { MainLayOut } from "@/components/MainLayOut";
import { Hero } from "@/components/Hero";
dayjs.extend(relativeTime);

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  return {
    openGraph: { title: `Blog Web`, description: `Blog Website`, images: [{url: null}] },
  };
}


export default function Home() {
  return (
    <div className="bg-white text-[#181A2A]">
      <MainLayOut>
        <div className="max-w-[1216px] mx-auto flex flex-col gap-[100px] ">
          <Hero />
          <TrendingSection />
          <AllBlogPost />
        </div>
      </MainLayOut>
    </div>
  );
}
 
