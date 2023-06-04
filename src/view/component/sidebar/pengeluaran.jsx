import '../../../output.css';
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

const Pengeluaran = (props) => {
    return(
        <div className="lg:w-[207px] h-[40px] flex items-center mb-[24px] gap-4 pl-2">    
            <BsFillArrowUpCircleFill className={`${props.open ? 'w-[16px] h-[16px]' : 'w-[25px] h-[25px] ml-[20px]'}`}/>
            <h2 className={`${props.open ? 'font-semibold lg:text-[16px]' : 'hidden'}`}>Pengeluaran</h2>
        </div>
    )
}

export default Pengeluaran;