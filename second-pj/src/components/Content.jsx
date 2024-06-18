import Categories from "./Categories";
import Video from "./Video";

export default function Content() {
  const videos = [
    {
      image:
        "https://cdn.forbes.com.mx/2020/04/b_image_2_front_track_jpg-scaled-e1608838108612.jpg",
      title: "F1 en aprietos y weros",
      chanel: "ferchas98",
    },
    {
      image:
        "https://media.gq.com.mx/photos/644ae2eccd18d7f1c032c6e5/16:9/w_2560%2Cc_limit/Koenigsegg_Jesko_Absolut%2520(1).jpg",
      title: "F1 en aprietos y prietos",
      chanel: "autos y mas",
    },
    {
      image:
        "https://www.lavozdelafrontera.com.mx/local/r3vgjp-auto-carro/ALTERNATES/LANDSCAPE_1140/Auto-carro",
      title: "F1 en aprietos grandes",
      chanel: "autos y mas",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPV0jP4bdnmH84fuFEgJ1_TpFt-V0BmD0ipg&s",
      title: "F1 en aprietos pequeños",
      chanel: "autos y mas",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPV0jP4bdnmH84fuFEgJ1_TpFt-V0BmD0ipg&s",
      title: "F1 en aprietos suaves",
      chanel: "autos y mas",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPV0jP4bdnmH84fuFEgJ1_TpFt-V0BmD0ipg&s",
      title: "F1 en aprietos esta",
      chanel: "",
    },
  ];

  return (
    <section id="content">
      <Categories></Categories>
      <section id="videos">
        {videos.map((video) => {
          return (
            <Video
              key={`video-${video.title}`}
              image={video.image}
              title={video.title}
              chanel={video.chanel}
            ></Video>
          );
        })}
      </section>
    </section>
  );
}
