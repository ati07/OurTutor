import Image from 'next/image'
import SchoolIcon from '@material-ui/icons/School';
function Header() {
    const HeaderItems =['Pricing','Schools','Demo Lesson Space','Course']
    const Cred = ['Sign In','Become A Tutor']
    return (
        <div className='flex items-center justify-evenly bg-gray-700 border-2'>
            <div>
                <Image
                src='/Logo.svg'
                width={100}
                height={100}
                alt='logo'/>
            </div>
            <div className='flex justify-around items-center'>
                {HeaderItems.map((item,i)=>(
                    <div key={i} className='m-3 uppercase'>{item}</div>
                ))}
            </div>
            <div className='flex'>
                {Cred.map((item,i)=>(
                    <div key={i} className='m-3 uppercase'>{item}</div>
                ))}
            </div>
        </div>
    )
}

export default Header
