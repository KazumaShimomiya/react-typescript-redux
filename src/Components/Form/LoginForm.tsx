import * as React from 'react';

export interface Props {
    text?: string;
}

export interface State {
    value: string;
}

export default class LoginForm extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {value: 'test.'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any): void {
        this.setState({value: event.target.value});
    }

    handleSubmit(event: any): void {
        alert('A name was submitted: ' + this.state.value );
        event.preventDefault();
    }

    render(): JSX.Element {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}