import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import React, { type JSX } from 'react';

// Type definition for drag event info
type PanInfo = {
  offset: { x: number; y: number };
  delta: { x: number; y: number };
  velocity: { x: number; y: number };
  point: { x: number; y: number };
};

export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  icon?: React.ReactNode;
  image?: string;
  subtitle?: string;
  details?: string[];
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring' as const, stiffness: 300, damping: 30 };

interface CarouselItemProps {
  item: CarouselItem;
  index: number;
  itemWidth: number;
  round: boolean;
  trackItemOffset: number;
  x: any;
  transition: any;
}

function CarouselItemComponent({ item, index, itemWidth, round, trackItemOffset, x, transition }: CarouselItemProps) {
  const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
  const outputRange = [90, 0, -90];
  const rotateY = useTransform(x, range, outputRange, { clamp: false });

  return (
    <motion.div
      key={`${item?.id ?? index}-${index}`}
      className={`relative shrink-0 flex flex-col ${round
        ? 'items-center justify-center text-center bg-[#060010] border-0'
        : 'items-start justify-between bg-[#0a0a0a] border border-[#00A8B5]/30 rounded-[24px]'
        } overflow-hidden cursor-grab active:cursor-grabbing`}
      style={{
        width: itemWidth,
        height: round ? itemWidth : '600px',
        rotateY: rotateY,
        ...(round && { borderRadius: '50%' })
      }}
      transition={transition}
    >
      {!round && (
        <div className="grid lg:grid-cols-2 gap-10 h-full p-6 md:p-10">
          {/* Left - Content */}
          <div className="flex flex-col justify-center">
            {item.subtitle && (
              <div className="inline-block px-3 py-1 bg-[#00A8B5] rounded-full mb-4 w-fit">
                <span className="text-xs font-bold tracking-wider text-white">
                  {item.subtitle}
                </span>
              </div>
            )}

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4">
              {item.title}
            </h3>

            <p className="text-sm md:text-base text-white/80 mb-6 leading-relaxed">
              {item.description}
            </p>

            {item.details && (
              <div className="space-y-3">
                {item.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00A8B5] mt-2 flex-shrink-0"></div>
                    <p className="text-white/70 text-xs md:text-sm">{detail}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right - Image */}
          {item.image && (
            <div className="relative h-full rounded-2xl overflow-hidden hidden lg:block">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          )}
        </div>
      )}
      {round && (
        <>
          <div className={`${round ? 'p-0 m-0' : 'mb-4 p-5'}`}>
            <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#060010]">
              {item.icon}
            </span>
          </div>
          <div className="p-5">
            <div className="mb-1 font-black text-lg text-white">{item.title}</div>
            <p className="text-sm text-white">{item.description}</p>
          </div>
        </>
      )}
    </motion.div>
  );
}

export default function Carousel({
  items = [],
  baseWidth = 900,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false
}: CarouselProps): JSX.Element {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;
  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState<number>(loop ? 1 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isJumping, setIsJumping] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return undefined;
    if (pauseOnHover && isHovered) return undefined;

    const timer = setInterval(() => {
      setPosition(prev => Math.min(prev + 1, itemsForRender.length - 1));
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  useEffect(() => {
    const startingPosition = loop ? 1 : 0;
    setPosition(startingPosition);
    x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  useEffect(() => {
    if (!loop && position > itemsForRender.length - 1) {
      setPosition(Math.max(0, itemsForRender.length - 1));
    }
  }, [itemsForRender.length, loop, position]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }
    const lastCloneIndex = itemsForRender.length - 1;

    if (position === lastCloneIndex) {
      setIsJumping(true);
      const target = 1;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    if (position === 0) {
      setIsJumping(true);
      const target = items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    setIsAnimating(false);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;

    setPosition(prev => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  const dragProps = loop
    ? {}
    : {
      dragConstraints: {
        left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
        right: 0
      }
    };

  const activeIndex =
    items.length === 0 ? 0 : loop ? (position - 1 + items.length) % items.length : Math.min(position, items.length - 1);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4 ${round ? 'rounded-full border border-white' : 'rounded-[24px] border border-[#00A8B5]/20'
        }`}
      style={{
        width: `${Math.min(baseWidth, typeof window !== 'undefined' ? window.innerWidth - 20 : baseWidth)}px`,
        maxWidth: '100%',
        ...(round && { height: `${baseWidth}px` })
      }}
    >
      <motion.div
        className="flex"
        drag={isAnimating ? false : 'x'}
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(position * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
      >
        {itemsForRender.map((item, index) => (
          <CarouselItemComponent
            key={`${item?.id ?? index}-${index}`}
            item={item}
            index={index}
            itemWidth={itemWidth}
            round={round}
            trackItemOffset={trackItemOffset}
            x={x}
            transition={effectiveTransition}
          />
        ))}
      </motion.div>
      <div className={`flex w-full justify-center ${round ? 'absolute z-20 bottom-12 left-1/2 -translate-x-1/2' : ''}`}>
        <div className="mt-4 flex gap-3 justify-center">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${activeIndex === index
                ? 'bg-[#00A8B5]'
                : 'bg-[#555]'
                }`}
              animate={{
                scale: activeIndex === index ? 1.2 : 1
              }}
              onClick={() => setPosition(loop ? index + 1 : index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
