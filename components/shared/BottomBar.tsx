import Link from 'next/link';

export function BottomBar() {
    return (
        <section className="mt-10 flex flex-col items-center justify-center gap-2 py-6 text-subtle-medium lg:mt-20">
            <Link
                href="https://github.com/aisel01/icespace"
            >
                Built & Designed by Aicel
            </Link>
            <div>2023</div>
        </section>
    );
}