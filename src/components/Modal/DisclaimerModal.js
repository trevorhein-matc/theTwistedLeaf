import React from 'react'
import Modal from 'react-responsive-modal'

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

class DisclaimerModal extends React.Component {
    state = {
        open: true
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <div style={styles}>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h2>Are you old enough to purchase cbd products?</h2>
                    <button onClick={this.onCloseModal}>Of Legal Age</button>
                </Modal>
            </div>
        )
    }
}

export default DisclaimerModal;