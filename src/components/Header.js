function Header({text="", children}) {
    return (
        <header className="App-header text-center flex-wrap  bg-cyan-700 py-8 px-10">
            <h1 className='font-bold text-2xl tracking-wider w-full text-gray-100'>{text}</h1>
            {children}
        </header>
    )
}

export default Header;