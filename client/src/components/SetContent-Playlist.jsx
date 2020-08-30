import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Stats, Title, Username } from "./StyledContent";
import { formatCount } from "../utils";
import UserDialog from "./UserDialog";

const Playlist = ({ data }) => (
  <>
    <Wrapper>
      <Title>
        <div className="truncate">
          <Username>
            <a href="/">
              <span>
                <UserDialog data={data.user}>{data.user.fullName}</UserDialog>
              </span>
            </a>
          </Username>
          <a href="/">
            <span>{data.title}</span>
          </a>
        </div>
      </Title>
      <Stats>
        {data.likes > 0 && (
          <li>
            <a href="/" className="ministats-likes">
              <span>{formatCount(data.likes)}</span>
            </a>
          </li>
        )}
        {data.reposts > 0 && (
          <li>
            <a href="/" className="ministats-reposts">
              <span>{formatCount(data.reposts)}</span>
            </a>
          </li>
        )}
      </Stats>
    </Wrapper>
  </>
);

Playlist.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    userUsername: PropTypes.string,
    cover: PropTypes.string,
    likes: PropTypes.number,
    reposts: PropTypes.number,
    user: PropTypes.object,
  }),
};

Playlist.defaultProps = {
  data: {},
};

export default Playlist;
