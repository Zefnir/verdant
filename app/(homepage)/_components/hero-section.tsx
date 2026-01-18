import Image from "next/image";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { HeroHeader } from "./header";
import MessageSection from "@/public/demo-message.png";
import NextJs from "@/public/nextjs-svgrepo-com.svg";
import Typescript from "@/public/typescript-svgrepo-com.svg";
import Supabase from "@/public/supabase-logo-wordmark--dark.png";
import ShadCn from "@/public/images.png";
import Tailwind from "@/public/tailwind-svgrepo-com.svg";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import ContentSection from "./content-7";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const randomBackground = () => {
  const randomNumber = Math.floor(Math.random() * 10);
  if (randomNumber % 2) {
    return (
      <Image
        src={"/background-6.jpg"}
        alt="background"
        className="hidden size-full dark:block"
        width="3276"
        height="4095"
      />
    );
  } else {
    return (
      <Image
        src={"/background-5.jpg"}
        alt="background"
        className="hidden size-full dark:block"
        width="3276"
        height="4095"
      />
    );
  }
};

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section>
          <div className="relative pt-24 md:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="mask-b-from-50% mask-b-to-80% absolute inset-0 -z-10 "
            >
              {randomBackground()}
            </AnimatedGroup>

            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
            />

            <div className="mx-auto max-w-8xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]"
                >
                  A Friendly Hub for All Developers
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-balance text-xl"
                >
                  A welcoming place for developers to chat, share code and
                  ideas, and build meaningful things together.
                </TextEffect>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="mask-b-from-55% relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                  <Image
                    className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                    src={MessageSection}
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />{" "}
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
        <ContentSection />
        <section className="bg-background pb-16 md:pb-32 mt-16">
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-64 md:border-r md:pr-6">
                <p className="text-end text-md">
                  This web application is made with
                </p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={50} gap={112}>
                  <div className="flex">
                    <Image
                      className="mx-auto dark:invert"
                      src={NextJs}
                      alt="Nvidia Logo"
                      height="64"
                      width="64"
                    />
                  </div>
                  <div className="flex">
                    <Image
                      className="mx-auto"
                      src={Typescript}
                      alt="Nvidia Logo"
                      height="64"
                      width="64"
                    />
                  </div>
                  <div className="flex">
                    <Image
                      className="mx-auto"
                      src={Tailwind}
                      alt="Nvidia Logo"
                      height="64"
                      width="64"
                    />
                  </div>
                  <div className="flex">
                    <Image
                      className="mx-auto dark:invert"
                      src={ShadCn}
                      alt="Nvidia Logo"
                      height="64"
                      width="280"
                    />
                  </div>
                  <div className="flex">
                    <Image
                      className="mx-auto"
                      src={Supabase}
                      alt="Nvidia Logo"
                      height="64"
                      width="300"
                    />
                  </div>
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
