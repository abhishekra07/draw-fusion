import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import RectangleOutlinedIcon from '@mui/icons-material/RectangleOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import RttSharpIcon from '@mui/icons-material/RttSharp';
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';

const TopToolbar = () => {
  return (
    <AppBar
      sx={{
        position: 'fixed',
        top: '5px',
        left: '10px',
        background: '#333',
        width: 'max-content',
        borderRadius: '8px', // Optional: Rounded corners for a nice look
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: 4,
        }}
      >
        {[
          HighlightAltIcon,
          RectangleOutlinedIcon,
          CircleOutlinedIcon,
          HorizontalRuleOutlinedIcon,
          RttSharpIcon,
          RedoIcon,
          UndoIcon,
        ].map((Icon, index) => (
          <IconButton
            key={index}
            sx={{
              color: 'white',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)', // Light hover effect
                transform: 'scale(1.1)', // Slight scaling on hover
              },
            }}
          >
            <Icon />
          </IconButton>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default TopToolbar;
