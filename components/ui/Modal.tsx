'use client'
import React, { useState } from 'react';

const ModalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button className="btn" onClick={openModal}>
        open modal
      </button>
      {isOpen && (
        <dialog id="my_modal_3" className="modal" open>
          <div className="modal-box">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={closeModal}
              >
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default ModalComponent;
