import { motion } from "framer-motion"

interface Props {
    onClose: () => void,
    openModal: boolean
}
function Me({ onClose }: Props): any {
    return (
        <motion.div
            style={{border: "1px solid grey", maxWidth: "600px", marginLeft: "auto", marginRight: "auto", textAlign: "center", marginTop: "50px", marginBottom: "50px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1.5 }}
            className="fixed inset-0 flex items-center">
            <div className="row">
                <div className="col-12">
                    <h1>Sono Claudio!</h1>
                    <h3>Vi parlo un po' di me 😁</h3>
                    <p>Ho quasi 33 anni, sono un papà, un marito e le mie passioni sono il <b>coding</b>, la <b>musica</b> e la <b>pesca</b>.</p>
                    <p>Sono un musicista "o almeno ci provo", suono la chitarra e con mia moglie ci capita di fare qualche serata nei locali e in qualche evento della nostra città.</p>
                    <p>Adoro andare a pesca nei giorni liberi, è un validissimo metodo per svuotare la mente e rilassarsi nei momenti di pausa. Mi piace il mare, i laghi e la natura in generale.</p>
                    <p>Sono un ragazzo che da molti anni lavora nel settore della grande distribuzione ma ho deciso di dare una svolta alla mia vita e tirare fuori dal cassetto un sogno che avevo fin da bambino, diventare uno <b>sviluppatore</b>.</p>
                    <p>Sono un appassionato di <b>Tecnologia</b> e <b>Informatica</b> fin da quando ero piccolo, mi è sempre piaciuto "smanettare" con i computer ma non ho mai avuto l'opportunità di approfondire e riuscire a fare di questa passione un lavoro.</p>
                    <p>Oggi, ho diceso di ascoltare quel bambino e iniziare a studiare seriamente.</p>
                    <p>Ho studiato sviluppo web con il bootcamp online di <b>MusaFormazione</b>.</p>
                    <p>Per quanto riguarda il front-end ho delle buone basi di:</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                    </ul>
                    <p>Utilizzo FrameWork come:</p>
                    <ul>
                        <li>React</li>
                        <li>Redux Toolkit "per la gestione dello stato"</li>
                        <li>Bootstrap/Material UI "per il design responsive"</li>
                    </ul>
                    <p>Per quanto riguarda il back-end ho delle buone basi di:</p>
                    <ul>
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>Laravel</li>
                    </ul>
                    <p>La <b>Programmazione</b> in generale mi appassiona e la mia intenzione è quella di crescere come sviluppatore e imparare nuovi linguaggi e tecnologie per riuscire a diventare un developer versatile e preparato.</p>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <button className="btn btn-outline-light mt-3 mb-3" onClick={onClose}>close</button>
                </div>
            </div>
        </motion.div>
    )
}

export default Me