import React, { useState, useEffect, useCallback } from "react";

const AsteroidGame = () => {
  const [startGame, setStartGame] = useState(false);
  const [asteroids, setAsteroids] = useState([]);
  const [score, setScore] = useState(0);
  const [spaceshipPosition, setSpaceshipPosition] = useState(300); // Initial spaceship left position
  const [gameOver, setGameOver] = useState(false);

  const toggleGame = () => {
    setStartGame((prev) => !prev);
    if (!startGame) {
      setScore(0);
      setAsteroids([]);
      setGameOver(false);
    }
  };

  const generateAsteroid = useCallback(() => {
    const interval = setInterval(() => {
      if (!startGame || gameOver) {
        clearInterval(interval);
        return;
      }

      const randomSize = Math.random() < 0.5 ? "small" : "medium";
      const randomLeft = Math.floor(Math.random() * 581);

      const asteroid = {
        size: randomSize,
        top: -20,
        left: randomLeft,
        visible: true,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`, // Random bright color
      };

      setAsteroids((prevAsteroids) => [...prevAsteroids, asteroid]);
    }, 800);

    return interval;
  }, [startGame, gameOver]);

  const updateAsteroid = useCallback(() => {
    const interval = setInterval(() => {
      if (!startGame || gameOver) {
        clearInterval(interval);
        return;
      }

      setAsteroids((prevAsteroids) =>
        prevAsteroids.map((asteroid) => {
          if (asteroid.top < 395) {
            return { ...asteroid, top: asteroid.top + 6 };
          } else if (asteroid.visible) {
            setScore((prevScore) => prevScore + 1);
            return { ...asteroid, visible: false };
          }
          return asteroid;
        })
      );
    }, 45);

    return interval;
  }, [startGame, gameOver]);

  const handleKeyDown = useCallback((event) => {
    if (event.key === "ArrowLeft") {
      setSpaceshipPosition((prev) => Math.max(prev - 12, 5));
    } else if (event.key === "ArrowRight") {
      setSpaceshipPosition((prev) => Math.min(prev + 12, 555));
    }
  }, []);

  const checkCollision = useCallback(() => {
    for (const asteroid of asteroids) {
      if (asteroid.visible) {
        const asteroidRight = asteroid.left + (asteroid.size === "small" ? 12 : 24);
        const asteroidBottom = asteroid.top + (asteroid.size === "small" ? 12 : 24);
        const spaceshipLeft = spaceshipPosition;
        const spaceshipRight = spaceshipPosition + 20;
        const spaceshipTop = 360;
        const spaceshipBottom = spaceshipTop + 40;

        if (
          asteroid.top < spaceshipBottom &&
          asteroidBottom > spaceshipTop &&
          asteroid.left < spaceshipRight &&
          asteroidRight > spaceshipLeft
        ) {
          setGameOver(true);
          setStartGame(false);
          break;
        }
      }
    }
  }, [asteroids, spaceshipPosition]);

  useEffect(() => {
    let generateInterval;
    let updateInterval;

    if (startGame) {
      generateInterval = generateAsteroid();
      updateInterval = updateAsteroid();
    }

    return () => {
      clearInterval(generateInterval);
      clearInterval(updateInterval);
    };
  }, [startGame, generateAsteroid, updateAsteroid]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (startGame && !gameOver) {
      checkCollision();
    }
  }, [asteroids, checkCollision, startGame, gameOver]);

  return (
    <div className="game-area" style={{ textAlign: "center" }}>
      {gameOver ? (
        <div>
          <h2 style={{ color: "red", fontSize: "24px" }}>Game Over</h2>
          <button
            onClick={toggleGame}
            style={{
              padding: "10px 20px",
              fontSize: "18px",
              fontWeight: "bold",
              backgroundColor: "#ff4081",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              zIndex: 2, // Higher z-index for Play Again button
              position: "relative",
            }}
          >
            Play Again
          </button>
        </div>
      ) : (
        <button
          onClick={toggleGame}
          style={{
            display: `${startGame ? "none" : "block"}`,
            padding: "10px 20px",
            fontSize: "18px",
            fontWeight: "bold",
            backgroundColor: "#ff4081",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {startGame ? "Stop Game" : "Start Game"}
        </button>
      )}

      <div className="score" style={{ fontSize: "22px", marginTop: "10px" }}>Score: {score}</div>

      {/* Spaceship */}
      <div
        className="spaceship"
        style={{
          position: "absolute",
          top: 360,
          left: spaceshipPosition,
          width: "0",
          height: "0",
          borderLeft: "20px solid transparent",
          borderRight: "20px solid transparent",
          borderBottom: "40px solid #00f2ff", // Bright neon blue color
          transform: "translate(-50%, 0)",
          transition: "all 0.03s linear", // Faster transition for responsiveness
        }}
      ></div>

      {/* Asteroids */}
      {asteroids.map((asteroid, index) => (
        <div
          key={index}
          className="asteroid"
          style={{
            display: asteroid.visible ? "block" : "none",
            top: asteroid.top,
            height: asteroid.size === "small" ? "12px" : "24px",
            width: asteroid.size === "small" ? "12px" : "24px",
            left: asteroid.left,
            position: "absolute",
            transition: "top 0.05s linear",
            backgroundColor: asteroid.color,
            borderRadius: "50%",
          }}
        ></div>
      ))}
    </div>
  );
};

export default AsteroidGame;
