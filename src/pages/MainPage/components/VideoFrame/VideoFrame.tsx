import s from "./VideoFrame.module.css";

export const VideoFrame = () => {
  return (
    <video className={s.root} autoPlay loop muted>
      <source
        src={`${process.env.PUBLIC_URL}/footage/ServersFootage.mp4`}
        type="video/mp4"
      />
    </video>
  );
};
