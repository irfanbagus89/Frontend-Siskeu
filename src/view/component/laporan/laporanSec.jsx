import '../../../output.css';
import bgAmico from '../../../assets/bg-amico.png';
import collect1 from '../../../assets/collect1.png';
import collect2 from '../../../assets/collect2.png';
import collect3 from '../../../assets/collect3.png';
import {AiOutlinePrinter} from 'react-icons/ai';
import {AiOutlineDownload} from 'react-icons/ai';


const LaporanSec = () => {
    const wrapper =[
        {id:1,title:'Penjualan',bg:collect1},
        {id:2,title:'Hutang',bg:collect2},
        {id:3,title:'Pengeluaran',bg:collect3}];
        
    return(
        <div className="w-full text-black p-4 relative ">
            <img src={bgAmico} className='absolute -z-50 right-0' alt="" />
            <h1 className='font-medium text-[24px]'>Laporan</h1>
            <br />
            <div className="w-full h-auto flex flex-wrap gap-12">
            {wrapper.map((warp) =>{
                return(
                    <div key={warp.id} className="w-[500px] h-[300px] shadow-lg bg-white rounded-xl relative">
                        <img src={warp.bg} alt="" className='absolute right-0 w-[50%] h-full' />
                        <div className="w-1/2 h-[50px] bg-main rounded-tl-xl rounded-br-xl text-center leading-[50px]">
                            <h3 className='font-bold text-[14px] text-white'>Laporan {warp.title}</h3>
                        </div>
                        <br />
                        <br />
                        <div className="pl-8">
                            <p className='font-medium text-[14px]'>Pilih tanggal</p>
                            <select name="filter" id="filter" className='w-1/4 h-[32px] mt-4 flex rounded-xl border-solid border-[1px] border-black items-center justify-evenly cursor-pointer'>
                                <option value="">All Date</option>
                            </select>
                            <div className="w-auto h-auto flex gap-2 pt-16">
                                <div className="w-1/4 h-[32px] flex rounded-xl bg-main items-center justify-evenly cursor-pointer">
                                    <AiOutlinePrinter className='text-white'/>
                                    <p className='font-medium text-[12px] text-white'>Print laporan</p>
                                </div>
                                <div className="w-1/4 h-[32px] flex rounded-xl bg-main items-center justify-evenly cursor-pointer">
                                    <AiOutlineDownload className='text-white'/>
                                    <p className='font-medium text-[12px] text-white'>Unduh laporan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )})}
                </div>
        </div>
    )
}

export default LaporanSec;