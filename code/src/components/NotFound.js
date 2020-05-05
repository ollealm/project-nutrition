import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const NotFound = () => {
  const notFound = useSelector((store) => store.ui.isNotFound);
  return (
    <>
      {notFound && <TryAgain>Code not found, please try again!</TryAgain>}
    </>
  )
}

const TryAgain = styled.div`
`