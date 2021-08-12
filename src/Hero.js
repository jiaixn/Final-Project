import React from "react";
import "./Hero.css";

/* hero frame of title part of all pages, deliever childern to banner */
export default function Hero({ children, hero }) {
    return <header className={hero}>
      {children}
    </header>;
}

Hero.defaultProps = {
    hero: "defaultHero"
};
