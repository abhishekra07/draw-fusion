import React, { useState } from 'react';
import { Box, Typography, IconButton, Divider } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EditIcon from '@mui/icons-material/Edit';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const LayerPanel = () => {
  const [layers, setLayers] = useState([
    { id: 1, name: 'Rectangle', locked: false, visible: true },
    { id: 2, name: 'Circle', locked: false, visible: true },
    { id: 3, name: 'Text', locked: false, visible: true },
  ]);

  const [selectedLayerIndex, setSelectedLayerIndex] = useState(null);

  const toggleLock = (index) => {
    setLayers((prevLayers) =>
      prevLayers.map((layer, i) =>
        i === index ? { ...layer, locked: !layer.locked } : layer,
      ),
    );
  };

  const toggleVisibility = (index) => {
    setLayers((prevLayers) =>
      prevLayers.map((layer, i) =>
        i === index ? { ...layer, visible: !layer.visible } : layer,
      ),
    );
  };

  const moveLayer = (direction) => {
    if (selectedLayerIndex === null) return;

    const newIndex =
      direction === 'up' ? selectedLayerIndex - 1 : selectedLayerIndex + 1;

    if (newIndex < 0 || newIndex >= layers.length) return;

    const updatedLayers = [...layers];
    const temp = updatedLayers[selectedLayerIndex];
    updatedLayers[selectedLayerIndex] = updatedLayers[newIndex];
    updatedLayers[newIndex] = temp;

    setLayers(updatedLayers);
    setSelectedLayerIndex(newIndex);
  };

  return (
    <Box
      sx={{
        background: '#222',
        color: '#fff',
        padding: '10px',
        position: 'fixed',
        top: '50%',
        transform: 'translateY(-50%)',
        left: '10px',
        borderRadius: '8px',
        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* Layer Panel Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '10px',
        }}
      >
        <Typography variant="h6">Layers</Typography>
        <Box>
          <IconButton
            size="small"
            sx={{ color: 'white' }}
            onClick={() => moveLayer('up')}
          >
            <ArrowUpwardIcon />
          </IconButton>
          <IconButton
            size="small"
            sx={{ color: 'white' }}
            onClick={() => moveLayer('down')}
          >
            <ArrowDownwardIcon />
          </IconButton>
        </Box>
      </Box>

      <Divider />

      {/* Layers List */}
      {layers.map((layer, index) => (
        <Box
          key={layer.id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '6px 0',
            cursor: 'pointer',
            borderRadius: '4px',
            pl: 1,
            pr: 1,
            transition: 'background 0.2s',
            background: selectedLayerIndex === index ? '#333' : 'transparent',
            '&:hover': {
              background: '#444',
            },
          }}
          onClick={() => setSelectedLayerIndex(index)}
        >
          {/* Left: Layer Name & Checkbox */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2">{layer.name}</Typography>
          </Box>

          {/* Right: Edit, Lock, View Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <IconButton
              size="small"
              sx={{ color: 'white' }}
              onClick={(e) => {
                e.stopPropagation();
                console.log(`Edit ${layer.name}`);
              }}
            >
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: 'white' }}
              onClick={(e) => {
                e.stopPropagation();
                toggleLock(index);
              }}
            >
              {layer.locked ? (
                <LockIcon fontSize="small" />
              ) : (
                <LockOpenIcon fontSize="small" />
              )}
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: 'white' }}
              onClick={(e) => {
                e.stopPropagation();
                toggleVisibility(index);
              }}
            >
              {layer.visible ? (
                <VisibilityIcon fontSize="small" />
              ) : (
                <VisibilityOffIcon fontSize="small" />
              )}
            </IconButton>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default LayerPanel;
