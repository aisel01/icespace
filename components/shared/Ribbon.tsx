import { bungee_outline } from '@/app/fonts';

export function Ribbon() {
    return (
        <div className={`${bungee_outline.className} fixed left-8 bottom-0 -rotate-90 text-body-medium text-red-600`}>
            {'Ice Space '.repeat(10)}
        </div>
    );
}
