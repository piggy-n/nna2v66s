import { useState } from 'react';

function App() {
    const [state] = useState(0);
    return (
        <>
            {state}
        </>
    );
}

export default App;
