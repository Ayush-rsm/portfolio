export const OrbitLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

      {/* Orbit 1 */}
      <div className="orbit orbit-slow absolute w-[1400px] h-[1400px] -top-[400px] -left-[300px]">
        <svg viewBox="0 0 1000 1000" className="w-full h-full">
          <circle
            cx="500"
            cy="500"
            r="450"
            stroke="#C6A86B"
            strokeOpacity="0.15"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* Orbit 2 */}
      <div className="orbit orbit-reverse absolute w-[1200px] h-[1200px] -bottom-[300px] -right-[200px]">
        <svg viewBox="0 0 1000 1000" className="w-full h-full">
          <circle
            cx="500"
            cy="500"
            r="380"
            stroke="#178582"
            strokeOpacity="0.12"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* Orbit 3 */}
      <div className="orbit orbit-very-slow absolute w-[1000px] h-[1000px] top-[100px] left-[200px]">
        <svg viewBox="0 0 1000 1000" className="w-full h-full">
          <circle
            cx="500"
            cy="500"
            r="320"
            stroke="#C6A86B"
            strokeOpacity="0.08"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

    </div>
  );
};