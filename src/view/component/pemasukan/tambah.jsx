import '../../../output.css';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
    
const Tambah = (props) => {
    const [startDate, setStartDate] = useState(null)

    return(
        <div className="w-[750px] h-[700px] bg-white rounded-xl absolute shadow-2xl top-20">
            <div className="w-full h-[75px] rounded-tl-xl rounded-tr-xl bg-slate-200 px-4">
                <h1 className='text-[24px] font-medium leading-[75px]'>Tambah Transaksi</h1>
            </div>
            <div className="w-full h-full p-4 flex flex-col gap-10">
                <div className="w-full h-[660]">
                    <h2>Jenis Transaksi</h2>
                    <select name="jenis_transaksi" id="jenis_transaksi" className='w-full h-10 shadow-md'>
                        <option value=""></option>
                        <option value="registrasi">Registrasi</option>
                    </select>
                </div>
                <div className="w-full h-[660]">
                    <h2>Tanggal</h2>
                    <DatePicker className='w-full h-10 shadow-md' selected={startDate} onChange={(date) => setStartDate(date)} dateFormat='dd MMM yyyy'/>
                </div>
                <div className="w-full h-[660]">
                    <h2>Jumlah Uang</h2>
                    <input type="text" name="jml_uang" id="jml_uang" className='w-full h-10 shadow-md'></input>
                </div>
                <div className="w-full h-[660]">
                    <h2>Keterangan</h2>
                    <input type="text" name="keterangan" id="keterangan" className='w-full h-10 shadow-md'></input>
                </div>
                <div className="w-full h-[660]">
                    <h2>Divisi</h2>
                    <select name="jenis_transaksi" id="jenis_transaksi" className='w-full h-10 shadow-md'>
                        <option value=""></option>
                        <option value="divisi_it">Divisi IT</option>
                    </select>
                </div>
                <div className="w-full h-[135px] text-white flex flex-row-reverse gap-4">
                    <button type="submit" className='w-[135px] h-[55px] bg-main rounded-md' onClick={(() => props.setTambah(!props.tambah))}>Simpan</button>
                    <button type="submit" className='w-[135px] h-[55px] bg-red-700 rounded-md' onClick={(() => props.setTambah(!props.tambah))}>Batal</button>
                </div>
            </div>
        </div>
    )
}

export default Tambah;