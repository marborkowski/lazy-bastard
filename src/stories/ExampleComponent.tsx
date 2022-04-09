import * as React from 'react';

interface Props {
    name: string;
}

export const ExampleComponent: React.FC<Props> = ({ name }) => {
    return <div style={{ background: 'rgb(51 51 51 / 20%)', padding: '10px 20px', borderRadius: '5px', color: '#000', textAlign: 'center' }}>
        Hi {name}
    </div>
}

export default ExampleComponent;