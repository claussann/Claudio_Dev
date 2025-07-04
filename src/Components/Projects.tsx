import { useNavigate } from "react-router-dom"

import '../App.css'
function Projects(): any {
    const navigate = useNavigate()

    const goProjects = () => navigate("/projects")
    return (
        <div id="projects" className="container mt-5 p-3 border border-light">
        <div className="row mt-4 text-center">
            <h1>Progetti</h1>
            <h4>Vi presento qualche mio progetto personale...</h4>
        </div>
        <div className="row d-flex justify-content-center mt-3">
            <button onClick={goProjects} className="col-6 btn btn-outline-light">Go To Projects</button>
        </div>
    </div>
    )
}
export default Projects