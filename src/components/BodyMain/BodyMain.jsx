
import React from 'react';
import './BodyMain.css';
import { useLocation } from 'react-router-dom';
import BodyMain from '../../BodyMain';
import Card from './Card';

const FilterDisplay = () => {
    const location = useLocation();
    const state = location.state;
    

    const displayAirConditionItems = () => {
            const airConditionCategory = Object.entries(BodyMain).find(([category]) => category === state);
            console.log(airConditionCategory)
            if (airConditionCategory) {
                return (
                     airConditionCategory[1].map((item, index) => 
                             <Card 
                              key={index}
                              id={item._id}
                              name={item.name}
                              img={item.image}
                              desc={item.description}
                              price={item.price}


                              />
                                
                                    
                                    
                                
                            ))}
                      
        
        return <p>No matching service items found</p>;
    };

    return (
        <div>
            <h2>State Value:</h2>
            <p>{state}</p>
            <h2>Service Items:</h2>
            {displayAirConditionItems()}
        </div>
    );
}

export default FilterDisplay;
