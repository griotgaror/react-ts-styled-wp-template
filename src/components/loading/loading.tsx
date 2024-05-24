import React from 'react';
import styled from 'styled-components';
import DotWaveLoading from './dotWaveLoading';

const _Loading = styled('div')`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
`;

interface LoadingProps {
    message?: string;
}

export default function Loading({ message }: LoadingProps) {
    return (
        <_Loading>
            <DotWaveLoading />
            {message}
        </_Loading>
    );
}
