// pages/AreasPage.tsx
import { Banner } from "@/components/areas/banner";
import { AreaCard } from "@/components/areas/card";

const AreasPage: React.FC = () => {
  const areas = [
    {
      nome: "Ciências Humanas",
      disciplinas: ["História", "Geografia", "Filosofia", "Sociologia"],
      tarefasFavoritas: [
        "Debates sobre história",
        "Análises geográficas",
        "Reflexões filosóficas",
      ],
    },
    {
      nome: "Ciências da Natureza",
      disciplinas: ["Física", "Química", "Biologia"],
      tarefasFavoritas: [
        "Experimentos de laboratório",
        "Estudos de ecossistemas",
        "Resolução de problemas físicos",
      ],
    },
    {
      nome: "Linguagens e Códigos",
      disciplinas: ["Português", "Inglês", "Artes", "Educação Física"],
      tarefasFavoritas: [
        "Leitura e interpretação de textos",
        "Aulas de artes práticas",
        "Atividades esportivas",
      ],
    },
    {
      nome: "Matemática",
      disciplinas: ["Matemática", "Estatística"],
      tarefasFavoritas: [
        "Resolução de problemas matemáticos",
        "Análise de dados estatísticos",
        "Análise de dados estatísticos",
      ],
    },
  ];

  return (
    <div>
      <Banner />
      <div className="flex flex-wrap justify-center gap-4 p-4 mt-4">
        {areas.map((area) => (
          <AreaCard
            key={area.nome}
            title={area.nome}
            disciplines={area.disciplinas}
            favoriteTasks={area.tarefasFavoritas}
          />
        ))}
      </div>
    </div>
  );
};

export default AreasPage;
