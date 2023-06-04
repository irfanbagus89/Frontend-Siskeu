import '../../../output.css';
import InfoWrapper from './infoWrapper';
import bgAmico from '../../../assets/bg-amico.png';
import InfoKalender from './infoKalender';
import HutangTerdekat from './hutangTerdekat';
import Grafik from './grafik';

const DasboardSec = () => {
    return(
        <div className="w-full text-black p-4 relative ">
            <img src={bgAmico} className='absolute -z-50 right-0' alt="" />
            <h1 className='font-medium text-[24px]'>Dasboard</h1>
            <br />
            <div className="w-full h-auto flex flex-wrap gap-2">
                <InfoWrapper/>
                <InfoKalender/>
                <Grafik/>
                <HutangTerdekat/>
            </div>
        </div>
    )
}

export default DasboardSec;