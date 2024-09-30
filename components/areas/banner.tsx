import BoxReveal from "@/components/ui/box-reveal";
import DotPattern from "@/components/ui/dot-pattern";
import { AnimatedBeamComponent } from "@/components/areas/animated-beam";

import { cn } from "@/lib/utils";

export function Banner() {
  return (
    <section className="relative bg-primary py-14 px-6 text-primary-foreground overflow-hidden">
      <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-4">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h1 className="text-4xl font-bold">Áreas do Saber</h1>
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="md:text-xl text-justify text-lg">
              São compostas por matérias de ciências, que abrangem diversas
              disciplinas, como biologia, química, física e matemática. Cada uma
              delas contribui para uma compreensão mais profunda do mundo ao
              nosso redor, permitindo que os alunos desenvolvam habilidades
              críticas e analíticas essenciais para a resolução de problemas. O
              conhecimento adquirido nessas áreas é fundamental para a formação
              de profissionais capacitados em diversas esferas, desde a pesquisa
              científica até a inovação tecnológica.
            </p>
          </BoxReveal>
        </div>
        <AnimatedBeamComponent />
      </div>
      <DotPattern
        className={cn(
          "absolute inset-0 [mask-image:radial-gradient(450px_circle_at_left,white,transparent)] z-0 md:opacity-100 opacity-50"
        )}
      />
    </section>
  );
}
