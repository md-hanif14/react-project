import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Problem2 = () => {

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    const[allCountriesConts, setAllCountriesCont ] = useState([])

    useEffect(() => {
        fetch('allCountries.json')
            .then(res => res.json())
            .then(data => setAllCountriesCont(data))
    }, [])






    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <div>
                        <button onClick={handleShow1} className="btn btn-lg btn-outline-primary" type="button" >All Contacts</button>

                        <Modal show={show1} onHide={handleClose1}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal A (All Countries)</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {
                                    allCountriesConts.map(allCountriesCont => <p>
                                        Mobile Num: {allCountriesCont.mobileNumber}
                                    </p>)
                                }
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={handleClose1}>
                                    All Contacts
                                </Button>
                                <Button variant="primary" onClick={handleClose1}>
                                    US Contacts
                                </Button>
                                <Button variant="secondary" onClick={handleClose1}>
                                    Close
                                </Button>

                            </Modal.Footer>
                        </Modal>
                    </div>


                    <div>
                        <button onClick={handleShow2} className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>

                        <Modal show={show2} onHide={handleClose2}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal B</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={handleClose2}>
                                    US Contacts
                                </Button>
                                <Button variant="primary" onClick={handleClose2}>
                                    All Contacts
                                </Button>
                                <Button variant="secondary" onClick={handleClose2}>
                                    Close
                                </Button>

                            </Modal.Footer>
                        </Modal>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Problem2;