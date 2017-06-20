import * as React from 'react';

export interface Props {
    text: string;
}

export default class Button extends React.Component<Props, {}> {
    render() {
        return <button>{this.props.text}</button>;
    }
}