import '../../../output.css';
import {GiExitDoor} from 'react-icons/gi'

const Logout = (props) => {
    return(
        <div className={`${props.open ? 'w-[207px]' : 'w-[80px] '}h-[50px] flex items-center  gap-4 justify-center rounded-sm bg-third`}>    
           <GiExitDoor className={`${props.open ? 'w-[16px] h-[16px]' : 'w-[25px] h-[25px]'}`}/>
            <h2 className={`${props.open ? 'font-semibold lg:text-[16px]' : 'hidden'}`}>Logout</h2>
        </div>
    )
}

export default Logout;