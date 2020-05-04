import React, { useRef, useState, useLayoutEffect } from "react";
import Quagga from "quagga";
import styled from 'styled-components';

export const BarcodeScanner = ({ className, onDetected }) => {
  const [initializing, setInitializing] = useState(true);
  const cameraDivRef = useRef();

  Quagga.onDetected((data) => {
    onDetected(data.code);
  });

  useLayoutEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: cameraDivRef.current,
        },
        decoder: {
          readers: ["ean_reader"],
        },
      },
      (err) => {
        if (err) {
          console.error("Failed to initialize reader", err);
          return;
        }
        Quagga.start();
        setInitializing(false);
      }
    );

    return () => {
      Quagga.stop();
    };
  }, []);

  return (
<<<<<<< HEAD
    <>
      {initializing && <div>Starting camera...</div>}
      <div ref={cameraDivRef} className={className} />
    </>
=======
    <Container>
      {initializing && <H2>Starting camera</H2>}
      <Div ref={cameraDivRef} className={className} />
    </Container>
>>>>>>> added color guide
  );
};

const Container = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 64px;
  max-height: 48px;
  /* background: black; */
  /* width: 640px;
  height: 480px; */
`;

const Div = styled.div`
  background: blue;
  width: 100%;
  height: 100%;
  max-width: 64px;
  max-height: 48px;
`;

const H2 = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
`;