import { ReactNode } from 'react';

type OverlayScrollProps = {
    pages: ReactNode[];
}

export function OverlayScroll(props: OverlayScrollProps) {
    const { pages } = props;

    return (
        <div>
            {pages}
        </div>
    );
}