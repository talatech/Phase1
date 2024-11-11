import Clients from "@/components/home/home-clients";
import HomeHeader from "@/components/home/home-header";
import SecondHeader from "@/components/home/home-second-header";
import HomeServices from "@/components/home/home-features";
import Image from "next/image";
import HomeOffering from "@/components/home/home-offer-services";
import HomeContact from "@/components/home/home-contact";

export default function Home() {
  return (
    <div>
      <HomeHeader/>
      <SecondHeader/>
      <Clients/>
      <HomeServices/>
      <HomeOffering/>
      <HomeContact/>
    </div>
  );
}
