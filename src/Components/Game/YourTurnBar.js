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
      <div style={{ padding: '10px', background: '#d3e4ff' }}>
        <strong>Its your turn, time to make some moves: </strong>
        <Button style={{ marginLeft: '10px' }} color="success" onClick={this.toggle}>Take Turn</Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
            Your Move!
          </ModalHeader>
          <ModalBody>
            Its your turn, What would you like to do? You have two choices, trade stock
            or place (up to) five cubes of a single color.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Place Cubes</Button>
            <Button color="primary" onClick={this.toggle}>Trade Cubes</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}