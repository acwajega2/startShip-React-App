import React, { Component } from 'react';
import axios from 'axios' //--for perforning http requests



//----Creating a starShip Context
const StarShipContext = React.createContext();

/*
1.We shall be using the StarShipContext context API to pass data across all the components using th StarShip Provider
2. We shall wrap the StarShip provider on top of our application

*/ 


//----> Creating the StartShipProvider

class StarShipProvider extends Component{

//----Creating/declaring the state
constructor (props){
    super(props)
    this.state ={
        starShips : [],
        err_msg : "",
        //----pagination variables
        pageNumbers: [],
        currentPage: 1,
        itemsPerPage: 3,
        totalItems : 0
    }
}
//----End of state declaration

componentDidMount(){
    /* */

    //----> Getting thr starShips on Component Mounting
    this.getStarShips()
}


componentDidUpdate(){
    /* */
}


componentWillUnmount(){
/* */
}


//  >>>>>>>>>>>>>>>>>>>   Implementing Functions to be used

//-------> Get StarShips function
getStarShips = () =>{
    //----> we shall use axios to perform a get request and it will the return a promise
    axios.get("https://swapi.co/api/starships/")
    .then(res => {

        console.log(res.data.results)
        //----> Setting the starShip property of the starte
        this.setState(() =>{
            return {
                starShips :res.data.results,
                totalItems: res.data.results.length

            }
        })

    })
}


showMessage =() =>{
    console.log("someone clicked changePage")

}


//-------->  Changing a page-----
changePage =(page) =>{
   
    console.log(page)
   
    this.setState( () =>{
        return {
            currentPage: parseInt(page),
            err_msg : "sdsdsd",
        }
    }

    
    )
  
    

}
//------- End of Changing page

// >>>>>>>>> End of Functions

render(){

    return(
        <StarShipContext.Provider value={{...this.state, 
        getStarShips : this.getStarShips,
        changePage :this.changePage,showMessage :this.showMessage}}>
             {this.props.children}
        </StarShipContext.Provider>
    )
}




}



//----->  Creating the Startship Consumer
const StarShipConsumer = StarShipContext.Consumer;


//------> So we shall export both the starship Provider and Consumer
export {StarShipProvider,StarShipConsumer}