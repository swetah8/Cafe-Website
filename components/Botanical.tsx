type BotanicalProps = {
  className?: string;
  flip?: boolean;
};

export default function Botanical({ className = "", flip = false }: BotanicalProps) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      aria-hidden="true"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M60 190 C58 140 58 100 60 20"
        stroke="#8FC4A8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M60 160 C40 150 28 130 24 108"
        stroke="#8FC4A8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M60 130 C82 122 96 104 100 82"
        stroke="#8FC4A8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M60 95 C40 88 30 70 27 50"
        stroke="#8FC4A8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M60 60 C78 54 88 38 90 20"
        stroke="#8FC4A8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <ellipse cx="24" cy="108" rx="11" ry="5.5" fill="#8FC4A8" opacity="0.55" transform="rotate(-35 24 108)" />
      <ellipse cx="100" cy="82" rx="11" ry="5.5" fill="#8FC4A8" opacity="0.55" transform="rotate(30 100 82)" />
      <ellipse cx="27" cy="50" rx="10" ry="5" fill="#8FC4A8" opacity="0.55" transform="rotate(-30 27 50)" />
      <ellipse cx="90" cy="20" rx="10" ry="5" fill="#8FC4A8" opacity="0.55" transform="rotate(35 90 20)" />
      <ellipse cx="60" cy="18" rx="7" ry="12" fill="#8FC4A8" opacity="0.5" />
    </svg>
  );
}
