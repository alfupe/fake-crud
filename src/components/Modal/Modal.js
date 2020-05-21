import React from 'react';
import Portal from '../Portal/Portal';

const Modal = props => {
    return (
        <Portal.In target="modal-container">
            <section className="modal">
                <header className="modal__header">
                    {props.title}
                    <button onClick={event => props.onClose(false)}>cerrar</button>
                </header>
                <div className="modal__body">
                    {props.children}
                </div>
                <footer className="modal__footer">
                    <Portal.Out id="modal-actions" />
                </footer>
            </section>
        </Portal.In>
    );
};

export default Modal;
