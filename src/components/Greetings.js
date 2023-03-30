import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/greetings/greetings';

const Greetings = () => {
/* Load Redux State */
  const greetings = useSelector((state) => state.greeting);
  // *********************************

  /* Setup Redux dispatch */
  const dispatch = useDispatch();

  /* Clean - Redux movies store */
  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <>
      <h2>Random Greetings</h2>
      <p>{ greetings }</p>
    </>
  );
};

export default Greetings;
