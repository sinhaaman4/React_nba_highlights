import React from 'react'
import Feature from './featured'

import Subscription from './subscription'

import Blocks from './block'

const URL_HOME ='http://localhost:3004/home'

class Home extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            home:''
        }

    }

    componentDidMount(){
        fetch(URL_HOME,{method:'GET'})
        .then(response=>response.json())
        .then(json=>{
            this.setState({
                home:json
            })
        })
    }

    render(){
        return(
            <div>
                <Feature slides={this.state.home.slider}/>
                <Subscription/>
                <Blocks blocks={this.state.home.blocks}/>
            </div>
        )
    }
}

export default Home;