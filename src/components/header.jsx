import logoPath from '../assets/images/logo.png'
const Header = () => {
    return (
        <>
            <h1 className='font-bold text-4xl w-fit pt-[10px] ml-auto mr-auto'>Welcome to Team Selector</h1>
            <img src={logoPath} alt="logo-sign" width="300px" className='ml-auto mr-auto' />
        </>
    )
}

export default Header