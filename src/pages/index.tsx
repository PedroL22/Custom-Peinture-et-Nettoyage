import HeroCarousel from "@/components/HeroCarousel";
import Head from "next/head";

export default function Home() {
  return (
    <>
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="font-sans">
        <section>
          <HeroCarousel />
        </section>
      </main>
    </>
  );
}
