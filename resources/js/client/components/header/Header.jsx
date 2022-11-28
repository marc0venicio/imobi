import React, { useEffect, useState } from "react";

import './header.scss'

import { Link, useNavigate } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";


function Header() {
  
  
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
        setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const ctaClickHandler = () => {
    menuToggleHandler();
    navigate("/page-cta");
  };

  return (
    <header className={'header'}>
        <div className={'header__content'}>
            <Link to="/" className={'header__content__logo'}>
                navbar
            </Link>
            <nav
                className={`${'header__content__nav'} ${
                    menuOpen && size.width < 768 ? 'isMenu' : ""
                }`}
            >
                <ul>
                    <li>
                        <Link to="/imoveis" onClick={menuToggleHandler}>
                            PageOne
                        </Link>
                    </li>
                    <li>
                        <Link to="/page-two" onClick={menuToggleHandler}>
                            PageTwo
                        </Link>
                    </li>
                    <li>
                        <Link to="/page-three" onClick={menuToggleHandler}>
                            PageThree
                        </Link>
                    </li>
                </ul>
                <button onClick={ctaClickHandler}>CTA Page</button>
            </nav>
            <div className={'header__content__toggle'}>
                {!menuOpen ? (
                    <BiMenuAltRight onClick={menuToggleHandler} />
                ) : (
                    <AiOutlineClose onClick={menuToggleHandler} />
                )}
            </div>
        </div>
    </header>
  );
}

export default Header