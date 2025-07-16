import React, { useEffect, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

const CursorTrail = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      setTrail(prevTrail => {
        const newPoint = { x: e.clientX, y: e.clientY, id: trailId++ };
        const newTrail = [newPoint, ...prevTrail.slice(0, 19)];
        return newTrail;
      });
    };

    const animateTrail = () => {
      setTrail(prevTrail => 
        prevTrail.map((point, index) => ({
          ...point,
          x: point.x + (Math.random() - 0.5) * 0.5,
          y: point.y + (Math.random() - 0.5) * 0.5,
        })).filter((_, index) => index < 15)
      );
      animationFrameId = requestAnimationFrame(animateTrail);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(animateTrail);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor */}
      <div
        className="fixed w-4 h-4 bg-cyan-400 rounded-full mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'scale(1)',
        }}
      />
      
      {/* Trail points */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed w-2 h-2 bg-cyan-400 rounded-full"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            opacity: (1 - index / trail.length) * 0.6,
            transform: `scale(${1 - index / trail.length})`,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
            mixBlendMode: 'difference',
          }}
        />
      ))}
      
      {/* Connecting lines */}
      <svg className="fixed inset-0 w-full h-full">
        {trail.slice(0, -1).map((point, index) => {
          const nextPoint = trail[index + 1];
          if (!nextPoint) return null;
          
          return (
            <line
              key={`line-${point.id}`}
              x1={point.x}
              y1={point.y}
              x2={nextPoint.x}
              y2={nextPoint.y}
              stroke="rgba(34, 211, 238, 0.3)"
              strokeWidth={2 * (1 - index / trail.length)}
              style={{
                opacity: (1 - index / trail.length) * 0.4,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default CursorTrail;