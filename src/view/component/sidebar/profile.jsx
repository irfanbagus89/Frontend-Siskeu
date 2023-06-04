import '../../../output.css';

const Profile = (props) => {
    return(
        <div className="w-[207px] h-[78px] flex items-center mb-[24px]">
            <div className='w-[78px] h-[78px] rounded-full'>
                <img className={`${props.open ? 'w-[78px] h-[78px]' : 'w-[50px] h-[50px] ml-[20px]'} rounded-full`} src="" alt="" />
            </div>
            <div className={`${props.open ? 'w-[129px]' : 'hidden'} pl-4 `}>
                <h2 className='font-semibold text-[20px]'>Irfan</h2>
                <h3 className='text-[12px]'>Bendahara</h3>
            </div>
        </div>
    )
}

export default Profile;