import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const _DotWaveLoading = styled(motion.div).attrs(() => ({
    variants: {
        start: {},
        end: {},
    },
}))`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 10px 0px;
    justify-content: center;
`;

const _DotElement = styled(motion.span).attrs(() => ({
    variants: {
        start: {
            opacity: 0,
            scale: 0.5,
        },
        end: {
            opacity: 1,
            scale: 1,
        },
    },
}))`
    background: ${({ theme }) => theme.colorMode.detailColor2};
    border-radius: 5px;
    height: 15px;
    width: 15px;
`;

export default function DotWaveLoading() {
    const loadingElements = new Array(3).fill('');

    const animationTransition = {
        staggerChildren: 0.3,
    };

    return (
        <_DotWaveLoading
            initial='start'
            animate='end'
            transition={animationTransition}
        >
            {loadingElements.map((_, i) => (
                <_DotElement
                    key={i}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'reverse',
                        duration: 0.5,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </_DotWaveLoading>
    );
}
