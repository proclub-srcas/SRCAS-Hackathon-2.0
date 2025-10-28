import { useRef, useState, useEffect } from 'react';
import Matter from 'matter-js';

interface FallingTextProps {
  text?: string;
  highlightWords?: string[];
  trigger?: 'auto' | 'scroll' | 'click' | 'hover';
  backgroundColor?: string;
  wireframes?: boolean;
  gravity?: number;
  mouseConstraintStiffness?: number;
  fontSize?: string;
}

const FallingText: React.FC<FallingTextProps> = ({
  text = '',
  highlightWords = [],
  trigger = 'auto',
  backgroundColor = 'transparent',
  wireframes = false,
  gravity = 1,
  mouseConstraintStiffness = 0.2,
  fontSize = '1rem'
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);

  const [effectStarted, setEffectStarted] = useState(false);

  useEffect(() => {
    if (!textRef.current) return;
    const words = text.split(' ');

    const newHTML = words
      .map(word => {
        const isHighlighted = highlightWords.some(hw => word.startsWith(hw));
        return `<span
          class="inline-block mx-[3px]  select-none text-white font-normal  drop-shadow-lg ${isHighlighted ? 'text-cyan-300 font-normal drop-shadow-2xl' : ''}"
        >
          ${word}
        </span>`;
      })
      .join(' ');

    textRef.current.innerHTML = newHTML;
  }, [text, highlightWords]);

  useEffect(() => {
    if (trigger === 'auto') {
      setEffectStarted(true);
      return;
    }
    if (trigger === 'scroll' && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            console.log('Section is visible, starting animation...');
            setEffectStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [trigger]);

  useEffect(() => {
    if (!effectStarted) return;

    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;

      if (!containerRef.current || !canvasContainerRef.current || !textRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const width = containerRect.width;
      const height = containerRect.height;

      if (width <= 0 || height <= 0) return;

      console.log('Starting falling text animation...', { width, height });

      const engine = Engine.create();
      engine.world.gravity.y = gravity;

      const render = Render.create({
        element: canvasContainerRef.current,
        engine,
        options: {
          width,
          height,
          background: backgroundColor,
          wireframes
        }
      });

      const boundaryOptions = {
        isStatic: true,
        render: { fillStyle: 'transparent' }
      };
      const floor = Bodies.rectangle(width / 2, height + 25, width, 50, boundaryOptions);
      const leftWall = Bodies.rectangle(-25, height / 2, 50, height, boundaryOptions);
      const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, boundaryOptions);
      const ceiling = Bodies.rectangle(width / 2, -25, width, 50, boundaryOptions);

      const wordSpans = textRef.current.querySelectorAll('span');
      console.log('Found word spans:', wordSpans.length);
      
      const wordBodies = [...wordSpans].map((elem, index) => {
        const rect = elem.getBoundingClientRect();

        const x = rect.left - containerRect.left + rect.width / 2;
        const y = rect.top - containerRect.top + rect.height / 2;

        const body = Bodies.rectangle(x, y, Math.max(rect.width, 20), Math.max(rect.height, 20), {
          render: { fillStyle: 'transparent' },
          restitution: 0.6,
          frictionAir: 0.01,
          friction: 0.1
        });
        
        // Add initial downward velocity to make words fall
        Matter.Body.setVelocity(body, {
          x: (Math.random() - 0.5) * 3,
          y: Math.random() * 3 + 2
        });
        Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.1);

        return { elem, body };
      });

      wordBodies.forEach(({ elem, body }, index) => {
        elem.style.position = 'absolute';
        elem.style.left = `${body.position.x}px`;
        elem.style.top = `${body.position.y}px`;
        elem.style.transform = 'translate(-50%, -50%)';
        elem.style.zIndex = '10';
      });

      // Disable mouse interaction to prevent scrolling interference
      // const mouse = Mouse.create(containerRef.current);
      // const mouseConstraint = MouseConstraint.create(engine, {
      //   mouse,
      //   constraint: {
      //     stiffness: 0.1,
      //     render: { visible: false }
      //   }
      // });
      // render.mouse = mouse;

      World.add(engine.world, [floor, leftWall, rightWall, ceiling, ...wordBodies.map(wb => wb.body)]);

      const runner = Runner.create();
      Runner.run(runner, engine);
      Render.run(render);

      const updateLoop = () => {
        wordBodies.forEach(({ body, elem }) => {
          const { x, y } = body.position;
          elem.style.left = `${x}px`;
          elem.style.top = `${y}px`;
          elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
        });
        Matter.Engine.update(engine);
        requestAnimationFrame(updateLoop);
      };
      updateLoop();

      return () => {
        Render.stop(render);
        Runner.stop(runner);
        if (render.canvas && canvasContainerRef.current) {
          canvasContainerRef.current.removeChild(render.canvas);
        }
        World.clear(engine.world, false);
        Engine.clear(engine);
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [effectStarted, gravity, wireframes, backgroundColor, mouseConstraintStiffness]);

  const handleTrigger = () => {
    if (!effectStarted && (trigger === 'click' || trigger === 'hover')) {
      setEffectStarted(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative z-[1] w-full h-full text-center pt-8"
      onClick={trigger === 'click' ? handleTrigger : undefined}
      onMouseEnter={trigger === 'hover' ? handleTrigger : undefined}
      style={{ minHeight: '500px', paddingBottom: '100px', pointerEvents: 'none' }}
    >
      <div
        ref={textRef}
        className="inline-block text-white"
        style={{
          fontSize,
          lineHeight: 1.4,
          pointerEvents: 'auto'
        }}
      />

      <div className="absolute top-0 left-0 z-0 w-full h-full" ref={canvasContainerRef} />
    </div>
  );
};

export default FallingText;
