import React, { Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class TurnDialog extends React.Component {
  constructor(props, state) {
    super(props, state);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Fragment>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
            Your Move!
          </ModalHeader>
          <ModalBody>
            TRADE CUBES UI
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Cancel</Button>
            <Button color="success" onClick={this.toggle}>Finish</Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}