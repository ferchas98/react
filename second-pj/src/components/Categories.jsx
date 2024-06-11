export default function Categories() {
  const categories = [
    "All",
    "Music",
    "Gamming",
    "Code",
    "Js",
    "React",
    "Fercha",
  ];

  return (
    <div id="categoriesL">
      {categories.map((category) => {
        return (
          <span key={`category-${category}`} className="category">
            {category}
          </span>
        );
      })}
    </div>
  );
}
