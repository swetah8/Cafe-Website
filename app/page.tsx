import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SignaturePicks from "@/components/SignaturePicks";
import News from "@/components/News";
import Statistics from "@/components/Statistics";
import Mission from "@/components/Mission";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <SignaturePicks />
      <News />
      <Statistics />
      <Mission />
      <Gallery />
      <Footer />
    </main>
  );
}
