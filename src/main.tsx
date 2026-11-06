import React from 'react';
import ReactDOM from 'react-dom/client';
import { App as AntApp, ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import { theme } from './theme';
import Dashboard from './Dashboard';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={theme} locale={ruRU}>
      <AntApp><Dashboard /></AntApp>
    </ConfigProvider>
  </React.StrictMode>,
);
