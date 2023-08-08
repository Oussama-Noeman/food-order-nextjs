import Category from "../components/Category";
import Hero from "../components/Home/Hero";
import Offer from "../components/Home/Offer";
import Order from "../components/Home/Order";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div>
        <Hero />
        <Category />
        <Offer />
        <Order />
      </div>
    </main>
  );
}
