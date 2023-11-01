'use client';

import { useRef } from 'react';
import {
    motion,
    useScroll,
    useTransform,
} from 'framer-motion';
import { cn } from '@/lib/utils';

export function ScrollTooltip() {
    const target = useRef(null);

    const { scrollY } = useScroll({
        target,
    });

    const opacity = useTransform(
        scrollY,
        // Map scrollY from these values:
        [0, 50],
        // Into these values:
        [1, 0]
    );

    return (
        <motion.div style={{ opacity }}>
            <div
                className={cn(
                    // eslint-disable-next-line quotes
                    `h-[50px] w-px bg-black text-label after:ml-4 after:whitespace-nowrap after:content-['Scroll_for_more']`,
                )}
            />
        </motion.div>
    );
}