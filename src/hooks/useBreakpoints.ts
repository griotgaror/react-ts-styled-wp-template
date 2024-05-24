import { mediaBreakpoints } from '@/style/mediaBreakpoints';
import { useMediaQuery } from 'react-responsive';

export const createMediaBreakpoint = (screen: string) =>
    useMediaQuery({
        query: `(min-width: ${screen})`,
    });

export const useBreakpoint = () => ({
    mobile_s: createMediaBreakpoint(mediaBreakpoints.mobile_s),
    mobile_m: createMediaBreakpoint(mediaBreakpoints.mobile_m),
    mobile_m2: createMediaBreakpoint(mediaBreakpoints.mobile_m2),
    mobile_l: createMediaBreakpoint(mediaBreakpoints.mobile_l),

    tablet_s: createMediaBreakpoint(mediaBreakpoints.tablet_s),
    tablet_m: createMediaBreakpoint(mediaBreakpoints.tablet_m),
    tablet_l: createMediaBreakpoint(mediaBreakpoints.tablet_l),

    largeScreen: createMediaBreakpoint(mediaBreakpoints.largeScreen),
    extraLargeScreen: createMediaBreakpoint(mediaBreakpoints.extraLargeScreen),
});
