// components/Card.tsx
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AreaCardProps {
  title: string;
  disciplines: string[];
  favoriteTasks: string[];
}

export function AreaCard({ title, disciplines, favoriteTasks }: AreaCardProps) {
  return (
    <Card className={cn("flex flex-col h-[350px] w-full max-w-[380px]")}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Disciplinas e Tarefas Favoritas</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-1">
        <div className="flex-grow">
          <h4>Disciplinas:</h4>
          <ul className="list-disc pl-5">
            {disciplines.map((discipline, index) => (
              <li key={index} className="text-sm text-muted-foreground">
                {discipline}
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-4" />
        <div>
          <h4>Tarefas Favoritas:</h4>
          <ul className="list-disc pl-5">
            {favoriteTasks.map((task, index) => (
              <li key={index} className="text-sm text-muted-foreground">
                {task}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
