import React from 'react';
import * as Style from './image.style';

interface ImageProps {
    src: string;
    className?: string;
}

export default function Img({ src, className }: ImageProps) {
    const [loaded, setLoaded] = React.useState(false);

    return (
        <Style._ImageWrapper className={className}>
            {src.length > 1 && (
                <Style._Image
                    loading='lazy'
                    animate={loaded ? 'visible' : ''}
                    onLoad={() => setLoaded(true)}
                    src={src}
                    transition={{
                        duration: 0.3,
                        ease: 'easeIn',
                        type: 'spring,',
                    }}
                />
            )}
        </Style._ImageWrapper>
    );
}
