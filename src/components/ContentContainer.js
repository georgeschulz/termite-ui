function ContentContainer({ children }) {
    return (
        <main className='w-full flex justify-center bg-gray-200 min-h-screen'>
            <div className='max-w-7xl'>
                {children}
            </div>
        </main>
    );
}

export default ContentContainer;