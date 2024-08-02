import { Footer } from "./footer";
import { Header } from "./header";

export function MainLayOut({children}) {
  return (
    <div className="bg-[#FFFFFF]">
      <Header />
      {children}
      <Footer/>
    </div>
  );
}
