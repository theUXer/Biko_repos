import React from 'react';
import { AppRegistry, Image, StatusBar } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, List, Profile } from 'native-base';


export default function Home(props) {
  return (
    <>
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'https://www.insertcart.com/wp-content/uploads/2018/05/thumbnail.jpg' }} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{ uri: 'https://www.insertcart.com/wp-content/uploads/2018/05/thumbnail.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>Amazing</Text>
                </Button>
              </Body>
              <Right>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>Amazing</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    </>
  );
}
