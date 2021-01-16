import React, { useState } from 'react';
import { Modal } from '../ModalContext/Modal';
import LoginFormModal from '../Components/Modals/LoginFormModal';

const UserName = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className='userName' onClick={() => setShowModal(true)}>Guest</div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginFormModal />
                </Modal>
            )}
        </>
    )
}

export default UserName
