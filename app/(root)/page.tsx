import { About } from '@/components/screens/About';
import { Cover } from '@/components/screens/Cover';
import { Projects } from '@/components/screens/Projects';
import { BottomBar } from '@/components/shared/BottomBar';
import { Mail } from '@/components/shared/Mail';
import { Social } from '@/components/shared/Social';

async function Page() {
    return (
        <>
            <Cover />
            <About />
            <Projects />
            <Social />
            <Mail />
            <BottomBar />
        </>

    );
}

export default Page;
