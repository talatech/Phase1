import Clients from "@/components/home/home-bundles-three";
import HomeHeader from "@/components/home/home-header-one";
import SecondHeader from "@/components/home/home-choose";
import HomeFeaturesFour from "@/components/home/home-features-four";
import HomeOffering from "@/components/home/home-audit-two";
import HomeFooterHeader from "@/components/home/home-footer-contact";
import HomeCoreServices from "@/components/home/home-core-services-two";
import HomeAudit from "@/components/home/home-audit-two";

export default function Home() {
  return (
    <div>
      <HomeHeader/>
      <HomeAudit/>
      <HomeCoreServices/>
      <Clients/>
      <HomeFeaturesFour/>
      <HomeFooterHeader/>
    </div>
  );
}
