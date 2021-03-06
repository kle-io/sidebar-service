import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Title,
  Username,
} from './StyledContent';
import UserDialog from './UserDialog';

const Album = ({ data }) => (
  <>
    <Wrapper>
      <Title>
        <div>
          <Username>
            <a href="/">
              <span>
                <UserDialog data={data.user}>
                  {data.user.fullName}
                </UserDialog>
              </span>
            </a>
          </Username>
          <a href="/"><span>{data.title}</span></a>
        </div>
      </Title>
      {(data.type || data.year) && (
        <span>
          {data.type}
          &nbsp;·&nbsp;
          {data.year}
        </span>
      )}
    </Wrapper>
  </>
);

Album.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    cover: PropTypes.string,
    userUsername: PropTypes.string,
    type: PropTypes.string,
    year: PropTypes.number,
    user: PropTypes.object,
  }),
};

Album.defaultProps = {
  data: {},
};

export default Album;
