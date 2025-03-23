import React, { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Divider,
  IconButton,
  TextField,
} from '@mui/material';
import AlignHorizontalCenterIcon from '@mui/icons-material/AlignHorizontalCenter';
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import OpacityIcon from '@mui/icons-material/Opacity';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import PaletteIcon from '@mui/icons-material/Palette';

const SettingsPanel = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [color, setColor] = useState('#ff0000'); // Default color

  return (
    <Box
      sx={{
        maxWidth: '250px',
        background: '#222',
        color: '#fff',
        padding: '10px',
        position: 'fixed',
        top: '50%',
        transform: 'translateY(-50%)',
        right: '10px',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '5px',
      }}
    >
      {/* Tabs: Settings & Styles */}
      <Tabs
        value={activeTab}
        onChange={(e, newValue) => setActiveTab(newValue)}
        textColor="inherit"
        indicatorColor="primary"
        variant="fullWidth"
        sx={{
          '& .MuiTabs-indicator': { backgroundColor: '#00bcd4' },
          '& .MuiTab-root': { color: '#fff', textTransform: 'none' },
          '& .Mui-selected': { color: '#00bcd4' },
        }}
      >
        <Tab label="Settings" />
        <Tab label="Styles" />
      </Tabs>

      <Divider sx={{ backgroundColor: '#444', margin: '10px 0' }} />

      {/* Content based on the active tab */}
      {activeTab === 0 ? (
        <Box sx={{ padding: '10px' }}>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            Constraints
          </Typography>

          {/* Alignment Buttons */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              size="small"
              sx={{ color: 'white', background: '#333' }}
            >
              <AlignHorizontalCenterIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: 'white', background: '#333' }}
            >
              <AlignVerticalCenterIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Position Inputs - Grouped in Pairs */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 2,
            }}
          >
            <TextField
              label="X"
              variant="outlined"
              size="small"
              sx={{
                width: '48%',
                background: '#333',
                borderRadius: 1,
                input: { color: 'white' },
                label: { color: '#aaa' },
              }}
            />
            <TextField
              label="Y"
              variant="outlined"
              size="small"
              sx={{
                width: '48%',
                background: '#333',
                borderRadius: 1,
                input: { color: 'white' },
                label: { color: '#aaa' },
              }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 1,
            }}
          >
            <TextField
              label="Width"
              variant="outlined"
              size="small"
              sx={{
                width: '48%',
                background: '#333',
                borderRadius: 1,
                input: { color: 'white' },
                label: { color: '#aaa' },
              }}
            />
            <TextField
              label="Height"
              variant="outlined"
              size="small"
              sx={{
                width: '48%',
                background: '#333',
                borderRadius: 1,
                input: { color: 'white' },
                label: { color: '#aaa' },
              }}
            />
          </Box>

          {/* Opacity, Border Radius, Rotation with Icons */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              marginBottom: 1,
              marginTop: 1,
            }}
          >
            <OpacityIcon sx={{ color: 'white' }} />
            <TextField
              label="Opacity"
              type="number"
              variant="outlined"
              size="small"
              sx={{
                width: '100%',
                background: '#333',
                borderRadius: 1,
                input: { color: 'white' },
                label: { color: '#aaa' },
              }}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              marginBottom: 1,
            }}
          >
            <FormatSizeIcon sx={{ color: 'white' }} />
            <TextField
              label="Border Radius"
              type="number"
              variant="outlined"
              size="small"
              sx={{
                width: '100%',
                background: '#333',
                borderRadius: 1,
                input: { color: 'white' },
                label: { color: '#aaa' },
              }}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              marginBottom: 1,
            }}
          >
            <RotateRightIcon sx={{ color: 'white' }} />
            <TextField
              label="Rotation"
              type="number"
              variant="outlined"
              size="small"
              sx={{
                width: '100%',
                background: '#333',
                borderRadius: 1,
                input: { color: 'white' },
                label: { color: '#aaa' },
              }}
            />
          </Box>
        </Box>
      ) : (
        <Box sx={{ padding: '10px' }}>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            Styles
          </Typography>

          {/* Opacity, Border Radius, Rotation with Icons */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              marginBottom: 1,
            }}
          >
            <OpacityIcon sx={{ color: 'white' }} />
            <TextField
              label="Opacity"
              type="number"
              variant="outlined"
              size="small"
              sx={{
                width: '100%',
                background: '#333',
                borderRadius: 1,
                input: { color: 'white' },
                label: { color: '#aaa' },
              }}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              marginBottom: 1,
            }}
          >
            <FormatSizeIcon sx={{ color: 'white' }} />
            <TextField
              label="Border Radius"
              type="number"
              variant="outlined"
              size="small"
              sx={{
                width: '100%',
                background: '#333',
                borderRadius: 1,
                input: { color: 'white' },
                label: { color: '#aaa' },
              }}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              marginBottom: 1,
            }}
          >
            <RotateRightIcon sx={{ color: 'white' }} />
            <TextField
              label="Rotation"
              type="number"
              variant="outlined"
              size="small"
              sx={{
                width: '100%',
                background: '#333',
                borderRadius: 1,
                input: { color: 'white' },
                label: { color: '#aaa' },
              }}
            />
          </Box>

          {/* Divider */}
          <Divider sx={{ backgroundColor: 'gray', my: 2 }} />

          {/* Color Picker */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PaletteIcon sx={{ color: 'white' }} />
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              style={{
                width: 40,
                height: 30,
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
              }}
            />
            <TextField
              value={color}
              variant="outlined"
              size="small"
              sx={{
                width: '100%',
                background: '#333',
                borderRadius: 1,
                input: { color: 'white' },
              }}
              onChange={(e) => setColor(e.target.value)}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SettingsPanel;
