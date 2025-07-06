import { Button, Modal } from "react-bootstrap"

type DescriptionModalProps = {
    openModal: boolean;
    onClose: () => void;
    description: string;
    title: string
};

function DescriptionModal({ title, openModal, onClose, description }: DescriptionModalProps) {
    return (
        <Modal show={openModal} onHide={onClose}>
            <div style={{ borderRadius: "20px", border: "2px solid grey" }}>
                <Modal.Header style={{
                    background: "linear-gradient(to left, rgb(12, 12, 12), rgb(54, 53, 53))",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Modal.Title>
                        <h4 style={{ fontFamily: "Arial" }}>{title}</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ width: "100%", background: "linear-gradient(to left, rgb(12, 12, 12), rgb(54, 53, 53))" }}>
                    <div className="form-group col-12">
                        <p>{description}</p>
                    </div>
                </Modal.Body>
                <Modal.Footer style={{ background: "linear-gradient(to left, rgb(12, 12, 12), rgb(54, 53, 53))" }}>
                    <Button variant="outline-light" onClick={onClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </div>
        </Modal>
    )

}

export default DescriptionModal