/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import { View } from 'react-native';
import {newsFeed, newsFeedSearch} from './Components/robot'
import CardList from './Components/Cardlist'
import { Container,Content, Header, Item, Input, Button, Text } from 'native-base';
import { useEffect, useState } from 'react';
import DeprecatedViewPropTypes from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedViewPropTypes';

import { Icon } from 'react-native-elements'


const HomeScreen = props => {

  const [newsInfo, setNewsInfo] = useState({});
  let [SearchData, setSearchData] = useState('');

  global.currentScreenIndex = 'HomeScreen';
  //console.log(robots)
  //setNewsInfo([])

  useEffect(() => {
    newsFeed()
    .then(data =>
      setNewsInfo(data)
    );
   }, [])

  return (
    <Container>
      <Header searchBar rounded>
          <Item>
            <Icon name="search" />
            <Input placeholder="Search an article"
            onSubmitEditing={() => {
             newsFeedSearch(SearchData).then(data =>
                setNewsInfo(data));
            }}
            onChangeText={SearchData => setSearchData(SearchData)}
            />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      <Content>
       <CardList robotsList={newsInfo} navigation={props.navigation}></CardList>
      </Content>
    </Container>
  );
};
export default HomeScreen;


