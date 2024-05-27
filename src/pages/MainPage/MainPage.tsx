import s from "./MainPage.module.css";
import { Greeting } from "./components/Greeting/Greeting";

import { VideoFrame } from "./components/VideoFrame/VideoFrame";

export const MainPage = () => {
  return (
    <div className={s.root}>
      <VideoFrame />
      <Greeting />
    </div>
  );
};
