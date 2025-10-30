import Logoimg from '/icons/logo2.svg'

import './Logo.scss'

const Logo = () => {
    return (
        <div className='logo'>
            <img className='logo__img' src={Logoimg} alt='logo' />
            <p className='logo__title'>Maks</p>
        </div>
    )
}

export default Logo
