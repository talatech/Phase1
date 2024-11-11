import Clients from "@/components/home/home-clients";
import HomeHeader from "@/components/home/home-header";
import SecondHeader from "@/components/home/home-second-header";
import HomeServices from "@/components/home/home-services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomeHeader/>
      <SecondHeader/>
      <Clients/>
      <HomeServices/>
    </div>
  );
}
