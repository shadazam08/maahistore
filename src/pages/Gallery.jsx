import React, { useState } from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { images } from './data';


const Gallery = () => {

    // State for modal
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    // Function to handle image click
    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setShowModal(true);
    };
    return (
        <Container className=' mt-2'>
            <Row>
                {images.map((imageUrl, index) => (
                    <Col key={index} xs={12} md={4} className="mb-4">
                        <img
                            src={imageUrl}
                            alt={`Image ${index + 1}`}
                            className="img-fluid"
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleImageClick(imageUrl)}
                        />
                    </Col>
                ))}
            </Row>

            {/* Modal for displaying clicked image */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Body>
                    <img src={selectedImage} alt="Selected" className="img-fluid" />
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default Gallery
