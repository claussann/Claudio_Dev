import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import FishingVideo from '../Components/FishingVideo'
import DescriptionModal from '../Components/DescriptionModal';
import proJectDataRow from '../Data/Projects.json'

import '../App.css'

type project = {
    id: number,
    title: string,
    description: string
}

function ProjectsPage() {
    const [showDescriptionMusicModal, setShowDescriptionMusicModal] = useState(false);
    const [showDescriptionEcommerceModal, setShowDescriptionEcommerceModal] = useState(false);
    const [showDescriptionFishingModal, setShowDescriptionFishingModal] = useState(false);
    const [fishingModal, setFishingModal] = useState(false);

    const navigate = useNavigate()

    const openFishingModal = () => setFishingModal(true)
    const closeFishingModal = () => setFishingModal(false)

    const goToHOme = () => navigate("/home")

    const projectData: project[] = proJectDataRow.projects


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
                    <p>{projectData[0].title}</p>
                    <a href="https://music-portfolio-project.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <div id="music" style={{ height: "200px" }} className="border border-light col-12 mt-2 mb-2 mx-auto">
                            <img className='img-fluid' style={{ width: "100%", height: "100%", borderRadius: "10px", objectFit: "cover" }} src="img_rock.png" alt="music image" />
                        </div>
                    </a>
                    <div className="col-12 mt-2 p-2 d-flex justify-content-center">
                        <button className='btn btn-outline-light' onClick={() => setShowDescriptionMusicModal(true)}>Description</button>
                    </div>
                </div>
            </div>
            <div className="projects row mt-3 border border-light d-flex justify-content-center" style={{ borderRadius: "10px" }} >
                <div className='col-10 text-center p-3'>
                    <p>{projectData[1].title}</p>
                    <a href="https://e-portfolio-commerce.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <div id="eCommerce" style={{ height: "200px" }} className="border border-light col-12 mt-2 mb-2 mx-auto">
                            <img className='img-fluid' style={{ width: "100%", height: "100%", borderRadius: "10px", objectFit: "cover" }} src="eCommerce.png" alt="eCommerce image" />
                        </div>
                    </a>
                    <div className="col-12 mt-2 p-2 d-flex justify-content-center">
                        <button className='btn btn-outline-light' onClick={() => setShowDescriptionEcommerceModal(true)}>Description</button>
                    </div>
                </div>
            </div>
            <div className="projects row mt-3 border border-light d-flex justify-content-center" style={{ borderRadius: "10px" }} >
                <div className='col-10 text-center p-3'>
                    <p>{projectData[2].title}</p>
                    <div id="fishing_inventory" onClick={openFishingModal} style={{ height: "200px" }} className="border border-light col-12 mt-2 mb-2 mx-auto">
                        <img className='img-fluid' style={{ width: "100%", height: "100%", borderRadius: "10px", objectFit: "cover" }} src="Pesca.png" alt="fishing image" />
                    </div>
                    <div className="col-12 mt-2 p-2 d-flex justify-content-center">
                        <button className='btn btn-outline-light' onClick={() => setShowDescriptionFishingModal(true)}>Description</button>
                    </div>
                </div>
            </div>
            {fishingModal && <FishingVideo openModal={fishingModal} onClose={closeFishingModal} />}
            {showDescriptionMusicModal && <DescriptionModal openModal={showDescriptionMusicModal} onClose={() => setShowDescriptionMusicModal(false)} title={projectData[0].title} description={projectData[0].description} />}
            {showDescriptionEcommerceModal && <DescriptionModal openModal={showDescriptionEcommerceModal} onClose={() => setShowDescriptionEcommerceModal(false)} title={projectData[1].title} description={projectData[1].description} />}
            {showDescriptionFishingModal && <DescriptionModal openModal={showDescriptionFishingModal} onClose={() => setShowDescriptionFishingModal(false)} title={projectData[2].title} description={projectData[2].description} />}

        </div>
    )
}

export default ProjectsPage