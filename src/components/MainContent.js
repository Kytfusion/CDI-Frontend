import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Welcome from '../pages/Welcome';
import { isUserAuthenticated } from '../config';

const DynamicPage = ({ content }) => content;

const MainContent = ({ config }) => (
    <div style={{ 
        position: 'fixed',
        top: 'min(56px, 8vh)',
        bottom: isUserAuthenticated() ? 'min(56px, 8vh)' : 0,
        left: 0,
        right: 0,
        overflow: 'auto',
        padding: '20px',
        transition: 'left 0.3s ease'
    }} className="d-flex flex-column main-content">
        <div className="flex-grow-1">
            <Routes>
                <Route path="/" element={
                    isUserAuthenticated() 
                        ? <Navigate to={config.pages[0].path} replace /> 
                        : <Navigate to="/welcome" replace />
                } />
                <Route path="/welcome" element={<Welcome />} />
                {config.pages.map((page, index) => (
                    <Route 
                        key={index} 
                        path={page.path} 
                        element={
                            isUserAuthenticated() 
                                ? <DynamicPage content={page.content} />
                                : <Navigate to="/welcome" replace />
                        } 
                    />
                ))}
            </Routes>
        </div>
        <style>{`
            @media (min-width: 768px) {
                .main-content {
                    left: ${isUserAuthenticated() ? 'var(--sidebar-width, 220px)' : '0'} !important;
                }
                .sidebar-collapsed .main-content {
                    left: ${isUserAuthenticated() ? '80px' : '0'} !important;
                }
            }
        `}</style>
    </div>
);

export default MainContent; 