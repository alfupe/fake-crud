import React from 'react';
import ReactDOM from 'react-dom';
import Portal from '../Portal/Portal';

const Modal = props => {
    const renderPortal = props => {
        return (
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
        );
    };

    return (
        ReactDOM.createPortal(renderPortal(props), document.body)
    );
};

export default Modal;
