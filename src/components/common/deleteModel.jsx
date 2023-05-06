import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function DeleteModel(props) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

// function DeleteModel() {
//     const [modalShow, setModalShow] = React.useState(false);

//     return (
//         <>
//             <Button variant="primary" onClick={() => setModalShow(true)}>
//                 Launch vertically centered modal
//             </Button>

//             <MyVerticallyCenteredModal
//                 show={modalShow}
//                 onHide={() => setModalShow(false)}
//             />
//         </>
//     );
// }

// export default DeleteModel;