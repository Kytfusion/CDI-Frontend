import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Settings from './Settings';

const DynamicPage = ({ content }) => content;

const MainContent = ({ config }) => (
    <div style={{ 
        position: 'fixed',
        top: 'min(56px, 8vh)',
        bottom: 'min(56px, 8vh)',
        left: 0,
        right: 0,
        overflow: 'auto',
        padding: '20px',
        transition: 'left 0.3s ease'
    }} className="d-flex flex-column main-content">
        <div className="flex-grow-1">
            <Routes>
                <Route path="/" element={<Navigate to={config.pages[0].path} replace />} />
                {config.pages.map((page, index) => (
                    <Route 
                        key={index} 
                        path={page.path} 
                        element={<DynamicPage content={page.content} />} 
                    />
                ))}
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </div>
        <style>{`
            @media (min-width: 768px) {
                .main-content {
                    left: var(--sidebar-width, 220px) !important;
                }
                .sidebar-collapsed .main-content {
                    left: 80px !important;
                }
            }
        `}</style>
    </div>
);

export default MainContent; 