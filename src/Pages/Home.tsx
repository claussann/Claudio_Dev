import Header from "../Components/Header"
import Me from "../Components/Me";
import Projects from "../Components/Projects"
import WhoIAm from "../Components/WhoIAm"
import Clock from "../Components/Clock";
import PhotoCarousel from "../Components/PhotoCarousel"

import { useState } from "react"

import '../App.css'
import Aphorism from "../Components/Aphorism";
function Home() {
    const [showModal, setShowModal] = useState(false);
    const [showImage, setShowImage] = useState("flex");

    let imgClass = `col-12 col-md-6 d-${showImage} justify-content-center align-items-center`
    const openModal = () => {
        setShowImage("none");
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false)
        setShowImage("flex")
    }
    return (
        <div id="home" className="container">
            <Header title="Claudio_Dev" />
            {!showModal && <WhoIAm imgClass={imgClass} click={openModal} closeModal={closeModal} />}
            {!showModal && <PhotoCarousel />}
            {!showModal && <Projects />}
            {!showModal && <Aphorism />}
            {!showModal && <Clock />}
            {showModal && <Me onClose={closeModal} openModal={showModal} />}
        </div>
    )
}

export default Home