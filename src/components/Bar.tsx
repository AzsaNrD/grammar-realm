interface BarProps {
  label: string;
  value: number;
  max: number;
  colorClass: string;
}

/** Bar HP/EXP bergaya parchment | dipakai di StatusPanel dan BattleScreen. */
export default function Bar({ label, value, max, colorClass }: BarProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className="w-full">
      <div className="flex justify-between text-[11px] font-bold uppercase tracking-wide text-ink/80">
        <span>{label}</span>
        <span>
          {value}/{max}
        </span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-sm border-2 border-ink/70 bg-parchment-deep/60">
        <div
          className={`h-full transition-all duration-500 ${colorClass}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
