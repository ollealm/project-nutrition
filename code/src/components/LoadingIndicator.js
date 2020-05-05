import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const LoadingIndicator = () => {
  const isLoading = useSelector((store) => store.ui.isLoading);
  return (
    <>
      {isLoading && <Loading />}
    </>
  )
}

const Loading = styled.div`
  margin: 150px auto;
  width: 50px;
  height: 50px;
  border: 3px dotted lightgrey;
  border-radius: 50%;
  animation: rotate 5s linear infinite;
  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`