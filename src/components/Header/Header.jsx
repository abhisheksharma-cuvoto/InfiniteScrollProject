import Link from "next/link";

function Header() {
  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/infinite-scroll", name: "Infinite Scroll" },
    { path: "/pagination", name: "Pagination" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <header className="w-full px-6 py-4 bg-zinc-900">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-3xl font-semibold text-white">
          Logo
        </Link>
        <ul className="flex items-center gap-6 mr-10">
          {navLinks.map((nav) => (
            <li
              key={nav.name}
              className="text-xl text-white hover:font-semibold hover:scale-105"
            >
              <Link href={nav.path}>
                {nav.name} {nav?.productCount && `(${nav.productCount})`}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
