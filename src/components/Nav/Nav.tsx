import { Link } from "react-router-dom";
import { texts } from "../../texts";
import s from "./Nav.module.css";

export const Nav = () => {
  return (
    <header className={s.root}>
      <ul>
        {texts.Navigation.map((item, index) => (
          <li key={`${item}_${index}`}>
            <Link className={s.link} to={item.path}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
