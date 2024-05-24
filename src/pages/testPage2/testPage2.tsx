import React from 'react';
import * as Style from './testPage2.style';

import Button from '@/components/button/button';
import useChangeLocation from '@/hooks/useChangeLocation';
import { routes } from '@/router/routes/routes';

export default function TestPage2() {
    const { changeLocation } = useChangeLocation();

    return (
        <Style._TestPage2>
            <h2>Test Page 2</h2>
            <Button
                txt='TestPage 1'
                onClick={() =>
                    changeLocation({
                        location: routes.testRoute1,
                    })
                }
            />
        </Style._TestPage2>
    );
}
