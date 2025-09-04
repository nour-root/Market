import type { Product } from "@/store/types";

const Star = ({ p }: { p: Product }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const diff = p.rating.rate - i + 1;

    let fill = 0;
    if (diff >= 1) fill = 100;
    else if (diff > 0) fill = Math.round(diff);
    else fill = 0;
    const id = Math.random().toString(36).substring(2, 9);
    stars.push(
      <svg
        key={i}
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
  return stars;
};

export default Star;
