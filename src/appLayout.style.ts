import { motion } from 'framer-motion';
import styled from 'styled-components';

export const _AppLayout = styled(motion.div).attrs({
    initial: 'hidden',
    variants: {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
    },
})`
    background: ${({ theme }) => theme.colorMode.bgPrimary};
    height: 100%;
    width: 100%;
    display: grid;
    position: absolute;
    grid-template-rows: max-content 1fr;
`;

export const _MainContent = styled('main')`
    overflow-y: scroll;
`;
