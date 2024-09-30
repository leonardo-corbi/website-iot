import BoxReveal from "@/components/ui/box-reveal";
import DotPattern from "@/components/ui/dot-pattern";
import Iphone15Pro from "@/components/ui/iphone-15-pro";

import { cn } from "@/lib/utils";
import Image from "next/image";

export function Banner() {
  return (
    <section className="relative bg-primary py-14 px-6 text-primary-foreground overflow-hidden">
      <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-4">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h1 className="text-4xl font-bold">Quem é Leonardo Corbi?</h1>
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="md:text-xl text-justify text-lg">
              Eu, <span className="font-bold">Leonardo Corbi</span>, sou um
              jovem de 17 anos apaixonado pela vida e sempre em busca de novos
              aprendizados. Um dos meus interesses é participar de simulações da
              ONU, onde posso discutir temas globais e desenvolver habilidades
              de negociação e liderança. Além disso, tenho um grande interesse
              em programação. Estou explorando linguagens como Python e o
              desenvolvimento de aplicativos com Next.js, pois acredito que a
              tecnologia pode trazer soluções inovadoras para problemas do
              cotidiano. Estou sempre aberto a novos desafios e pronto para
              aprender mais!{" "}
            </p>
          </BoxReveal>
        </div>
        <div className="">
          <Iphone15Pro
            className="h-[500px] hidden md:block"
            src="leonardo-corbi-senamun.jpg"
          />
          <Image
            src="/leonardo-corbi-senamun.jpg"
            alt="Leonardo Corbi"
            height={400}
            width={400}
            className="block md:hidden rounded-xl"
          />
        </div>
      </div>
      <DotPattern
        className={cn(
          "absolute inset-0 [mask-image:radial-gradient(450px_circle_at_left,white,transparent)] z-0 md:opacity-100 opacity-50"
        )}
      />
    </section>
  );
}
