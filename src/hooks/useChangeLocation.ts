import { useNavigate } from 'react-router-dom';

export default function useChangeLocation<T>() {
    const navigate = useNavigate();

    interface ChangeLocationProps {
        location: string;
        data?: T;
    }

    const changeLocation = function ({ location }: ChangeLocationProps) {
        navigate(location, {
            replace: true,
        });
    };

    return {
        changeLocation,
    };
}
