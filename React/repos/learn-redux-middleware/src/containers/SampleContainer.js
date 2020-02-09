import React from 'react';
import Sample from '../components/Sample';
import { connect } from 'react-redux';
import { getPost, getUsers } from '../modules/sample';
import { useEffect } from 'react';

const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers
}) => {
  useEffect(() => {
    getPost(1);
    getUsers();
  }, [getPost, getUsers]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: loading.GET_POST,
    loadingUsers: loading.GET_USERS
  }),
  {
    getPost,
    getUsers
  }
)(SampleContainer);
