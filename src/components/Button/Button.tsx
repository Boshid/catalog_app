import s from "./Button.module.css";

interface Props {
  children?: string;
}

export const Button: React.FC<Props> = ({ children }) => {
  return <button className={s.root}>{children}</button>;
};
