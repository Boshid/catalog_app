import cn from "classnames";
import s from "./Footer.module.css";

interface Props {
  className?: string;
}

export function Footer({ className }: Props) {
  return <footer className={cn(s.root, className)}></footer>;
}
