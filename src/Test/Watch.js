import React from 'react';
// import ReactDOM from 'react-dom';

class Watch extends React.Component{
    state = {
        T : new Date()
    };
    componentDidMount(){
        setInterval( ()=>{
            this.setState({ T : new Date()})
        },1000)
    }

    render(){
        return (
            <>
              <h1> {this.state.T.toLocaleTimeString()}</h1>
            </>

        );
    }


}




export default Watch;
