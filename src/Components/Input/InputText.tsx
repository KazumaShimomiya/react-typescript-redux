import * as React from 'react';

export interface Props {
    text: string;
}

export default class InpuText extends React.Component<Props, {}> {
    render() {
        return <input type="text" />;
    }
}