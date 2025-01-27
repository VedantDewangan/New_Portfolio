import React, { useState, useEffect, useRef } from "react";
import "./404Page.css";
import AsteroidGame from "./AsteriodGame";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <p>Looks like you've ventured into deep space... 👽</p>
      <p>Try dodging some asteroids while you’re here!</p>
      <AsteroidGame />
      <p>
        Or <a href="/">warp back to the homepage</a> 🚀
      </p>
    </div>
  );
};

export default NotFoundPage;
