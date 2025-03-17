import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home - GrigoMotion",
  description: "Seu parceiro de motion que cria identidades, sistemas e aplicações.",
};

const videoSources = [
  "/videos/AIRBNB.mp4",
  "/videos/NA_COZINHA_FINAL.mp4",
  "/videos/RODGUIN_SITE_VIDEO.mp4",
  "/videos/STAGES_final.mp4",
];

export default function Home() {
  return (
    <main className="main px-[3%] pb-8">
      <section className="home flex flex-col pt-12 text-center items-center">
        <h1 className="title cursor-default tracking-tight leading-none select-none font-bold text-[10vw] md:text-[8rem] lg:text-[10rem]">
          GRIGO MOTION&trade;
        </h1>

        <h3 className="description text-[5vw] md:text-[2.5rem] lg:text-[3.5rem] font-medium max-w-[90%] md:max-w-[60%] pt-12 md:pt-16">
        Motion Designer especializado em dar vida a identidades visuais
        </h3>

        <Link
          href="/sobre"
          className="mt-6 md:mt-8 text-lg md:text-xl font-medium transition duration-300 hover:text-[var(--alternative-color)]"
        >
          Saiba mais sobre mim →
        </Link>
      </section>
      <section className="relative w-full mt-12 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[90%]">
          {videoSources.map((src, index) => (
            <video
              key={index}
              src={src}
              className="w-full h-auto rounded-xl shadow-lg"
              autoPlay
              loop
              muted
              playsInline
            />
          ))}
        </div>
      </section>
    </main>
  );
}
