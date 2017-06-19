import * as React from 'react';
import Button from './Components/Button/Button';

export interface Props {
    content: string;
}

export default class MyComponent extends React.Component<Props, {}> {
    render() {
        return <div>{this.props.content} <Button text="ログイン" /> </div>;
    }
}