import React from 'react';

class Test extends React.Component {
    state = {
        counter: 0

    }

    componentDidMount() {
        this.aa();
    }

    aa = () => {
        setInterval(() => {
            this.setState(prevState => {
                return {
                    counter: ++prevState.counter
                }
            })
        }, 1000);
    }

    render() {
        const {counter} = this.state;
        return (
            <>
                <h1>hello counter : {counter}</h1>
            </>
        );
    }


}
export default Test;