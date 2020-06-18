import React from 'react';
import { useSelector } from 'react-redux';

export const NotFound = () => {
  const notFound = useSelector((store) => store.ui.isNotFound);
  return (
    <>
      {notFound && <div>Code not found, please try again!</div>}
    </>
  )
}