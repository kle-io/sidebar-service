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
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
      }
    };

    this.userNameSpan = React.createRef();

    this.handleFocus = this.handleFocus.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleFocus() {
    this.setState({ isMousedOver: true });
  }

  handleLeave() {
    this.setState({ isMousedOver: false });
  }

  render() {
    const { children, data: userData } = this.props;
    const { isMousedOver, position } = this.state;
    return (
      <>
        <DialogContainer>
          <div
            onMouseEnter={(e) => {
              e.preventDefault();
              e.stopPropagation();
              this.handleFocus();
            }}
            onFocus={(e) => {
              e.preventDefault();
              this.handleFocus();
            }}
            onMouseLeave={(e) => {
              e.preventDefault();
              this.handleLeave();
            }}
            onBlur={(e) => {
              e.preventDefault();
              this.handleLeave();
            }}
          >
            <span ref={this.userNameSpan}>
              {children}
            </span>
          </div>
        </DialogContainer>
        {isMousedOver && (
          <UserCard
            data={userData}
            position={position}
            handleFocus={this.handleFocus}
            handleLeave={this.handleLeave}
          />
        )}
      </>
    );
  }
}

UserDialog.propTypes = {
  children: PropTypes.element.isRequired,
  data: PropTypes.shape({
  }).isRequired,
};

export default UserDialog;
