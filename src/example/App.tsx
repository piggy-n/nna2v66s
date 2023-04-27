import { useState } from 'react';
import { Icon } from '@/packages';
import { Icon as Icon2 } from '@/packages/components';

function App() {
    const [state] = useState(0);
    return (
        <>
            {state}
            <Icon name={'关闭'} fill={'blue'} />
            <Icon2 name={'画中画'} />
        </>
    );
}

export default App;
