import { Container } from "@/components/ui";
import { SkillSection } from "@/components";
import { skills } from "@/data/skills";

export default function Home() {
  return (
    <main className="py-12">
      <Container>
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight mb-4">
            SkillHub Lite
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Willkommen bei SkillHub Lite – deinem einfachen Skill-Verzeichnis.
            Hier findest du eine Übersicht der wichtigsten technischen
            Fähigkeiten für moderne Webentwicklung.
          </p>
        </header>

        <SkillSection skills={skills} />
      </Container>
    </main>
  );
}
