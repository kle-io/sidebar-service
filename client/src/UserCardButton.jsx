import React, { Component } from 'react';

import PropTypes from 'prop-types';

const Btn = window.styled.button`
  font-size: 11px;
  padding: 2px 9px 2px 8px;
  height: 22px;
  line-height: 16px;
  display: inline-block;
  position: relative;
  margin: 0;
  text-indent: 19px;
  // padding: 2px 11px 2px 10px;
  border: 1px solid;
  border-radius: 3px;
  border-color: ${(props) => (props.selected ? '#f50' : '#e5e5e5')};
  background-color: #fff;
  cursor: pointer;
  color: ${(props) => (props.selected ? '#f50' : '#333')};
  white-space: nowrap;
  font-weight: 100;
  text-align: center;
  vertical-align: baseline;
  box-sizing: border-box;


  &:before {
    width: 20px;
    height: 20px;
  }

  & .follow:before {
    background-image: url(${
  (props) => (props.selected
    ? 'https://s3-us-west-1.amazonaws.com/kleio.sidebar/icons/iconmonstr-user-10-24.png'
    : 'https://s3-us-west-1.amazonaws.com/kleio.sidebar/icons/iconmonstr-user-10-240.png')})
    background-size: contain;
    content: "";
    display: block;
    position: absolute;
    background-repeat: no-repeat;
    background-position: 50%;
    width: 20px;
    height: 20px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    left: 4px;
  }
`;

// if selected render different window.styled component

class UserCardButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { selected } = this.state; // Does this make sense?
    const { handleFollowersCount } = this.props;
    this.setState((state, props) => ({ selected: !state.selected }));
    handleFollowersCount();
  }

  render() {
    const { selected } = this.state;

    return (
      <div>
        <Btn
          type="button"
          selected={selected}
          onClick={(e) => {
            e.preventDefault();
            this.handleClick();
          }}
        >
          <span className="follow">Follow</span>
        </Btn>
      </div>
    );
  }
}

UserCardButton.propTypes = {
  handleFollowersCount: PropTypes.func.isRequired,
};

export default UserCardButton;
