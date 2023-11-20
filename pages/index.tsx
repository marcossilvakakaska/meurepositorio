import Head from "next/head";
import { BannerComponent } from "../src/components/Banner";
import { BestComponent } from "../src/components/Best";
import { FeatureComponent } from "../src/components/Features";
import { ProtectionComponent } from "../src/components/Protection";

export default function Home() {
  return (
    <>
      <Head>
        <title>TwinsHost — Hospedagem na web</title>
      </Head>
      <BannerComponent />
      <BestComponent />
      <ProtectionComponent />
      <FeatureComponent />
    </>
  );
}
