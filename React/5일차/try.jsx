const React = require('react');
const { PureComponent, memo } = React;

const Try = memo(({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});

// class Try extends PureComponent {
//   render() {
//     return (
//       <li>
//         <div>{this.props.tryInfo.try}</div>
//         <div>{this.props.tryInfo.result}</div>
//       </li>
//     );
//   }
// }

module.exports = Try;
