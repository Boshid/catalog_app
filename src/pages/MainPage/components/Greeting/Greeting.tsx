import { useEffect, useState } from "react";
import { Button } from "../../../../components/Button/Button";
import s from "./Greeting.module.css";

export const Greeting = () => {
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(true);
  }, []);
  return (
    <div className={state ? s.root_visible : s.root_un_visible}>
      <h1 className={s.header}>Unix Proxy</h1>
      <span className={s.description}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque dicta
        est perferendis esse molestias necessitatibus officia maxime iste
        deleniti aspernatur voluptatem molestiae facilis accusamus iusto odio
        voluptate, ratione adipisci optio.
      </span>
      <Button>Каталог</Button>
    </div>
  );
};
