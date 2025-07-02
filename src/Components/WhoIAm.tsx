import "../App.css"

type Props = {
    imgClass: any,
    click: any,
    closeModal: any
}

function WhoIAm({imgClass, click}: Props): any {

    
    return (
        <div className="row mt-2 w-75 mx-auto">
            <div className={imgClass}>
                <img id="avatar" className="img-fluid" src="avatar.png" alt="Avatar" title="Avatar" />
            </div>
            <div className={imgClass}>
                <img id="me" onClick={click} className="img-fluid" src="chiSono.png" alt="chi sono" title="chi sono" />
            </div>
        </div>
    )
}

export default WhoIAm