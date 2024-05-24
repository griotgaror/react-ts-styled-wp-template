import { motion } from 'framer-motion';
import styled from 'styled-components';

export const _ImageWrapper = styled('figure')`
    &,
    * {
        border-radius: ${({ theme }) => theme.layout.borderRadius};
    }
    display: flex;

    &.small {
        --size: 24.5px;
        height: var(--size);
        width: var(--size);
    }
`;

export const _Image = styled(motion.img).attrs({
    initial: 'hidden',
    variants: {
        visible: {
            opacity: 1,
            scale: 1,
        },
        hidden: {
            opacity: 0,
            scale: 0.98,
        },
    },
})`
    width: 100%;
    border: 0px;
`;
