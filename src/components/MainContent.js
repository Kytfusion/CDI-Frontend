import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const DynamicPage = ({ content }) => content;

const MainContent = ({ config }) => (
    <div style={{ 
        position: 'fixed',
        top: 'min(56px, 8vh)',
        bottom: 'min(56px, 8vh)',
        left: 0,
        right: 0,
        overflow: 'auto',
        padding: '20px'
    }}>
        <Routes>
            <Route path="/" element={<Navigate to={config.pages[0].path} replace />} />
            {config.pages.map((page, index) => (
                <Route 
                    key={index} 
                    path={page.path} 
                    element={<DynamicPage content={page.content} />} 
                />
            ))}
        </Routes>
    </div>
);

export default MainContent; 