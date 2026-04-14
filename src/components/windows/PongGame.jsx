import React, { useEffect, useRef, useState } from 'react';

const PADDLE_WIDTH = 8;
const PADDLE_HEIGHT = 64;
const BALL_SIZE = 10;
const SPEED = 4;

const PongGame = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const [score, setScore] = useState({ left: 0, right: 0 });
  const keys = useRef({});
  const [canvasSize, setCanvasSize] = useState({ width: 540, height: 330 });

  const resetBall = (ball, width, height) => {
    ball.x = width / 2;
    ball.y = height / 2;
    ball.vx = Math.random() > 0.5 ? SPEED : -SPEED;
    ball.vy = (Math.random() * 2 - 1) * SPEED;
  };

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === containerRef.current) {
          setCanvasSize({
            width: entry.contentRect.width,
            height: entry.contentRect.height - 30 // account for controls text
          });
        }
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const leftPaddle = { x: 20, y: canvas.height / 2 - PADDLE_HEIGHT / 2 };
    const rightPaddle = { x: canvas.width - 20 - PADDLE_WIDTH, y: canvas.height / 2 - PADDLE_HEIGHT / 2 };
    const ball = { x: canvas.width / 2, y: canvas.height / 2, vx: SPEED, vy: SPEED };

    const draw = () => {
      ctx.fillStyle = '#c0c0c0';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // middle line
      ctx.strokeStyle = '#000';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.stroke();
      ctx.setLineDash([]);

      // paddles
      ctx.fillStyle = '#000';
      ctx.fillRect(leftPaddle.x, leftPaddle.y, PADDLE_WIDTH, PADDLE_HEIGHT);
      ctx.fillRect(rightPaddle.x, rightPaddle.y, PADDLE_WIDTH, PADDLE_HEIGHT);

      // ball
      ctx.fillRect(ball.x, ball.y, BALL_SIZE, BALL_SIZE);

      // scores
      ctx.fillStyle = '#000';
      ctx.font = 'bold 16px MS Sans Serif, sans-serif';
      ctx.fillText(score.left, canvas.width / 2 - 30, 30);
      ctx.fillText(score.right, canvas.width / 2 + 20, 30);
    };

    const update = () => {
      // Move paddles
      if (keys.current.ArrowUp) rightPaddle.y -= 5;
      if (keys.current.ArrowDown) rightPaddle.y += 5;
      if (keys.current.w || keys.current.W) leftPaddle.y -= 5;
      if (keys.current.s || keys.current.S) leftPaddle.y += 5;

      // clamp paddles
      leftPaddle.y = Math.max(0, Math.min(canvas.height - PADDLE_HEIGHT, leftPaddle.y));
      rightPaddle.y = Math.max(0, Math.min(canvas.height - PADDLE_HEIGHT, rightPaddle.y));

      // Move ball
      ball.x += ball.vx;
      ball.y += ball.vy;

      // Bounce off top/bottom
      if (ball.y <= 0 || ball.y + BALL_SIZE >= canvas.height) {
        ball.vy = -ball.vy;
        ball.y = Math.max(0, Math.min(canvas.height - BALL_SIZE, ball.y));
      }

      // Paddle collision
      const collidesWithPaddle = (paddle) => {
        return (
          ball.x < paddle.x + PADDLE_WIDTH &&
          ball.x + BALL_SIZE > paddle.x &&
          ball.y < paddle.y + PADDLE_HEIGHT &&
          ball.y + BALL_SIZE > paddle.y
        );
      };

      if (collidesWithPaddle(leftPaddle) && ball.vx < 0) {
        ball.vx *= -1.05;
        ball.x = leftPaddle.x + PADDLE_WIDTH;
      }
      if (collidesWithPaddle(rightPaddle) && ball.vx > 0) {
        ball.vx *= -1.05;
        ball.x = rightPaddle.x - BALL_SIZE;
      }

      // Score
      if (ball.x <= 0) {
        setScore((prev) => ({ ...prev, right: prev.right + 1 }));
        resetBall(ball, canvas.width, canvas.height);
      }
      if (ball.x + BALL_SIZE >= canvas.width) {
        setScore((prev) => ({ ...prev, left: prev.left + 1 }));
        resetBall(ball, canvas.width, canvas.height);
      }

      draw();
      requestRef.current = requestAnimationFrame(update);
    };

    const handleKeyDown = (event) => {
      keys.current[event.key] = true;
    };

    const handleKeyUp = (event) => {
      keys.current[event.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    resetBall(ball, canvas.width, canvas.height);
    requestRef.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [canvasSize, score.left, score.right]);

  return (
    <div className="pong-container" ref={containerRef} style={{ padding: 12, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
      <canvas ref={canvasRef} width={canvasSize.width} height={canvasSize.height} style={{ display: 'block', background: '#c0c0c0', border: '2px inset #000', flex: 1 }} />
      <div style={{ marginTop: 8, fontSize: 11, flexShrink: 0 }}>
        Controls: <strong>W/S</strong> = left, <strong>↑/↓</strong> = right
      </div>
    </div>
  );
};

export default PongGame;
