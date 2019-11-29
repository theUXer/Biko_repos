import React, { useState, Component } from 'react';
import { Comments, Search, Button, Image } from './styles';

import { ScrollView, StyleSheet, View, Dimensions } from 'react-native';

import { bikoColor } from '../../helpers/Colors'

import { Card, CardItem, Thumbnail, Text, Icon, Left, Body, Input } from 'native-base';

import { Baba, Bebe, Carro, Eletricista, Emerson, Joao, Predio, Zuleika, Banner1, Banner3 } from '../../helpers/Images'

import { Background } from '../../components/Background';

import Carousel from 'react-native-banner-carousel'




export default function Home(props) {
  let banners = [
    Banner1,
    Banner3,
  ]

  return (
    <>
      <Search placeholder='Pesquise aqui...' />
      <ScrollView>
        <Carousel
          autoplay
          autoplayTimeout={5000}
          loop
          index={0}
          pageSize={Dimensions.get('window').width}
        >
          {banners.map(banner => (
            <>
              <Image source={banner}></Image>
            </>
          ))}
        </Carousel>



        <Card>
          <Button>
            <CardItem>
              <Left>
                <Thumbnail source={Zuleika} />
                <Body>
                  <Text>Zuleika</Text>
                  <Text note>Motorista</Text>
                </Body>
              </Left>
            </CardItem>
          </Button>
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
          <Button>
            <CardItem>
              <Left>
                <Thumbnail source={Baba} />
                <Body>
                  <Text>Maria Luiza</Text>
                  <Text note>Babá</Text>
                </Body>
              </Left>
            </CardItem>
          </Button>
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
          <Button>
            <CardItem>
              <Left>
                <Thumbnail source={Joao} />
                <Body>
                  <Text>João Carlos</Text>
                  <Text note>Eletricista</Text>
                </Body>
              </Left>
            </CardItem>
          </Button>
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
          <Button>
            <CardItem>
              <Left>
                <Thumbnail source={Emerson} />
                <Body>
                  <Text>Emerson Silveira</Text>
                  <Text note>Empreiteiro</Text>
                </Body>
              </Left>
            </CardItem>
          </Button>
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
