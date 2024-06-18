import clsx from "clsx";

export default function Video(props) {
  // if (!props.channel) {
  //   return (
  //     <article>
  //       <p>incompleto</p>
  //     </article>
  //   );
  // }

  // const articleClassNames =
  //   "video-card" + (props.chanel === "ferchas98" ? " special" : "");

  return (
    <article
      className={clsx("video-card", { special: props.chanel === "ferchas98" })}
    >
      <img src={props.image} alt=""></img>
      <footer>
        {/* {props.chanel && (
          <img
            src={`https://api.dicebear.com/8.x/lorelei/svg?seed=Bob`}
            alt=""
          ></img>
        )}
        {!props.chanel && <span>🤷🏿</span>} */}

        {props.chanel ? (
          <img
            src={`https://api.dicebear.com/8.x/lorelei/svg?seed=Bob`}
            alt=""
          ></img>
        ) : (
          <span>🤷🏿</span>
        )}

        <p className="title-card">{props.title}</p>
        <p className="chanel-card">{props.chanel || "undefined"}</p>
      </footer>
    </article>
  );
}
