export default function Rating({
  setSelectedRating,
  selectedRating,
}: {
  setSelectedRating: (val: number) => void;
  selectedRating: number | null;
}) {
  const renderStars = () => {
    const stars = [];
    for (let i = 5; i >= 1; i--) {
      const rowStars = [];

      for (let j = 1; j <= 5; j++) {
        const fill = j <= i ? 100 : 0;
        const id = Math.random().toString(36).substring(2, 9);

        rowStars.push(
          <svg
            key={id}
            viewBox="0 0 24 24"
            width="20"
            height="20"
            className="shrink-0"
          >
            <defs>
              <linearGradient id={`grad-${id}`}>
                <stop offset={`${fill}%`} stopColor="#facc15" />
                <stop offset={`${fill}%`} stopColor="#e5e7eb" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#grad-${id})`}
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        );
      }

      stars.push(
        <label
          key={i}
          className="flex items-center space-x-2 mb-2 cursor-pointer group"
        >
          <input
            type="radio"
            name="rating"
            className="hidden peer"
            value={i}
            onChange={() => setSelectedRating(i)}
            checked={selectedRating === i}
          />
          <div className="w-5 h-5 rounded border border-gray-400 peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center text-white text-xs">
            ✓
          </div>
          <div className="flex space-x-1">{rowStars}</div>
        </label>
      );
    }

    return stars;
  };
  return (
    <div className="w-full max-w-md">
      <h3 className="font-medium text-gray-800 mb-4 text-sm">Price Range</h3>
      <div>{renderStars()}</div>
    </div>
  );
}
