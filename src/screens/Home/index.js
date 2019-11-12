import React, { useState, Component } from 'react';
import { Comments, Search, Button, Image } from './styles';

import { ScrollView } from 'react-native';

import { bikoColor } from '../../helpers/Colors'

import { Card, CardItem, Thumbnail, Text, Icon, Left, Body, Input } from 'native-base';

import { Baba, Bebe, Carro, Eletricista, Emerson, Joao, Predio, Zuleika } from '../../helpers/Images'

import { Background } from '../../components/Background';


export default function Home(props) {
  return (
    <>
      <Search placeholder='Pesquise aqui...' />
      <ScrollView>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={Zuleika} />
              <Body>
                <Text>Zuleika</Text>
                <Text note>Motorista</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={Carro} />
          </CardItem>
          <CardItem>
            <Button>
              <Icon active name="thumbs-up" style={{ color: bikoColor.primary }} />
              <Comments>53 Likes</Comments>
            </Button>
            <Button>
              <Icon active name="chatbubbles" style={{ color: bikoColor.primary }} />
              <Comments>Contact</Comments>
            </Button>
            <Button>
              <Icon active name="heart" style={{ color: bikoColor.primary }} />
              <Comments>Favorite</Comments>
            </Button>
          </CardItem>
        </Card>


        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={Baba} />
              <Body>
                <Text>Maria Luiza</Text>
                <Text note>Babá</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={Bebe} />
          </CardItem>
          <CardItem>
            <Button>
              <Icon active name="thumbs-up" style={{ color: bikoColor.primary }} />
              <Comments>53 Likes</Comments>
            </Button>
            <Button>
              <Icon active name="chatbubbles" style={{ color: bikoColor.primary }} />
              <Comments>Contact</Comments>
            </Button>
            <Button>
              <Icon active name="heart" style={{ color: bikoColor.primary }} />
              <Comments>Favorite</Comments>
            </Button>
          </CardItem>
        </Card>


        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={Joao} />
              <Body>
                <Text>João Carlos</Text>
                <Text note>Eletricista</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={Eletricista} />
          </CardItem>
          <CardItem>
            <Button>
              <Icon active name="thumbs-up" style={{ color: bikoColor.primary }} />
              <Comments>53 Likes</Comments>
            </Button>
            <Button>
              <Icon active name="chatbubbles" style={{ color: bikoColor.primary }} />
              <Comments>Contact</Comments>
            </Button>
            <Button>
              <Icon active name="heart" style={{ color: bikoColor.primary }} />
              <Comments>Favorite</Comments>
            </Button>
          </CardItem>
        </Card>


        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={Emerson} />
              <Body>
                <Text>Emerson Silveira</Text>
                <Text note>Empreiteiro</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={Predio} />
          </CardItem>
          <CardItem>
            <Button>
              <Icon active name="thumbs-up" style={{ color: bikoColor.primary }} />
              <Comments>53 Likes</Comments>
            </Button>
            <Button>
              <Icon active name="chatbubbles" style={{ color: bikoColor.primary }} />
              <Comments>Contact</Comments>
            </Button>
            <Button>
              <Icon active name="heart" style={{ color: bikoColor.primary }} />
              <Comments>Favorite</Comments>
            </Button>
          </CardItem>
        </Card>
      </ScrollView>
    </>



  );
}
