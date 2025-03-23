import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const ZoomWarning = () => {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const checkZoom = () => {
      const zoom = Math.round((window.outerWidth / window.innerWidth) * 100);
      setZoomLevel(zoom);
      setShowWarning(zoom > 70); // Show warning if zoom > 70%
    };

    checkZoom();
    window.addEventListener('resize', checkZoom);
    return () => window.removeEventListener('resize', checkZoom);
  }, []);

  return (
    <Box>
      {showWarning && (
        <Box
          sx={{
            position: 'fixed',
            top: 10,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'red',
            color: 'white',
            padding: '5px 15px',
            borderRadius: '5px',
            zIndex: 1000,
          }}
        >
          <Typography variant="body2">
            ⚠️ Please set browser zoom to 70% or lower for best experience!
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ZoomWarning;
