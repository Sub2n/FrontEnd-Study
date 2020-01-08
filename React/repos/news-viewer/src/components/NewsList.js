import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr&${query}apiKey=e05f9c2712f146388566ff822ecc8a44`,
    );
  });

  // 대기 중
  if (loading) return <NewsListBlock>대기 중...</NewsListBlock>;

  // 아직 response값 설정 안 됨
  if (!response) return null;

  // 에러 발생
  if (error) return <NewsListBlock>에러 발생!</NewsListBlock>;

  // articles 값이 유효할 때
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
