// eslint-disable-next-line react/prop-types
function NavBar({ active, onNavigate }) {
  return (
    <div className="nav-btn-container">
      {[
        "Home",
        "Recipes",
        "Gallery",
        "Kitchen Tools",
        "About Me",
        "Contact",
      ].map((page) => (
        <button
          key={page}
          className={`nav-bar-buttons ${active === page ? "active" : ""}`}
          onClick={() => onNavigate(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
export default NavBar;
