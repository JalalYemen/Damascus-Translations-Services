import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    setIsLangMenuOpen(false);
  };

  return (
    <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img
                src="/text.png"
                alt="Damascus Translation Services"
                className="h-8 w-auto max-w-[150px]"
              />
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                to="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  location.pathname === "/"
                    ? "border-white"
                    : "border-transparent hover:border-gray-300"
                } transition-colors duration-200`}
              >
                {t("navbar.home")}
              </Link>
              <Link
                to="/about"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  location.pathname === "/about"
                    ? "border-white"
                    : "border-transparent hover:border-gray-300"
                } transition-colors duration-200`}
              >
                {t("navbar.about")}
              </Link>
              <Link
                to="/services"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  location.pathname === "/services"
                    ? "border-white"
                    : "border-transparent hover:border-gray-300"
                } transition-colors duration-200`}
              >
                {t("navbar.services")}
              </Link>
              <Link
                to="/contact"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  location.pathname === "/contact"
                    ? "border-white"
                    : "border-transparent hover:border-gray-300"
                } transition-colors duration-200`}
              >
                {t("navbar.contact")}
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="bg-primary/80 hover:bg-primary px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 01-2-2h-3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 overflow-hidden">
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      i18n.language === "en"
                        ? "bg-amber-50 text-amber-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage("ar")}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      i18n.language === "ar"
                        ? "bg-amber-50 text-amber-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    العربية
                  </button>
                </div>
              )}
            </div>

            <div className="md:hidden ml-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-primary/80 focus:outline-none transition-colors duration-200"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-primary/90">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                location.pathname === "/"
                  ? "border-white bg-primary"
                  : "border-transparent hover:bg-primary/80 hover:border-gray-300"
              }`}
            >
              {t("navbar.home")}
            </Link>
            <Link
              to="/about"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                location.pathname === "/about"
                  ? "border-white bg-primary"
                  : "border-transparent hover:bg-primary/80 hover:border-gray-300"
              }`}
            >
              {t("navbar.about")}
            </Link>
            <Link
              to="/services"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                location.pathname === "/services"
                  ? "border-white bg-primary"
                  : "border-transparent hover:bg-primary/80 hover:border-gray-300"
              }`}
            >
              {t("navbar.services")}
            </Link>
            <Link
              to="/contact"
              className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                location.pathname === "/contact"
                  ? "border-white bg-primary"
                  : "border-transparent hover:bg-primary/80 hover:border-gray-300"
              }`}
            >
              {t("navbar.contact")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
