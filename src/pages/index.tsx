import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import Head from "next/head";

export default function Home() {
  return (
    <div className="font-sans">
      <Head>
        <title>Custom Peinture et Nettoyage</title>
        <meta
          name="description"
          content="Service de NETTOYAGE et de PEINTURE RÉSIDENTIEL"
        />
        <meta
          name="keywords"
          content="Montréal, nettoyage, peinture résidentiel, cleaning, house painting"
        />
        <meta name="author" content="Marco Antonio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <section>
          <HeroCarousel />
        </section>
      </main>
    </div>
  );
}
