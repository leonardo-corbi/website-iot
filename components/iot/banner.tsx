import BoxReveal from "@/components/ui/box-reveal";
import DotPattern from "@/components/ui/dot-pattern";

import { cn } from "@/lib/utils";
import Image from "next/image";

export function Banner() {
  return (
    <section className="relative bg-primary py-14 px-6 text-primary-foreground overflow-hidden">
      <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-4">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h1 className="text-4xl font-bold">Sobre IoT</h1>
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="md:text-xl text-justify text-lg">
              O curso de Internet das Coisas (IoT) do SENAC é uma excelente
              oportunidade para quem deseja se aprofundar nas tecnologias que
              conectam dispositivos físicos à internet. Com a crescente demanda
              por soluções inteligentes em diversas áreas, como saúde, indústria
              e cidades, o curso oferece um conteúdo abrangente que inclui desde
              os conceitos básicos de IoT até a implementação de projetos
              práticos. Os alunos aprendem sobre sensores, comunicação de dados,
              segurança e análise de dados, preparando-os para atuar em um
              mercado em constante evolução. Ao final do curso, os participantes
              estarão aptos a desenvolver e gerenciar sistemas IoT, contribuindo
              para a transformação digital de empresas e organizações.
            </p>
          </BoxReveal>
        </div>
        <Image
          src="/carrinho-2.png"
          alt="Carrinho 2"
          width={300}
          height={400}
          className="rounded-xl"
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
