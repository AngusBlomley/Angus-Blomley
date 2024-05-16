export function setupMenuAnimations() {
    let menuVisible = false;

    const toggleMenu = () => {
        const menucontainer = document.getElementById('menucontainer');
        if (menucontainer) {
            if (menuVisible) {
                menucontainer.classList.add('translate-x-full');
            } else {
                menucontainer.classList.remove('translate-x-full');
            }
            menuVisible = !menuVisible;
        }
    };

    const toggleButton = document.getElementById('togglebutton');
    const menucontainer = document.getElementById('menucontainer');

    if (toggleButton) {
        toggleButton.addEventListener('click', toggleMenu);
    }

    if (menucontainer) {
        menucontainer.style.right = "-100%";
    }
    if (toggleButton) {
        toggleButton.classList.remove("active");
        toggleButton.innerHTML = "☰";
        toggleButton.style.color = "white";
    }

    const links = document.querySelectorAll('#menucontainer a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (menucontainer && menucontainer.style.right === "0px") {
                toggleMenu();
            }
        });
    });

    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(scrollLink => {
        scrollLink.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(scrollLink.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1,
    });

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    return () => {
        if (toggleButton) {
            toggleButton.removeEventListener('click', toggleMenu);
        }
        links.forEach(link => link.removeEventListener('click', toggleMenu));
        scrollLinks.forEach(scrollLink => scrollLink.removeEventListener('click', () => { }));
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

export const handleMouseMove = (e, velocities, positionsRef) => {
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

export const animate = (setPositions, velocities, positionsRef, requestRef) => {
    setPositions((prevPositions) => {
        const updatedPositions = prevPositions.map((pos, index) => {
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
        });

        positionsRef.current = updatedPositions;
        return updatedPositions;
    });

    requestRef.current = requestAnimationFrame(() => animate(setPositions, velocities, positionsRef, requestRef));
};
