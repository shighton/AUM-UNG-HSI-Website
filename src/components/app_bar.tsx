import React from "react";
import { Link } from "react-router-dom";
import FeatherIcons from "feather-icons-react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Links = [
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/links",
    text: "Links",
  },
  {
    path: "/instruments",
    text: "Instruments",
  },
  {
    path: "/collaborators",
    text: "Collaborators",
  },
  {
    path: "/contact",
    text: "Contact",
  },
  {
    path: "/timeline",
    text: "Timeline",
  },
];

export default function AppBar() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  function openMenu() {
    setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="AppBar w-full flex bg-white py-8 px-8">
      <div className="flex-1">
        <Link to="/" className="font-semibold text-lg">
          AUM-UNG HSI Research
        </Link>
      </div>
      <div className="hidden lg:flex flex-1 justify-end">
        {Links.map((link, index) => (
          <Link key={index} className="mx-3" to={link.path}>
            {link.text}
          </Link>
        ))}
      </div>
      <div className="w-auto lg:hidden">
        <div onClick={openMenu} className="cursor-pointer">
          <FeatherIcons icon="menu" className="text-gray-600" />
        </div>
        <Modal
          isOpen={isMenuOpen}
          onRequestClose={closeMenu}
          contentLabel="Menu"
          shouldCloseOnEsc
          shouldCloseOnOverlayClick
          className="menu"
          overlayClassName="overlay"
        >
          <div className="flex flex-col items-center">
            {Links.map((link, index) => (
              <Link
                key={index}
                className="p-5 font-bold text-lg"
                to={link.path}
                onClick={closeMenu}
              >
                {link.text}
              </Link>
            ))}
          </div>
          <div
            onClick={closeMenu}
            className="cursor-pointer py-10 text-center w-full flex items-center justify-center"
          >
            <FeatherIcons icon="x" className="text-center" />
          </div>
        </Modal>
      </div>
    </div>
  );
}
