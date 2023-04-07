import React from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function CopiedToast( { showToast, onClose } ) {

    return (
        <ToastContainer position="top-end">
            <Toast show={ showToast } onClose={ onClose } bg={ 'success' }>
                <Toast.Header>
                    <img
                        src="https://www.shutterstock.com/image-vector/copy-content-vector-icon-document-260nw-1260468262.jpg"
                        className="rounded me-2"
                        style={ { width: '50px', height: '50px', opacity: '0.5' } }
                        alt=""
                    />
                    <strong className="me-auto">Copied!</strong>
                </Toast.Header>
                <Toast.Body>The URL has been copied to the clipboard</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default CopiedToast;
