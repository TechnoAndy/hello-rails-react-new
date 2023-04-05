import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetings } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispacth = useDispatch();

  useEffect(() =>{
    dispacth(getGreetings());
  }, []);
  const greeting = useSelector((state) => state.greeting);

  return <h1 className='msg'>{greeting.greeting}</h1>

};

export default Greeting;