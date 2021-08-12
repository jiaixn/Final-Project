import React from "react";
import "./Banner.css";

export default function Banner({ children, title, subtitle }) {
  return (
    /* banner is center area of title part, includes page name, info if theres any, and buttons in children area */
    <div className="banner">
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
