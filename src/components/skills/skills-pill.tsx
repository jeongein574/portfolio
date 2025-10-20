export type SkillPillProps = {
  name: string;
};

export default function SkillPill(props: SkillPillProps) {
  const { name } = props;
  return (
    <div className="flex w-max items-center gap-2 overflow-hidden rounded-lg border border-accent/20 bg-white px-4 py-3 text-sm shadow-sm dark:bg-zinc-800 sm:text-base md:px-6 md:py-3 md:text-lg">
      <span className="font-medium">{name}</span>
    </div>
  );
}
