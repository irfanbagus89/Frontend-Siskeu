import '../../../output.css';
import Profile from './profile';
import Dasboard from './dasboard';
import Pemasukan from './pemasukan';
import Pengeluaran from './pengeluaran';
import Hutang from './hutang';
import Laporan from './laporan';
import Logout from './logout';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'

const Sidebar = () => {
    const [open,setOpen] = useState(true);
    // console.log(open)
    return(
        <div className={`${open ? 'w-[275px]':'w-[100px] lg:w-[275px] px-[10px] text-center'} h-[800px] bg-main p-[30px] relative`}>
            <div className="w-8 h-8 absolute -right-4 top-28 bg-black rounded-full cursor-pointer lg:hidden" onClick={(() => setOpen(!open))}>
                {open ? <BsFillArrowLeftCircleFill className='w-full h-full'/> : <BsFillArrowLeftCircleFill className='rotate-180 w-full h-full'/> }
            </div>
            <NavLink to={'/profile'}>
                <Profile open={open}/>
            </NavLink>
            <hr className='lg:w-[200px]'/>
            <h2 className='font-medium text-[14px] my-[24px]'>Home Page</h2>
            <NavLink to={'/dasboard'} className={({isActive}) => isActive ? 'bg-third block rounded-lg':'bg-transparent hover:bg-third hover:block hover:rounded-lg '}>
                <Dasboard open={open}/>
            </NavLink>
            <hr className='lg:w-[200px]'/>
            <h2 className='font-medium text-[14px] my-[24px]'>Transaksi</h2>
            <NavLink to={'/pemasukan'} className={({isActive}) => isActive ? 'bg-third block rounded-lg':'bg-transparent hover:bg-third hover:block hover:rounded-lg '}>
                <Pemasukan open={open}/>
            </NavLink>
            <NavLink to={'/pengeluaran'} className={({isActive}) => isActive ? 'bg-third block rounded-lg':'bg-transparent hover:bg-third hover:block hover:rounded-lg '}>
                <Pengeluaran open={open}/>
            </NavLink>
            <hr className='lg:w-[200px]'/>
            <h2 className='font-medium text-[14px] my-[24px]'>Tagihan</h2>
            <NavLink to={'/hutang'} className={({isActive}) => isActive ? 'bg-third block rounded-lg':'bg-transparent hover:bg-third hover:block hover:rounded-lg '}>
                <Hutang open={open}/>
            </NavLink>
            <NavLink to={'/laporan'} className={({isActive}) => isActive ? 'bg-third block rounded-lg':'bg-transparent hover:bg-third hover:block hover:rounded-lg '}>
                <Laporan open={open}/>
            </NavLink>
            <br />
            <br />
            <br />
            <Logout open={open}/>
        </div>
    )
}

export default Sidebar