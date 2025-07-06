import { useState } from "react";

import '../App.css'

function Clock() {
    const [ore, setOre] = useState(new Date().getHours())
    const [minuti, setMinuti] = useState(new Date().getMinutes())
    const [secondi, setSecondi] = useState(new Date().getSeconds())
    const [giorno, setGiorno] = useState(new Date().getDate())
    const [mese, setMese] = useState(new Date().getMonth())
    const [anno, setAnno] = useState(new Date().getFullYear())

    setInterval(() => {
        setOre(new Date().getHours())
        setMinuti(new Date().getMinutes())
        setSecondi(new Date().getSeconds())
        setGiorno(new Date().getDate())
        setMese(new Date().getMonth())
        setAnno(new Date().getFullYear())
    })

    return (
        <div className="row d-flex justify-content-center mt-5 mb-5">
            <div id="ora" className="col-8 text-center border border-light">
                <h1>{giorno}/{mese}/{anno} - {ore}:{minuti}:{secondi}</h1>
            </div>
        </div>
    )

}

export default Clock