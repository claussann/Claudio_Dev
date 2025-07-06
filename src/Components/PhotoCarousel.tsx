import { useNavigate } from 'react-router-dom';

import photo from '../Data/CarouselPhoto.json'
import Carousel from 'react-bootstrap/Carousel'

import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css'

type photo = {
    id: number,
    src: string,
    alt: string
}

function PhotoCarousel() {
    const photoData: photo[] = photo.photo
    const navigate = useNavigate()

    const goProjects = () => navigate("/projects")

    return (
        <div id="carousel" className='col-12 border border-light mt-5 d-flex justify-content-between align-items-center'>
            <div className='col-12 col-md-8'>
                <div style={{ borderRadius: "10px" }} className='col-12 d-flex justify-content-center'>
                    <div className="col-12 col-md-8 d-flex justify-content-center col-8 mt-5 mb-2" style={{ height: "400px" }}>
                        <div className='col-12 p-5'>
                            <Carousel fade>
                                {photoData.map((photo) => (
                                    <Carousel.Item key={photo.id} interval={1500}>
                                        <img style={{ height: "300px", width: "400px", marginLeft: "auto", marginRight: "auto" }} className="img-fluid d-block p-3" src={photo.src} alt={photo.alt} />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rightCarousel col-12 col-md-4 text-center align-items-center'>
                <h3>Vi presento alcuni di i miei progetti...</h3>
                <button onClick={goProjects} className="btn btn-outline-light col-4 mt-2"><i className="bi bi-arrow-right-circle"></i></button>
            </div>
        </div>
    );
}

export default PhotoCarousel;