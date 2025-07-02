import { Button, Modal } from "react-bootstrap"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';

type Props = {
    openModal: boolean
    closeModal: () => void
}
function EmailModal({ openModal, closeModal }: Props) {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const form = useRef<HTMLFormElement>(null);
    const sendMail = (e: any) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setEmailError("Invalid email address");
            return;
        } else {
            setEmailError("");
        }

        if (!form.current) return;
        emailjs
            .sendForm('service_f7y6pw8', 'template_fhxf5jr', form.current, {
                publicKey: 'mVotJ0v4MTpuKIBoO',
            })
            .then(
                () => {
                    alert('email successfully sent!');
                },
                (error) => {
                    alert('Failed to send email...' + error.text);
                },
            );
        closeModal();
    };

    return (
        <Modal show={openModal} onHide={closeModal}>
            <div style={{ borderRadius: "20px", border: "2px solid grey" }}>
                <Modal.Header style={{
                    background: "linear-gradient(to left, rgb(12, 12, 12), rgb(54, 53, 53))",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Modal.Title>
                        <h4 style={{ fontFamily: "Arial" }}>Send me an email</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ width: "100%", background: "linear-gradient(to left, rgb(12, 12, 12), rgb(54, 53, 53))" }}>
                    <div className="form-group col-12">
                        <form ref={form} onSubmit={sendMail}>
                            <input type="email" 
                            className="form-control mt-2 mb-2" 
                            placeholder="Insert your email..." 
                            name="name"
                            style={{
                                background: "linear-gradient(to left, rgb(12, 12, 12), rgb(54, 53, 53))",
                                color: "white",
                                width: "90%",
                                marginLeft:"auto",
                                marginRight:"auto"
                            }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                            <textarea style={{
                                width: "90%",
                                height: "200px",
                                background: "linear-gradient(to left, rgb(12, 12, 12), rgb(54, 53, 53))",
                                color: "white",
                                marginLeft:"auto",
                                marginRight:"auto"
                            }}
                            className="form-control"
                            placeholder="Your message here"
                            name="message">
                            </textarea>
                            {emailError && <p style={{ color: "red" }}>{emailError}</p>}
                            <div className="col-12 d-flex justify-content-center">
                                <Button className="mt-3 col-12 col-md-3" variant="outline-light" type="submit">
                                    Send email
                                </Button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer style={{ background: "linear-gradient(to left, rgb(12, 12, 12), rgb(54, 53, 53))" }}>
                    <Button variant="dark" onClick={closeModal}>
                        Close
                    </Button>

                </Modal.Footer>
            </div>
        </Modal>
    )
}


export default EmailModal