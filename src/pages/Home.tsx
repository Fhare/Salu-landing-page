import { Header } from "../components/layout/Header";
import { Hero } from "../components/layout/Hero";
import { Main } from "../components/sections/Main";

import "./home.scss";

export function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
      </div>
      
      <Main />
    </>
  );
}