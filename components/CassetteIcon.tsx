export default function CassetteIcon({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`inline-block ${className}`} style={style}>
      <svg viewBox="0 0 100 70" className="w-full h-full" fill="currentColor">
        <rect x="5" y="10" width="90" height="50" rx="3" fill="#8B4513" />
        <rect x="10" y="15" width="80" height="40" rx="2" fill="#F5E6D3" />
        <circle cx="30" cy="35" r="12" fill="#8B4513" />
        <circle cx="70" cy="35" r="12" fill="#8B4513" />
        <circle cx="30" cy="35" r="6" fill="#5C2E1F" />
        <circle cx="70" cy="35" r="6" fill="#5C2E1F" />
        <rect x="35" y="30" width="30" height="10" fill="#5C2E1F" opacity="0.3" />
        <rect x="20" y="50" width="20" height="3" rx="1" fill="#8B4513" />
        <rect x="60" y="50" width="20" height="3" rx="1" fill="#8B4513" />
      </svg>
    </div>
  );
}
