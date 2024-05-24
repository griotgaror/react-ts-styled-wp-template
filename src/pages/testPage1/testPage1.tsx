import React from 'react';
import * as Style from './testPage1.style';

import Button from '@/components/button/button';
import useChangeLocation from '@/hooks/useChangeLocation';
import { routes } from '@/router/routes/routes';

export default function TestPage1() {
    const { changeLocation } = useChangeLocation();

    return (
        <Style._TestPage1>
            <h2>Test Page 1</h2>
            <Button
                txt='TestPage 2'
                onClick={() =>
                    changeLocation({
                        location: routes.testRoute2,
                    })
                }
            />
        </Style._TestPage1>
    );
}
