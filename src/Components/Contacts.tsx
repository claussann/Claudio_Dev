function Contacts() {
    return (
        <>
            <div className='col-3 col-md-1'>
                    <img className='icon img-fluid' src="email.png" alt="email" />
            </div>
            <div className='col-3 col-md-1'>
                <a href="https://www.linkedin.com/in/claudio-sanna-127326349/" target="_blank">
                    <img className='icon img-fluid' src="linkedin.png" alt="linkedin" />
                </a>
            </div>
            <div className='col-3 col-md-1'>
                <a href="http://github.com/claussann" target="_blank" rel="noopener noreferrer">
                    <img className='icon img-fluid' src="github.png" alt="github" />
                </a>
            </div>
        </>
    )
}

export default Contacts