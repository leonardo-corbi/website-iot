"use client";

import Link from "next/link";
import Image from "next/image";

import BoxReveal from "@/components/ui/box-reveal";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";

export function AboutIot() {
  return (
    <section className="bg-muted py-16 px-6" id="aboutus">
      <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-8 items-center">
        <Image
          src="/carrinho.png"
          width="600"
          height="400"
          alt="About Iot"
          className="rounded-lg shadow-lg"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
        <div className="space-y-4">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h2 className="text-3xl font-bold">Sobre nosso curso</h2>
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-muted-foreground text-lg text-justify">
              O curso de Internet das Coisas (IoT) tem como objetivo ensinar os
              fundamentos e as aplicações dessa tecnologia emergente, que
              conecta dispositivos físicos à internet, permitindo a comunicação
              e troca de dados entre eles. Os alunos aprendem sobre sensores,
              redes, protocolos de comunicação, segurança, armazenamento de
              dados e automação. O curso aborda o desenvolvimento de projetos
              práticos, como a criação de dispositivos inteligentes e o uso de
              plataformas como Arduino e Raspberry Pi. Ao final, os
              participantes estarão aptos a criar soluções inovadoras para áreas
              como domótica, saúde, agricultura e indústria.
            </p>
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <Link
              href="/sobre-iot"
              className="inline-flex items-center gap-2 text-primary hover:underline"
              prefetch={false}
            >
              Saiba mais
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </BoxReveal>
        </div>
      </div>
    </section>
  );
}
