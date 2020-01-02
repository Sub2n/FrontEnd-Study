const React = require('react');
const { Component } = React;

// constructor (생성) -> render -> ref -> componentDidMount -> (setState/props 바뀔 때 ->  shouldComponentUpdate ->render -> componentDidUpdate) -> (부모 컴포넌트에서 제거될 때 -> componentWillUnMount) -> 소멸

const rspCoords = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

class RSP extends Component {
  state = {
    result: '',
    score: 0,
    imgCoord: rspCoords.바위,
  };

  interval;

  componentDidMount() {
    // 처음 Render가 성공적으로 수행되고 딱 한 번 실행됨
    // Angular의 OnInit

    this.interval = setInterval(() => {
      const { imgCoord } = this.state;
      if (imgCoord === rspCoords.바위) {
        this.setState({
          imgCoord: rspCoords.가위,
        });
      } else if (imgCoord === rspCoords.가위) {
        this.setState({
          imgCoord: rspCoords.보,
        });
      } else if (imgCoord === rspCoords.보) {
        this.setState({
          imgCoord: rspCoords.바위,
        });
      }
    });
  }

  componentDidUpdate() {
    // 재렌더링 후에 실행됨
  }

  componentWillUnMount() {
    // Component가 제거되기 직전
    // Angular의 OnDestroy
  }

  onClickBtn = () => {};

  render() {
    const { result, score, imgCoord } = this.state;
    const onClickBtn = this.onClickBtn;

    return (
      <>
        <div
          id="computer"
          style={{
            background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
          }}
        />
        <div>
          <button id="rock" className="btn" onClick={onClickBtn('바위')}>
            바위
          </button>
          <button id="scissor" className="btn" onClick={onClickBtn('가위')}>
            가위
          </button>
          <button id="paper" className="btn" onClick={onClickBtn('보')}>
            보
          </button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

module.exports = RSP;
