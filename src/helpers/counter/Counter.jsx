import React, { useEffect, useState } from 'react';

//styling
import './counter.scss';

const Counter = props => {
  // label of counter
  // number to increment to
  // duration of count in seconds
  const {label, number, duration, icon, label2} = props.data

  // number displayed by component
  const [count, setCount] = useState("0")

  useEffect(() => {
    let start = 0;
    // first three numbers from props
    const end = parseInt(number.substring(0,3))
    // if zero, return
    if (start === end) return;

    // find duration per increment
    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    // timer increments start counter 
    // then updates count
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3))
      if (start === end) clearInterval(timer)       
    }, incrementTime);

    // dependency array
  }, [number, duration]);

  return (
    <div className="Count">
      <img className='aboutUs__icon' src={icon} alt="icons for about us" />
      <h3 className='aboutUs__text'>
        <i>{label} <h3 className='aboutUs__text__counter'>{count}</h3> {label2}</i>
      </h3>
    </div>
  );
}

export default Counter;