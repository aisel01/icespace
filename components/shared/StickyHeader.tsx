'use client';

import { PropsWithChildren, useRef } from 'react';

import {
    motion,
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

    return (
        <div className="h-[180px] max-md:h-[160px]">
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
