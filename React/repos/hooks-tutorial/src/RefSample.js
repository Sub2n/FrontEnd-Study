import React, { useRef, useEffect } from 'react';

const RefSample = () => {
  const id = useRef(1);
  const setId = n => (id.current = n);
  const printId = () => console.log(id.current);

  useEffect(() => {
    console.log('mounted');
    setInterval(() => {
      printId();
      setId(id.current + 1);
    }, 3000);
  }, []);

  useEffect(() => {
    console.log('effect');
    printId();
  });

  return <div>refsample</div>;
};

export default RefSample;
