import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import FishingVideo from '../Components/FishingVideo'

import '../App.css'

function ProjectsPage() {
    const [fishingModal, setFishingModal] = useState(false);
    const navigate = useNavigate()
    const goToHOme = () => navigate("/home")

    const openFishingModal = () => setFishingModal(true)
    const closeFishingModal = () => setFishingModal(false)
    return (
        <div id="projectsPage" className="container">
            <div className="projects row border border-light mt-3 text-center d-flex" style={{ borderRadius: "10px" }}>
                <div className="col-9">
                    <h1>Progetti</h1>
                    <h4>Vi presento qualche mio progetto personale...</h4>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-end">
                    <button onClick={goToHOme} className="btn btn-outline-light">Go To Home</button>
                </div>
            </div>
            <div className="projects row mt-3 border border-light d-flex justify-content-center" style={{ borderRadius: "10px" }} >
                <div className='col-10 text-center p-3'>
                    <p>Music_Project_Demo</p>
                    <a href="https://music-portfolio-project.netlify.app/" target="_blank" rel="noopener noreferrer"><button id="music" style={{ height: "200px" }} className="btn btn-outline-light col-12 mt-2 mb-2 mx-auto"></button></a>
                </div>
            </div>
            <div className="projects row mt-3 border border-light d-flex justify-content-center" style={{ borderRadius: "10px" }} >
                <div className='col-10 text-center p-3'>
                    <p>eCommerce_Project_Demo</p>
                    <a href="https://e-portfolio-commerce.netlify.app/" target="_blank" rel="noopener noreferrer"><button id="eCommerce" style={{ height: "200px" }} className="btn btn-outline-light col-12 mt-2 mb-2 mx-auto"></button></a>
                </div>
            </div>
            <div className="projects row mt-3 border border-light d-flex justify-content-center" style={{ borderRadius: "10px" }} >
                <div className='col-10 text-center p-3'>
                    <p>Fishing_inventory_Video</p>
                    <button id="fishing_inventory" onClick={openFishingModal} style={{ height: "200px" }} className="btn btn-outline-light col-12 mt-2 mb-2 mx-auto"></button>
                </div>
            </div>
            {fishingModal && <FishingVideo openModal={fishingModal} onClose={closeFishingModal} />}
        </div>
    )
}

export default ProjectsPage