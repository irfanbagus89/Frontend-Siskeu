import '../../../output.css';
import moneyBag1 from '../../../assets/money-bag1.png';
import moneyBag2 from '../../../assets/money-bag2.png';
import { NavLink } from 'react-router-dom';

const InfoWrapper = () => {
    const infoWrapper =[
        {id:1,title:'Pemasukan Tahun Ini',value:"600.000",icon:moneyBag1,link:'/pemasukan'},
        {id:2,title:'Pemasukan Bulan Ini',value:"600.000",icon:moneyBag2,link:'/pemasukan'},
        {id:3,title:'Pengeluaran Tahun Ini',value:"600.000",icon:moneyBag1,link:'/pengeluaran'},
        {id:4,title:'Pengeluaran Bulan Ini',value:"600.000",icon:moneyBag2,link:'/pengeluaran'}
    ];

    return(
        <div className="w-[690px] h-auto flex flex-wrap gap-4 md:h-[350px]">
            {infoWrapper.map((wrap) => {
                return(
                    <div key={wrap.id} className="w-[335px] h-[140] bg-white shadow-xl rounded-xl pl-4 pt-4 flex flex-col justify-between">
                        <h2 className='font-medium text-[14px]'>{wrap.title}</h2>
                        <div className="flex items-center p-1">
                            <img src={wrap.icon} className='w-[60px] h-[60px]' alt="" />
                            <h3 className='font-extrabold text-[32px] px-4'>Rp {wrap.value}</h3>
                        </div>
                        <NavLink to={wrap.link} className="w-[40%] h-[35px] text-center leading-[35px] rounded-tl-xl rounded-br-xl self-end bg-[#43D1A7] cursor-pointer">
                            <p className='text-[12px] text-white'>Lihat Detail</p>
                        </NavLink>
                    </div>
                
            )})}
        </div>
    )
}

export default InfoWrapper;