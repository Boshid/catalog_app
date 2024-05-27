import { Link } from "react-router-dom";
import { texts } from "../../texts";
import s from "./Nav.module.css";
import { UnixProxyLogoHorizontal } from "../../icons/UnixProxyLogoHorizontal";

export const Nav = () => {
  return (
    <header className={s.root}>
      <ul className={s.list_links}>
        <li>
          <Link className={s.link} to={""}>
            <UnixProxyLogoHorizontal />
          </Link>
        </li>
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
