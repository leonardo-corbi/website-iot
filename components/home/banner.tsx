import Link from "next/link";
import Image from "next/image";

import BoxReveal from "@/components/ui/box-reveal";
import ShimmerButton from "@/components/ui/shimmer-button";

import DotPattern from "@/components/ui/dot-pattern";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";

import { cn } from "@/lib/utils";

export function Banner() {
  return (
    <section className="relative bg-primary py-16 px-6 text-primary-foreground overflow-hidden">
      <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-4">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h1 className="text-4xl font-bold">
              Site pessoal para integrada de Iot
            </h1>
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-lg">
              Este site tem como objetivo demonstrar os projetos e as
              soft-skills de Leonardo Corbi no ano de 2024 em relação ao curso
              de Internet das Coisas (IoT)
            </p>
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <Link
              href="meet-leo"
              className="flex items-center gap-2 font-medium bg-primary-foreground rounded-full"
              prefetch={false}
            >
              <ShimmerButton className="shadow-2xl">
                Conheça o Léo
                <ArrowRightIcon className="h-5 w-5" />
              </ShimmerButton>
            </Link>
          </BoxReveal>
        </div>
        <Image
          src="/leonardo-corbi.jpg"
          alt="Accounting Services"
          className="rounded-lg shadow-lg"
          width={400}
          height={400}
          style={{ objectFit: "contain" }}
        />
      </div>
      <DotPattern
        className={cn(
          "absolute inset-0 [mask-image:radial-gradient(450px_circle_at_left,white,transparent)] z-0 md:opacity-100 opacity-50"
        )}
      />
    </section>
  );
}
