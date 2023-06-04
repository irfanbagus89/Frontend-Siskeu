import '../../../output.css';
import {BsPlusCircle} from 'react-icons/bs'
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Button = (props) => {
    const [startDate, setStartDate] = useState(null)
    return(
        <div className="w-4/5 h-[80px] flex gap-4">
                <button type='submit' className="w-[220px] h-[45px] bg-third rounded-xl flex items-center justify-evenly text-white" onClick={(() => props.setTambah(!props.tambah))}>
                    <BsPlusCircle/>
                    <h3 className='font-semibold text-[14px]'>Tambah Pemasukan</h3>
                </button>
                <div className="w-[110px] h-[80px]">
                    <label className=' text-[12px] block'>Show</label>
                    <select name="show" id="show" className='w-full h-[32px] rounded-xl border'>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
                </div>
                <div className="w-[110px] h-[80px]">
                    <label className=' text-[12px] block'>Filter</label>
                    <DatePicker className='w-full h-[32px] rounded-xl border' selected={startDate} onChange={(date) => setStartDate(date)} dateFormat='dd MMM yyyy'/>
                </div>
                <div className="w-[110px] h-[80px]">
                    <label className=' text-[12px]'>Search</label>
                    <input type="search" className='w-full h-[32px] border rounded-xl' name="" id="" />
                </div>
            </div>
    )
}

export default Button;