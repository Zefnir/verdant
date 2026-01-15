import { Cpu, Zap } from "lucide-react";
import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          <span className="text-lime-400">Ver</span>dant brings developers
          together in one shared space.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              It’s a real-time communication hub built for developers to chat,
              collaborate in threads, share code and images, and turn ideas into
              working software without the noise
            </p>
            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="size-4" />
                  <h3 className="text-sm font-medium">Real-time</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Built for instant conversations that keep developers in sync.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Cpu className="size-4" />
                  <h3 className="text-sm font-medium">Thread</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Organize conversations with focused replies that stay easy to
                  follow.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mt-6 sm:mt-0">
            <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/demo-login.png"
                className="hidden rounded-[15px] dark:block"
                alt="login"
                width={1440}
                height={1024}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
