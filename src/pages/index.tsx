import HeroCarousel from "@/components/HeroCarousel";
import Head from "next/head";
import Image from "next/image";
import Section2Image from "../images/blue-living-room-accent-wall.jpeg";

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
        <section className="p-6 sm:py-16 sm:px-28 md:py-20 md:px-32">
          <div className="mx-auto lg:flex lg:gap-10 w-80 sm:w-[28rem] md:w-[36rem] lg:w-[55rem]">
            <Image
              src={Section2Image}
              alt="blue living room accent wall"
              className="object-cover h-48 sm:h-56 md:h-72 lg:mt-12 lg:h-80 lg:w-[27rem]"
            />
            <div className="text-center-bug lg:text-left">
              <h2 className="pt-3 font-bold text-base sm:text-lg md:text-xl">
                NOUS CRÉONS DES OPPORTUNITÉS POUR RENDRE DES ENVIRONNEMENTS
                BEAUX ET SPECTACULAIRES
              </h2>
              <p className="text-sm sm:text-base md:text-lg">
                C.P.N (Custom Peinture et Nettoyage) est une entreprise
                spécialisée dans le nettoyage commercial et la peinture
                intérieure résidentiel, depuis 2018 offrant le mieux, on est
                engagé avec l&apos;excellence en inspirant les clients avec
                notre travailte.
              </p>
              <p className="text-sm sm:text-base md:text-lg">
                Notre différence réside dans l&apos;agilité, l&apos;organisation
                de nos processus et l&apos;attention aux petits détails, offrant
                des résultats impeccables et incroyables.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
