

import React from 'react';
import CustomCard from './Card';
import { View, Text, ListItem, List } from 'native-base';


const CardList = (props) => {

  if (props.robotsList.map != undefined) {
    const cardsArray = props.robotsList.map(robot => (
      <ListItem>
      <CustomCard
        navigation={props.navigation}
        article={robot} />
      </ListItem>
    ));
  
    return (
      <List>
        {cardsArray}
      </List>
    );
  }
  else {
    return (
      <List></List>
    )
  }
  };

export default CardList