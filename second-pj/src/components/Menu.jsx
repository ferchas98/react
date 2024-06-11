export default function Menu() {
  const menuItems = [
    { icon: "🏠", text: "Home" },
    { icon: "🩳", text: "Shorts" },
    { icon: "🙆", text: "Subscriptions" },
  ];

  return (
    <aside id="menu">
      {/* <div className="menu-item">
        <span>🏠</span>Home
      </div> */}
      {menuItems.map((item) => {
        return (
          <div key={`menu-item-${item.text}`} className="menu-item">
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        );
      })}
    </aside>
  );
}
