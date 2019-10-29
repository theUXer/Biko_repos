import React from 'react';
import { AppRegistry, Image, StatusBar } from 'react-native';
import {
  Container, Header, Content, Card, CardItem, Thumbnail, Text,
  Button, Icon, Left, Body, Right, List, Profile, /*ScrollView*/
} from 'native-base';
import Arroz from '../../assets/eletricista.jpg'
import joao from '../../assets/joao.jpg'
import baba from '../../assets/baba.jpg'
import bebe from '../../assets/bebe.jpg'
import zuleika from '../../assets/zuleika.jpg'
import carro from '../../assets/carro.jpg'
import { FlatList, ScrollView } from 'react-native-gesture-handler';



export default function Home(props) {
  return (
    <>

      <ScrollView>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={zuleika} />
              <Body>
                <Text>Zuleika</Text>
                <Text note>Motorista</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={carro} style={{ height: 200, width: null, flex: 1 }} />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" style={{ color: '#ab0993' }} />
                <Text style={{ color: '#ab0993' }}>53 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" style={{ color: '#ab0993' }} />
                <Text style={{ color: '#ab0993' }}>Contact</Text>
              </Button>
            </Body>
            <Right>
              <Button transparent>
                <Icon active name="heart" style={{ color: '#ab0993' }} />
                <Text style={{ color: '#ab0993' }}>Favorite</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>


        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={baba} />
              <Body>
                <Text>Maria Luiza</Text>
                <Text note>Babá</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={bebe} style={{ height: 200, width: null, flex: 1 }} />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" style={{ color: '#ab0993' }} />
                <Text style={{ color: '#ab0993' }}>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" style={{ color: '#ab0993' }} />
                <Text style={{ color: '#ab0993' }}>Contact</Text>
              </Button>
            </Body>
            <Right>
              <Button transparent>
                <Icon active name="heart" style={{ color: '#ab0993' }} />
                <Text style={{ color: '#ab0993' }}>Favorite</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>


        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={joao} />
              <Body>
                <Text>João Carlos</Text>
                <Text note>Eletricista</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={Arroz} style={{ height: 200, width: null, flex: 1 }} />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent >
                <Icon active name="thumbs-up" style={{ color: '#ab0993' }} />
                <Text style={{ color: '#ab0993' }}>103 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" style={{ color: '#ab0993' }} />
                <Text style={{ color: '#ab0993' }}>Contact</Text>
              </Button>
            </Body>
            <Right>
              <Button transparent>
                <Icon active name="heart" style={{ color: '#ab0993' }} />
                <Text style={{ color: '#ab0993' }}>Favorite</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </ScrollView>

    </>

  );
}
