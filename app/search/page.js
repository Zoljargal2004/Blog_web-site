import Script from "next/script";

export default function Page() {
  return (
    <div>
      <Script async src="https://cse.google.com/cse.js?cx=34a1bbdec73ce47be"/>
      <div class="gcse-search"></div>
    </div>
  );
}
