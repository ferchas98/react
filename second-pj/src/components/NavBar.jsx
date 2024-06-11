import YouTube from "./YoutubeLogo";

export default function NavBar() {
  return (
    <nav id="navL">
      <div id="logo">
        <YouTube height="2rem" width="3rem"></YouTube>
        <span>Youtube</span>
      </div>
      <div id="searchC">
        <input type="text" placeholder="Search"></input>
      </div>
      <div id="user">
        <img
          src="https://api.dicebear.com/8.x/lorelei/svg?seed=Bob"
          alt="avatar"
        />
      </div>
    </nav>
  );
}
