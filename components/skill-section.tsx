"use client";

import { useState } from "react";
import { Skill } from "@/types";
import { SearchBar } from "./search-bar";
import { SkillList } from "./skill-list";

interface SkillSectionProps {
  skills: Skill[];
}

export function SkillSection({ skills }: SkillSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSkills = skills.filter((skill) => {
    const term = searchTerm.toLowerCase();
    return (
      skill.name.toLowerCase().includes(term) ||
      skill.description.toLowerCase().includes(term)
    );
  });

  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Skills</h2>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Skills durchsuchen..."
      />
      <SkillList skills={filteredSkills} />
      {filteredSkills.length === 0 && (
        <p className="text-muted-foreground text-center py-8">
          Keine Skills gefunden.
        </p>
      )}
    </section>
  );
}
