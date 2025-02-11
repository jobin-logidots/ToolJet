import React from 'react';
import Modal from '@/HomePage/Modal';
import { ButtonSolid } from '@/_ui/AppButton/AppButton';

function WorkspaceSSOEnableModal({ show, ssoKey, saveSettings, setShowModal, reset }) {
  const handleEnable = () => {
    saveSettings();
    setShowModal(false);
  };

  const handleClose = () => {
    reset();
    setShowModal(false);
  };

  const modalContent = (
    <div>
      <p>
        Enabling <strong>{ssoKey.charAt(0).toUpperCase() + ssoKey.slice(1)}</strong> at the workspace level will
        override any <strong>{ssoKey.charAt(0).toUpperCase() + ssoKey.slice(1)}</strong> configurations set at the
        instance level.
      </p>
      <p>Are you sure you want to continue?</p>
    </div>
  );

  const modalFooter = (
    <>
      <ButtonSolid variant="tertiary" onClick={handleClose} data-cy="cancel-button">
        Cancel
      </ButtonSolid>
      <ButtonSolid variant="primary" onClick={handleEnable}>
        Enable
      </ButtonSolid>
    </>
  );

  const ModalTitle = () => (
    <strong style={{ fontWeight: 500, fontSize: 'medium' }}>
      Enable {ssoKey.charAt(0).toUpperCase() + ssoKey.slice(1)}
    </strong>
  );

  return (
    <Modal title={<ModalTitle />} show={show} closeModal={handleClose} footerContent={modalFooter}>
      {modalContent}
    </Modal>
  );
}

export default WorkspaceSSOEnableModal;
