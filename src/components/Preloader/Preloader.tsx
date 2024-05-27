import cn from "classnames";

import s from "./Preloader.module.css";

interface Props {
  className?: string;
}

export const Preloader: React.FC<Props> = ({ className }) => {
  return (
    <svg version="1.0" viewBox="0 0 128 128" className={cn(s.root, className)}>
      <rect x="0" y="0" width="100%" height="100%" fill="none" />
      <g>
        <circle cx="16" cy="64" r="16" fill="#9146ff" />
        <circle
          cx="16"
          cy="64"
          r="16"
          fill="#b684ff"
          transform="rotate(45,64,64)"
        />
        <circle
          cx="16"
          cy="64"
          r="16"
          fill="#d1b1ff"
          transform="rotate(90,64,64)"
        />
        <circle
          cx="16"
          cy="64"
          r="16"
          fill="#e9daff"
          transform="rotate(135,64,64)"
        />
        <circle
          cx="16"
          cy="64"
          r="16"
          fill="#f2e9ff"
          transform="rotate(180,64,64)"
        />
        <circle
          cx="16"
          cy="64"
          r="16"
          fill="#f2e9ff"
          transform="rotate(225,64,64)"
        />
        <circle
          cx="16"
          cy="64"
          r="16"
          fill="#f2e9ff"
          transform="rotate(270,64,64)"
        />
        <circle
          cx="16"
          cy="64"
          r="16"
          fill="#f2e9ff"
          transform="rotate(315,64,64)"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64"
          calcMode="discrete"
          dur="720ms"
          repeatCount="indefinite"
        ></animateTransform>
      </g>
    </svg>
  );
};
