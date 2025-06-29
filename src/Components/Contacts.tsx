import EmailModal from "./EmailModal"
import { useState } from "react"

function Contacts() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className='col-3 col-md-1'>
                    <img className='icon img-fluid' src="email.png" alt="Contact me" title="Contact me" onClick={() => setShowModal(true)} />
            </div>
            <div className='col-3 col-md-1'>
                <a href="https://www.linkedin.com/in/claudio-sanna-127326349/" target="_blank">
                    <img className='icon img-fluid' src="linkedin.png" alt="Linkedin" title="LinkedIn" />
                </a>
            </div>
            <div className='col-3 col-md-1'>
                <a href="http://github.com/claussann" target="_blank" rel="noopener noreferrer">
                    <img className='icon img-fluid' src="github.png" alt="Github" title="GitHub" />
                </a>
            </div>
            {<EmailModal openModal={showModal} closeModal={() => setShowModal(false)} />}
        </>
    )
}

export default Contacts