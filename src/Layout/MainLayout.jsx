import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MainLayout = () => {
    const {name, age} = useContext(AuthContext)

    return (
        <div>
            {name}
            {age}
        </div>
    );
};

export default MainLayout;