import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  console.log('location: ', location);

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true // search 문자열 맨 앞의 ? 생략
  });
  const showDetail = query.detail === 'true'; // 쿼리 파싱 결과는 string
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
