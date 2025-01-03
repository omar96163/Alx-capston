import React, { useContext } from "react";
import Nav from "./Nav";
import Intro from "./Intro"
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import { Theme } from "../App";

function Home() {
  const darkmod = useContext(Theme);
  return (
    <div className={`${darkmod && "dark"} font-serif`}>
      <div className="bg-[url('/Images/bg-w.webp')] dark:bg-[url('/Images/bg-b.avif')] bg-cover bg-center ">
        <div className=" bg-white py-5 px-3 sm:px-16 bg-opacity-20 dark:bg-black dark:bg-opacity-70 min-h-screen max-h-full">
          <Nav />
          <div className="h-[2px] my-10 bg-white"></div>
          <main className="lg:flex justify-between gap-8">
            <Intro />
            <SearchBar />
          </main>
          <div className="h-[2px] my-10 bg-white"></div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
