import { Footer } from "../Footer/Footer";
import { Nav } from "../Nav/Nav";

import s from "./Layout.module.css";

interface Props {
  children?: JSX.Element;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className={s.root}>
      <div className={s.container}>
        <Nav />
        {children}
      </div>
      <Footer className={s.footer} />
    </main>
  );
};
