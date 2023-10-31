import { About } from '@/components/screens/About';
import { Cover } from '@/components/screens/Cover';
import { Products } from '@/components/screens/Products';
import { BottomBar } from '@/components/shared/BottomBar';
import { Mail } from '@/components/shared/Mail';
import { Social } from '@/components/shared/Social';

async function Page() {
    return (
        <>
            <Cover />
            <About />
            <Products />
            <Social />
            <Mail />
            <BottomBar />
        </>

    );
}

export default Page;
