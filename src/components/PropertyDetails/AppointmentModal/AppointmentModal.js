import Modal from '@bit/react-bootstrap.react-bootstrap.modal';
import Form from '@bit/react-bootstrap.react-bootstrap.form';
import { Bookmark } from 'react-iconly';

const AppointmentModal = ({ modalOpen, toggleModal, pid }) => {

    const bookAppointement = (e) => {
        e.preventDefault();

        const formElements = e.target.elements;

        const appointmentDetails = {
            pid,
            details: {
                customer_name: formElements['name'].value,
                contact_number: formElements['cnumber'].value,
                customer_email: formElements['email'].value,
                appointdate: formElements['appointdate'].value,
                bid: formElements['bid'].value
            }
        }

        const currentAppointments = JSON.parse(localStorage.getItem('real-estate-appointment'));
        console.log(currentAppointments);

        currentAppointments ?
            localStorage.setItem('real-estate-appointment', JSON.stringify([...currentAppointments, appointmentDetails])) :
            localStorage.setItem('real-estate-appointment', JSON.stringify([appointmentDetails]));

        toggleModal(false);
        // const currentAppointments = JSON.parse(localStorage.getItem('real-estate-appointment'));
        // console.log(currentAppointments);
    }

    return (
        <Modal show={modalOpen} onHide={toggleModal} size='lg'>
            <Modal.Header>
                <h4>Book a Visit</h4>
            </Modal.Header>
            <Modal.Body>
                <div className='px-3'>
                    <Form onSubmit={(e) => bookAppointement(e)}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control name='name' type='text' required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control name='cnumber' type='number' required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control name='email' type='email' required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <Form.Control name='appointdate' type='date' required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Your Bid</Form.Label>
                            <Form.Control name='bid' type='number' required />
                            <Form.Text>All amounts should be in ₹ Crores</Form.Text>
                        </Form.Group>
                        <Form.Group className='mt-5'>
                            <div className='d-flex justify-content-center'>
                                <div className='col-5'>
                                    <button type='submit' className='btn btn-danger btn-block'>
                                        <Bookmark set='light' />
                                        Book!
                                    </button>
                                </div>
                            </div>
                        </Form.Group>
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default AppointmentModal;