import Header from "../Components/Header"
import Me from "../Components/Me";
import Projects from "../Components/Projects"
import WhoIAm from "../Components/WhoIAm"
import Clock from "../Components/Clock";

import { useState } from "react"

import '../App.css'
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
            {!showModal && <Projects />}
            {!showModal && <Clock />}
            {showModal && <Me onClose={closeModal} openModal={showModal} />}
        </div>
    )
}

export default Home