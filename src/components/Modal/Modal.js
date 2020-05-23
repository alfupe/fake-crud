import React from 'react';
import ReactDOM from 'react-dom';
import Portal from '../Portal/Portal';
import './modal.scss';

const Modal = props => {
    const renderPortal = props => {
        return (
            <div className="modal-container">
                <section className="modal">
                    <header className="modal__header">
                        <h1 className="modal__title">
                            {props.title}
                        </h1>
                        <div className="modal__close"
                             onClick={event => props.onClose(false)}
                        />
                    </header>
                    <div className="modal__body">
                        {props.children}
                    </div>
                    <footer className="modal__footer">
                        <Portal.Out id="modal-actions" />
                    </footer>
                </section>
            </div>
        );
    };

    return (
        ReactDOM.createPortal(renderPortal(props), document.body)
    );
};

export default Modal;
