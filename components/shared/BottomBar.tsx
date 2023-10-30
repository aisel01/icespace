import Link from 'next/link';

export function BottomBar() {
    return (
        <section className="flex flex-col items-center justify-center gap-2 py-6 text-subtle-medium">
            <Link
                href="https://github.com/aisel01"
            >
                Built & Designed by Aicel
            </Link>
            <div>2023</div>
        </section>
    );
}