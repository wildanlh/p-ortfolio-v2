export interface SkillData {
  image: string;
  name: string;
  link: string;
  color?: string;
}

export interface SkillsProps {
  value: SkillData[];
}
