import React from 'react';
import TopToolbar from '../components/TopToolbar';
import LayerPanel from '../components/LayerPanel';
import CanvasArea from '../components/CanvasArea';
import SettingsPanel from '../components/SettingsPanel';
import ZoomWarning from './ZoomWarning';
// import LayerPanelDrag from './LayerPanelDrag';

const AppLayout = () => {
  return (
    <>
      <ZoomWarning />
      <TopToolbar />
      <LayerPanel />
      <CanvasArea />
      <SettingsPanel />
    </>
  );
};

export default AppLayout;
