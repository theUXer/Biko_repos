import React, {useState} from 'react';
import styles from './styles';

import { Image, TouchableOpacity, ScrollView } from 'react-native';

import { bikoColor } from '../../helpers/Colors'

import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import { Baba, Bebe, Carro, Eletricista, Emerson, Joao, Predio, Zuleika } from '../../helpers/Images'

export default function Home(props) {
  
  return (
    <>
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
            <Image source={Carro} style={{ height: 200, width: null, flex: 1 }} />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" style={{ color: bikoColor.primary}} />
                <Text style={styles.text}>53 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" style={{ color: bikoColor.primary }} />
                <Text style={styles.text}>Contact</Text>
              </Button>
            </Body>
            <Right>
              <Button transparent>
                <Icon active name="heart" style={{ color: bikoColor.primary }} />
                <Text style={styles.text}>Favorite</Text>
              </Button>
            </Right>
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
            <Image source={Bebe} style={{ height: 200, width: null, flex: 1 }} />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" style={{ color: bikoColor.primary }} />
                <Text style={styles.text}>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" style={{ color: bikoColor.primary }} />
                <Text style={styles.text}>Contact</Text>
              </Button>
            </Body>
            <Right>
              <Button transparent>
                <Icon active name="heart" style={{ color: bikoColor.primary }} />
                <Text style={styles.text}>Favorite</Text>
              </Button>
            </Right>
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
            <Image source={Eletricista} style={{ height: 200, width: null, flex: 1 }} />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent >
                <Icon active name="thumbs-up" style={{ color: bikoColor.primary }} />
                <Text style={styles.text}>103 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" style={{ color:  bikoColor.primary }} />
                <Text style={styles.text}>Contact</Text>
              </Button>
            </Body>
            <Right>
              <Button transparent>
                <Icon active name="heart" style={{ color:  bikoColor.primary }} />
                <Text style={styles.text}>Favorite</Text>
              </Button>
            </Right>
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
            <Image source={Predio} style={{ height: 200, width: null, flex: 1 }} />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent >
                <Icon active name="thumbs-up" style={{ color:  bikoColor.primary }} />
                <Text style={styles.text}>81 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" style={{ color:  bikoColor.primary }} />
                <Text style={styles.text}>Contact</Text>
              </Button>
            </Body>
            <Right>
              <Button transparent>
                <Icon active name="heart" style={{ color:  bikoColor.primary }} />
                <Text style={styles.text}>Favorite</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </ScrollView>

    </>

  );
}
