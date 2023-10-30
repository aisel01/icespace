import { About } from '@/components/shared/About';
import { BottomBar } from '@/components/shared/BottomBar';
import { Cover } from '@/components/shared/Cover';
import { Mail } from '@/components/shared/Mail';
import { Social } from '@/components/shared/Social';

async function Page() {
    return (
        <>
            <Cover />
            <About />
            <Social />
            <Mail />
            <BottomBar />
        </>

    );
}

export default Page;
