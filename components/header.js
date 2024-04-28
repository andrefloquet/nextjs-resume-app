import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="bg-gray-800">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-xl">
              <a href="#">Logo</a>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center space-x-8">
                <li>
                  <Link href="/" className="text-white">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/posts" className="text-white">
                    Posts
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:hidden">
              <button className="outline-none mobile-menu-button">
                <svg
                  className="w-6 h-6 text-white"
                  //   x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="mobile-menu  md:hidden">
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/"
                  className="block px-4 py-2 text-white bg-gray-900 rounded"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-white bg-gray-900 rounded"
                >
                  Posts
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
