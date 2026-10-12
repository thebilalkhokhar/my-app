import Header from "components/Header";
import Hero from "components/Hero";
import Stats from "components/Stats";
import BoxStyles from "components/BoxStyles";
import WhyUs from "components/WhyUs";
import Process from "components/Process";
import Finishes from "components/Finishes";
import Customize from "components/Customize";
import UseCases from "components/UseCases";
import Reviews from "components/Reviews";
import Faq from "components/Faq";
import Footer from "components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <BoxStyles />
        <WhyUs />
        <Process />
        <Finishes />
        <Customize />
        <UseCases />
        <Reviews />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
