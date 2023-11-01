'use client';

import { PropsWithChildren, useRef } from 'react';

import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from 'framer-motion';

export function StickyHeader({ children }: PropsWithChildren) {
    const target = useRef(null);

    const { scrollYProgress } = useScroll({
        target,
        offset: ['start start', 'end start']
    });

    const opacity = useTransform(
        scrollYProgress,
        // Map scrollY from these values:
        [0, 0.6],
        // Into these values:
        [1, 0]
    );

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        console.log('Page scrollYProgress: ', latest);
    });

    return (
        <div className="h-[200px]">
            <motion.h1
                ref={target}
                style={{ opacity }}
                className="heading sticky top-0"
            >
                {children}
            </motion.h1>
        </div>
    );
}
