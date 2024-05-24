import React from 'react';
import { createPortal } from 'react-dom';

interface PortalComponentProps {
    children: React.ReactNode;
}

export default function PortalComponent({ children }: PortalComponentProps) {
    const portalEntry = document.querySelector('#app') as HTMLElement;

    return createPortal(children, portalEntry);
}
