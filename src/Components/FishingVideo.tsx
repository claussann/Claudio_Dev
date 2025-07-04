import { Button, Modal } from "react-bootstrap"

type Props = {
    openModal: boolean
    onClose: () => void
}
function FishingVideo({ onClose, openModal }: Props) {

    return (
        <Modal show={openModal} onHide={onClose}>
            <div style={{ borderRadius: "20px", border: "2px solid grey" }}>
                <Modal.Header style={{
                    background: "linear-gradient(to left, rgb(12, 12, 12), rgb(54, 53, 53))",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Modal.Title>
                        <h4 style={{ fontFamily: "Arial" }}>Fishing_inventory_Video</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ width: "100%", background: "linear-gradient(to left, rgb(12, 12, 12), rgb(54, 53, 53))" }}>
                    <div className="form-group col-12">
                        <video controls style={{ width: "100%" }}>
                            <source src="FishingInventory.mp4" type="video/mp4" />
                            your browser does not support the video tag
                        </video>
                    </div>
                </Modal.Body>
                <Modal.Footer style={{ background: "linear-gradient(to left, rgb(12, 12, 12), rgb(54, 53, 53))" }}>
                    <Button variant="dark" onClick={onClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </div>
        </Modal>
    )
}


export default FishingVideo