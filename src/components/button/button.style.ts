import { breakpoint } from '@/style/styledBreakpoints';
import styled from 'styled-components';

export const _Button = styled('button')<{ color?: string }>`
    /* background: ${({ theme, color }) => color || theme.colorMode.detailColor2}; */
    background: ${({ theme }) => theme.colorMode.bgSecondary};
    border: 1px solid ${({ theme }) => theme.colorMode.detailColor2};
    border-radius: ${({ theme }) => theme.layout.borderRadius};
    height: ${({ theme }) => theme.layout.buttonSize};
    padding: 0px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.1s linear;

    &.small {
        background: ${({ theme, color }) => color || theme.colorMode.bgPrimary};
        width: ${({ theme }) => theme.layout.buttonSize};
        height: ${({ theme }) => theme.layout.buttonSize};

        &:hover {
            opacity: 0.5;
        }
    }

    &.disabled {
        pointer-events: none;

        &,
        p {
            opacity: 0.5;
        }
    }

    ${breakpoint.largeScreen} {
        &:hover {
            opacity: 0.75;
            scale: 0.98;
        }
    }
`;
