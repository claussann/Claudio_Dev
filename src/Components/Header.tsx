import Contacts from "./Contacts"

import '../App.css'

type HeaderProps = {
    title: string
}

function Header({ title }: HeaderProps) {
    const bigScreen = (
        <div className="row mt-5">
            <div id='header' className="col-12 text-center d-flex justify-content-center p-1 align-items-center">
                <div className='col-12 col-md-9'>
                    <h1>{title}</h1>
                </div>
                <Contacts />
            </div>
        </div>)

    const smallScreen = (
        <div className="row mt-5">
            <div id='header' className="col-12 text-center d-flex justify-content-center p-1 align-items-center">
                <div className='col-12 col-md-9'>
                    <h1>{title}</h1>
                </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
                <div className="col-6 d-flex justify-content-between mt-2 align-items-center">
                    <Contacts />
                </div>
            </div>
        </div>
    )

    return (
        <>
            <div className="container">
                {window.innerWidth > 768 ? bigScreen : smallScreen}
            </div>
        </>

    )
}

export default Header