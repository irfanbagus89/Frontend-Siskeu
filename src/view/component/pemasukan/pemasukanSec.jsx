import '../../../output.css';
import bgAmico from '../../../assets/bg-amico.png'; 
import Tabel from './tabel';
import Button from './button';
import Tambah from './tambah';
import { useState } from 'react';

const PemasukanSec = () => {
    const [tambah,setTambah] = useState(false)
    return(
        <div className="w-full text-black p-4 relative">
            <img src={bgAmico} className='absolute -z-50 right-0' alt="" />
            <h1 className='font-medium text-[24px]'>Pemasukan</h1>
            <br /> 
            <div className="w-full h-auto bg-white rounded-xl shadow-lg p-4 relative">
                {tambah && <Tambah setTambah={setTambah} tambah={tambah}/>}
                <div className="w-1/2 h-[50px] bg-main rounded-tl-xl rounded-br-xl text-center leading-[50px] -mx-4"><h3 className='font-bold text-[14px] text-white'>Transaksi Masuk</h3></div>
                <br />
                <Button setTambah={setTambah} tambah={tambah}/>
                <Tabel/>
            </div>
                
        </div>
    )
}

export default PemasukanSec;