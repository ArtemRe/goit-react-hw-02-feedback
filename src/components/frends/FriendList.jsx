import PropTypes from 'prop-types';
import { Friend } from '../../../src/components/frends/Friend';
import css from '../../../src/components/frends/Friend.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};