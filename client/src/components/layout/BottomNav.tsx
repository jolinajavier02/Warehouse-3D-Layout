const navItems = ['Map', 'Docks', 'Racks', 'Analytics'];

export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Warehouse sections">
      {navItems.map((item) => (
        <button className={item === 'Map' ? 'active' : ''} key={item} type="button">
          {item}
        </button>
      ))}
    </nav>
  );
}
