// UserComponent.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../slices/userSlice';

const UserComponent = ({ userId }) => {
  const dispatch = useDispatch();

  // Извлекаем данные из Redux store
  const { user, loading, error } = useSelector((state) => state.user);

  // Делаем запрос при монтировании компонента
  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>No user data</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UserComponent;
