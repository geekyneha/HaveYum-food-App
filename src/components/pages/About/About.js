import React from 'react';

class About extends React.Component{
    constructor (props){
        super(props)

    }
    


   
    render(){
        {
            const {names} =this.props;
        }
        return (
           
            <>
             
            <div>{names} 
            </div>
            
            </>
        )
    }
}

export default About;