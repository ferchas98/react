import YouTube from "./YoutubeLogo";

export default function NavBar() {
  return (
    <nav className="col-start-1 col-end-3 grid grid-cols-3">
      <div className="flex flex-row items-center gap-2 pl-4">
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
