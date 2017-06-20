import * as React from 'react';
import Button from './Components/Button/Button';
import LoginForm from './Components/Form/LoginForm';

export interface Props {
    content: string;
}

export default class MyComponent extends React.Component<Props, {}> {
    render(): JSX.Element {
        return (
            <div>{this.props.content}
                <LoginForm />
                <Button text="ログイン" />
            </div>
        );
    }
}