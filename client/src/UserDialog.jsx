import React, { Component } from 'react';
import styledcomponents from 'styled-components';
import PropTypes from 'prop-types';

import UserCard from './UserCard';

const styled = window.styled ? window.styled : styledcomponents;
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

    this.userNameSpan = React.createRef();
    this.handleFocus = this.handleFocus.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.timer = null;
  }

  handleFocus() {
    this.setState({ isMousedOver: true });
    if (this.timer) { clearTimeout(this.timer); }
  }

  handleLeave() {
    this.timer = setTimeout(() => {
      this.setState({ isMousedOver: false });
    }, 200);
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
            onMouseLeave={(e) => {
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
