export function setupMenuAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  const elementsToObserve = document.querySelectorAll(
    ".fade-in, .translate-in"
  );
  elementsToObserve.forEach((el) => {
    observer.observe(el);
  });

  return () => {
    elementsToObserve.forEach((el) => {
      observer.unobserve(el);
    });
  };
}

export const generateRandomPosition = () => {
  const x = Math.random() * (window.innerWidth - 64); // Subtract icon width
  const y = Math.random() * (window.innerHeight - 64); // Subtract icon height
  return { x, y };
};

export const generateRandomVelocity = () => {
  const speed = 0.025; // Adjust speed as necessary
  const angle = Math.random() * 2 * Math.PI;
  const vx = Math.cos(angle) * speed;
  const vy = Math.sin(angle) * speed;
  return { vx, vy };
};

export const handleMouseMove = (
  e: MouseEvent,
  velocities: React.MutableRefObject<{ vx: number; vy: number }[]>,
  positionsRef: React.MutableRefObject<{ x: number; y: number }[]>
) => {
  const { clientX, clientY } = e;

  velocities.current = velocities.current.map((vel, index) => {
    if (!positionsRef.current[index]) return vel;
    const dx = positionsRef.current[index].x + 32 - clientX;
    const dy = positionsRef.current[index].y + 32 - clientY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 50) {
      const angle = Math.atan2(dy, dx);
      const speed = 1;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;

      return { vx, vy };
    }
    return vel;
  });
};

export const animate = (
  setPositions: React.Dispatch<
    React.SetStateAction<{ x: number; y: number }[]>
  >,
  velocities: React.MutableRefObject<{ vx: number; vy: number }[]>,
  positionsRef: React.MutableRefObject<{ x: number; y: number }[]>,
  requestRef: React.MutableRefObject<number>
) => {
  setPositions((prevPositions: { x: number; y: number }[]) => {
    const updatedPositions = prevPositions.map(
      (pos: { x: number; y: number }, index: number) => {
        const newX = pos.x + velocities.current[index].vx;
        const newY = pos.y + velocities.current[index].vy;

        if (newX < 0 || newX > window.innerWidth - 64) {
          velocities.current[index].vx *= -1;
        }
        if (newY < 0 || newY > window.innerHeight - 64) {
          velocities.current[index].vy *= -1;
        }

        return {
          x: Math.max(0, Math.min(window.innerWidth - 64, newX)),
          y: Math.max(0, Math.min(window.innerHeight - 64, newY)),
        };
      }
    );

    positionsRef.current = updatedPositions;
    return updatedPositions;
  });

  requestRef.current = requestAnimationFrame(() =>
    animate(setPositions, velocities, positionsRef, requestRef)
  );
};
