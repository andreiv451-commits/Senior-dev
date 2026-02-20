import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui";
import { Skill } from "@/types";

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{skill.name}</CardTitle>
        <CardDescription>{skill.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
