import React, { useState, useRef } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const DraggablePanel = ({ children, defaultPosition = { x: 10, y: 100 } }) => {
  const panelRef = useRef(null);
  const [position, setPosition] = useState(defaultPosition);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    if (e.target.dataset.draghandle !== 'true') return; // Only allow dragging from the handle
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => setDragging(false);

  return (
    <Box
      ref={panelRef}
      sx={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        background: '#222',
        color: '#fff',
        padding: '10px',
        width: 220,
        cursor: 'default',
        userSelect: 'none',
        borderRadius: '4px',
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Drag Handle */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#333',
          padding: '5px',
          cursor: 'grab',
        }}
        onMouseDown={handleMouseDown}
        data-draghandle="true"
      >
        <Typography variant="body2">Panel</Typography>
        <IconButton
          size="small"
          sx={{ color: 'white', cursor: 'grab' }}
          data-draghandle="true"
        >
          <DragIndicatorIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Panel Content */}
      <Box sx={{ padding: '10px' }}>{children}</Box>
    </Box>
  );
};

export default DraggablePanel;
