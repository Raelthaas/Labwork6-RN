
import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { View, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import { Image } from 'react-native';

const CustomCard = (props) => {
    return (
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                    <Text>{props.article.title}</Text>
                    <Text note>{props.article.author}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
               <Image source={{uri: props.article.urlToImage}} style={{height: 200, width: 200, flex: 1}}/> 
            </CardItem>
            <CardItem>
              <Left>
                <Button rounded onPress={() => {
                    console.log(props.article.url)
                    props.navigation.navigate('WebviewScreen', { url : props.article.url })
                }
                }>
                  <Text>Show More</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
    );
  };

export default CustomCard
