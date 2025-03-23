import React from 'react';
import DraggablePanel from './DraggablePanel';
import { Typography } from '@mui/material';

const LayerPanelDrag = () => {
  return (
    <DraggablePanel>
      <Typography variant="h6">Layers</Typography>
      <Typography variant="body2">🔲 Rectangle</Typography>
      <Typography variant="body2">⚫ Circle</Typography>
      <Typography variant="body2">🔠 Text</Typography>
    </DraggablePanel>
  );
};

export default LayerPanelDrag;
