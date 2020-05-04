import React, { useRef, useState, useLayoutEffect } from "react";
import Quagga from "quagga";
import styled from 'styled-components';

export const BarcodeScanner = ({ className, onDetected }) => {
  const [initializing, setInitializing] = useState(true);
  const cameraDivRef = useRef();

  Quagga.onDetected((data) => {
    onDetected(data.codeResult.code);
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
    <Container>
      {initializing && <H2>Starting camera...</H2>}
      <Div ref={cameraDivRef} className={className} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 640px;
`;

const Div = styled.div`
  width: 100%;
  > video {
    width: 100%;
    border: 2px Solid black;
  }
  > canvas {
    height: 0;
  }
`;

const H2 = styled.h2`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%)
`;