import { motion, useInView } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const _FadeInWrapper = styled(motion.div)``;

interface FadeInWrapperProps {
    children: React.ReactNode;
}

export default function FadeInWrapper(props: FadeInWrapperProps) {
    const [isVisible, setIsVisible] = React.useState<boolean>(false);
    const ref = React.useRef(null);
    const isInView = useInView(ref);

    React.useEffect(() => {
        if (isInView) {
            setIsVisible(true);
        }
    }, [isInView]);

    const variants = {
        visible: {
            opacity: 1,
            scale: 1,
        },
        hidden: {
            opacity: 0,
            scale: 0.93,
        },
    };

    return (
        <_FadeInWrapper
            ref={ref}
            variants={variants}
            initial='hidden'
            animate={isVisible ? 'visible' : ''}
            transition={{
                duration: 0.5,
                ease: 'easeIn',
                type: 'spring',
            }}
        >
            {props.children}
        </_FadeInWrapper>
    );
}
