import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserCard from './UserCard';

const DialogContainer = styled.span`
  height: 17px;
`;

class UserDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMousedOver: false,
      position: [],
    };

    this.handleFocus = this.handleFocus.bind(this);
  }

  handleFocus(event) {
    const { isMousedOver } = this.state;

    const posX = event.clientX;
    const posY = event.clientY + 180;
    this.setState({
      isMousedOver: !isMousedOver,
      position: [posX, posY],
    });
  }

  render() {
    const { children, data: userData } = this.props;
    const { isMousedOver, position } = this.state;
    return (
      <div
        onMouseOver={(e) => {
          e.preventDefault();
          this.handleFocus(e);
        }}
        onFocus={(e) => {
          e.preventDefault();
          this.handleFocus(e);
        }}
        onMouseOut={(e) => {
          e.preventDefault();
          this.handleFocus(e);
        }}
        onBlur={(e) => {
          e.preventDefault();
          this.handleFocus(e);
        }}
      >
        <DialogContainer>

          {children}

        </DialogContainer>

        {isMousedOver && <UserCard data={userData} position={position} />}
      </div>
    );
  }
}

UserDialog.propTypes = {
  children: PropTypes.element.isRequired,
  data: PropTypes.shape({

  }).isRequired,
};

export default UserDialog;
