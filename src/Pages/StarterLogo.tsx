import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import '../App.css'
function StarterLogo() {
    const [timer, setTimer] = useState(5)
    const [zoom, setZoom] = useState('zoomIn')
    const imgClass = `${zoom} img-fluid`
    const navigate = useNavigate()

    const goToHome = () => navigate("/home")

    const logoTimer = setInterval(() => setTimer(timer - 1), 1000)
    setTimeout(() => setZoom('zoomOut'), 4500)
    
    if(timer === 0) {
        goToHome()
        clearInterval(logoTimer)
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div id='logo' className="col-8 d-flex justify-content-center align-item-center border border-light">
                    <img className={imgClass} src="Logo.png" alt="logo" />
                </div>
            </div>
            <div className="row text-center mt-5">
                <h2>Loading... {timer}</h2>
            </div>
        </div>
    )
}

export default StarterLogo