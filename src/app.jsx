import React, { Component } from 'react';

export class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            test1: null,
            test2: null,
        }
    }

    componentDidMount() {
        import(/* webpackChunkName: "test1" */ 'app/test1/index')
            .then(file => this.setState({ test1: file.default }));

        import(/* webpackChunkName: "test2" */ 'app/test2/index')
            .then(file => this.setState({ test2: file.default }));
    }

    render() {
        const forTheProps = 'some filler text';
        return (
            <div>
                <div>
                    {this.state.test1
                        // Replace forTheProps with a bogus reference
                        ? <this.state.test1 someProp={forTheProps} />
                        : null}
                </div>
                <div>
                    {this.state.test2
                        ? <this.state.test2 someProp="filler text" />
                        : null}
                </div>
            </div>
        );
    }
}

export default App;
