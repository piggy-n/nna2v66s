import { useState } from 'react';
import { Icon } from '../packages/components/Icon';

function App() {
    const [state] = useState(0);
    return (
        <>
            {state}
            <Icon name={'关闭'} fill={'blue'} />
        </>
    );
}

export default App;
