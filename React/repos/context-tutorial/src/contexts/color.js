import React, { createContext, useState } from 'react';

const ColorContext = createContext({
  state: { color: 'black', subcolor: 'red' },
  actions: {
    setColor: () => {},
    setSubColor: () => {}
  }
});

// <ColorProvider></ColorProvider> 사이의 Element를 렌더링하며 Context.Provider의 value를
// useState로 정의한 value로 전달
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubColor] = useState('red');

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubColor }
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// const ColorConsumer = ColorContext.Consumer;
const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;
