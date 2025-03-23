import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import * as fabric from 'fabric';
import { useState } from 'react';

const CanvasArea = () => {
  const canvasRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth - 230 - 290,
    height: window.innerHeight - 80,
  });

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: '#fff',
    });

    canvas.add(
      new fabric.Rect({
        left: 50,
        top: 50,
        width: 100,
        height: 100,
        fill: 'red',
      }),
    );

    return () => {
      canvas.dispose();
    };
  }, []);

  return (
    <Box
      sx={{
        marginLeft: '230px', // Offset for left panel
        marginTop: '80px', // Offset for top toolbar
        marginRight: '290px', // Offset for right settings panel
        height: 'calc(100vh - 70px)',
        background: '#f4efef',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <canvas
        ref={canvasRef}
        id="canvas"
        width={canvasSize.width}
        height={canvasSize.height}
      />
    </Box>
  );
};

export default CanvasArea;
