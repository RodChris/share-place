import React, { useState, Fragment } from 'react'

import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'
import Modal from '../../shared/components/UIElements/Modal'

import './PlaceItem.css'

const PlaceItem = (props) => {
    const [showMap, setShowMap] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const openMapHandler = () => setShowMap(true)
    const closeMapHandler = () => setShowMap(false)

    const openShowDeleteModalHandler = () => setShowDeleteModal(true)
    const closeDeleteModalHandler = () => setShowDeleteModal(false)

    const confirmDeleteHandler = () => {
        setShowDeleteModal(false)
    }

    return (
        <Fragment>
            <Modal
                show={showMap}
                onCancel={closeMapHandler}
                header={props.address}
                contentClass='place-item__modal-content'
                footerClass='place-item__modal-actions'
                footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
            >
                <div className='map-container'>
                    <h2>THE MAP</h2>
                </div>
            </Modal>
            <Modal
                show={showDeleteModal}
                onCancel={closeDeleteModalHandler}
                header="ATTENTION"
                footerClass="place-item__modal-actions"
                footer={
                    <React.Fragment>
                        <Button inverse onClick={closeDeleteModalHandler}>CANCEL</Button>
                        <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
                    </React.Fragment>
                }>
                <p>Are you sure you want to delete?</p>
            </Modal>
            <li className='place-item'>
                <Card className='place-item__content'>
                    <div className='place-item__image'>
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className='place-item__info'>
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className='place-item__actions'>
                        <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
                        <Button to={`/places/${props.id}`}>EDIT</Button>
                        <Button danger onClick={openShowDeleteModalHandler}>DELETE</Button>
                    </div>
                </Card>
            </li>
        </Fragment>
    )
}

export default PlaceItem