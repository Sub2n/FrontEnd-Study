import React from 'react';
import WithRouterSample from './WithRouterSample';

const data = {
  subin: {
    name: '수빈',
    description: '리액트를 배우는 개발자'
  },
  yoosun: {
    name: '유선',
    description: '수빈이 친구 유선이'
  }
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default Profile;
