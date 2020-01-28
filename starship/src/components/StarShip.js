import React, { Component } from 'react';
import {StarShipConsumer} from './Context'
import {Card,Button} from 'react-bootstrap'

class StarShip extends Component {
    render() {
        const { name,crew,passengers,hyperdrive_rating} = this.props.starShip;
        return (
            <React.Fragment>
                <div className="mx-auto ">
                <StarShipConsumer>
                    {value =>{
                        return(
                            <Card className="text-left">
                    <Card.Header>{name}</Card.Header>
                            <Card.Body>
                              <Card.Title>{name}</Card.Title>
                              <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                              </Card.Text>
                              <Button variant="primary">More Details</Button>
                            </Card.Body>
                          </Card>

                        )

                    }}
                

                </StarShipConsumer>


                </div>
            
                

        
                

            </React.Fragment>
            

        );
    }
}

export default StarShip;