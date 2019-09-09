import React, {Component} from 'react';
import {Text, Card, CardItem, Icon, Body} from 'native-base';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


import {Image} from 'react-native';

import {styles} from '../styles/CardStyle';

export class MainShowCardComponent extends Component {
  constructor(props) {
    super(props);
    MaterialCommunityIcons.loadFont();
    MaterialIcons.loadFont();
  }

  render() {
    const {name, averageRating, image, id} = this.props.item;
    let ratingStars = [];
    if (averageRating == null) {
      ratingStars.push(
        <Icon
          type="MaterialCommunityIcons"
          name="star-off"
          style={styles.iconnotfound}
        />,
      );
    } else {
      for (let index = 0; index < averageRating - 1; index++) {
        ratingStars.push(
          <Icon type="MaterialIcons" name="star" style={styles.icon} />,
        );
      }
      if (averageRating % 1 > 0) {
        ratingStars.push(
          <Icon type="MaterialIcons" name="star-half" style={styles.icon} />,
        );
      } else {
        ratingStars.push(
          <Icon type="MaterialIcons" name="star" style={styles.icon} />,
        );
      }
      ratingStars.push(
        <Text style={styles.averagerating}>
          {'  '}
          {averageRating}
        </Text>,
      );
    }
    element = (
      <Card>
        <CardItem cardBody style={styles.card}>
          <Image source={{uri: image}} style={styles.cardimage} />
        </CardItem>
        <CardItem style={styles.card}>
          <Body>
            <Text style={styles.cardtitle}>{name}</Text>
          </Body>
        </CardItem>
        <CardItem style={styles.card}>
          <Body style={styles.cardbody}>{ratingStars}</Body>
        </CardItem>
      </Card>
    );
    return (
      <TouchableOpacity
        onPress={this.props.cardClicked.bind(this, this.props.item)}>
        {element}
      </TouchableOpacity>
    );
  }
}

export default MainShowCardComponent;
