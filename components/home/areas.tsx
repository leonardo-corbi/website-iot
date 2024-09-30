import Link from "next/link";

import { GiWorld } from "react-icons/gi";
import { BiMath } from "react-icons/bi";
import { SlChemistry } from "react-icons/sl";

import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";

export function AreasDoSaber() {
  const servicos = [
    {
      id: 1,
      Icon: GiWorld,
      titulo: "Ciências Humanas",
      descricao: "Conheça as Ciências Humanas",
    },
    {
      id: 2,
      Icon: BiMath,
      titulo: "Matemática",
      descricao: "Conheça a Matemática",
    },
    {
      id: 3,
      Icon: SlChemistry,
      titulo: "Ciências da Natureza",
      descricao: "Conheça as Ciências da Natureza",
    },
  ];

  return (
    <section className="py-16 px-6" id="areas">
      <div className="container mx-auto max-w-5xl space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Áreas do Saber</h2>
          <p className="text-muted-foreground text-lg">
            Conheça as outras matérias estudadas e suas relações!
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {servicos.map((servico) => (
            <div
              key={servico.id}
              className="bg-card p-6 rounded-lg shadow-lg space-y-4"
            >
              <servico.Icon className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">{servico.titulo}</h3>
              <p className="text-muted-foreground">{servico.descricao}</p>
              <Link
                href="/areas"
                className="inline-flex items-center gap-2 text-primary hover:underline"
                prefetch={false}
              >
                Saiba Mais
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
