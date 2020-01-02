import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defaultProps = {
    name: '기본 이름'
  };

  static propTypes = {
    name: PropTypes.string,
    faviroteNumber: PropTypes.number.isRequired
  };
  render() {
    const { name, faviroteNumber, children } = this.props;
    return (
      <div>
        안녕하세요, 제 이름은 {name} 입니다.
        <br />
        children 값은 {children}입니다. <br />
        제가 좋아하는 숫자는 {faviroteNumber}입니다.
      </div>
    );
  }
}
/*
const MyComponent = ({ name, faviroteNumber, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name} 입니다.
      <br />
      children 값은 {children}입니다. <br />
      제가 좋아하는 숫자는 {faviroteNumber}입니다.
    </div>
  );
};
MyComponent.defaultProps = {
  name: '기본 이름'
};

MyComponent.propTypes = {
  name: PropTypes.string,
  faviroteNumber: PropTypes.number.isRequired
};

*/

export default MyComponent;
