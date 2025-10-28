export default function VinylRecord({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`inline-block ${className}`} style={style}>
      <svg viewBox="0 0 100 100" className="w-full h-full animate-rotate" fill="currentColor">
        <circle cx="50" cy="50" r="45" fill="#1a1a1a" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="#333" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="35" fill="none" stroke="#333" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="#333" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="25" fill="none" stroke="#333" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="#333" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="12" fill="#8B4513" />
        <circle cx="50" cy="50" r="4" fill="#1a1a1a" />
      </svg>
    </div>
  );
}
