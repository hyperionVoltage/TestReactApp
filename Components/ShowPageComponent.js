import React, {Component} from 'react';
import {View, Text, Card, CardItem, Body, Icon, Accordion} from 'native-base';
import {Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {ShowAPIComponent} from '../Components/MoviesAPIComponent';

import {styles} from '../styles/CardStyle';

let errorIcon;

export class ShowPageComponent extends Component {
  constructor(props) {
    super(props);
    MaterialIcons.loadFont();
    Ionicons.loadFont();
    this.state = {showData: []};
  }

  async componentDidMount() {
    const resData = await ShowAPIComponent(this.props.id);
    this.setState({showData: resData});
    await MaterialIcons.getImageSource('error-outline', 200, 'red').then(
      errorSource => {
        errorIcon = errorSource.uri;
      },
    );
  }

  render() {
    if (this.state.showData.length != 0) {
      let image = this.state.showData.image
        ? this.state.showData.image.original
        : errorIcon;
      let rating = this.state.showData.rating
        ? this.state.showData.rating.average
        : 'null';
      let summary = this.state.showData.summary
        ? this.state.showData.summary.toString().replace(/<[^>]*>/g, '')
        : 'Summary not found';
      let schedule = this.state.showData.schedule
        ? this.state.showData.schedule
        : 'null';
      let network = this.state.showData.network
        ? this.state.showData.network
        : 'Network not found';
      let language = this.state.showData.language
        ? this.state.showData.language
        : 'Language not found';

      let ratingStars = [];
      if (rating == null) {
        ratingStars.push(
          <Icon
            type="MaterialCommunityIcons"
            name="star-off"
            style={styles.iconnotfound}
          />,
        );
      } else {
        for (let index = 0; index < rating - 1; index++) {
          ratingStars.push(
            <Icon type="MaterialIcons" name="star" style={styles.icon} />,
          );
        }
        if (rating % 1 > 0) {
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
            {rating}
          </Text>,
        );
      }

      let summaryAccordion = [{title: 'Summary', content: summary}];
      let scheduleAccordion = [];
      let networksAccordion = [];

      if (schedule == 'null' || schedule.days.length == 0) {
        scheduleAccordion.push({title: 'Not found', content: 'Not found'});
      } else {
        for (let index = 0; index < schedule.days.length; index++) {
          scheduleAccordion.push({
            title: schedule.days[index],
            content: schedule.time ? schedule.time : 'Not found',
          });
        }
      }

      if (network == 'null' || network.country == undefined) {
        networksAccordion.push({title: 'Not found', content: 'Not found'});
      } else {
        networksAccordion.push({
          title: network.name,
          content: network.country.name,
        });
      }

      return (
        <Card>
          <CardItem cardBody style={styles.card}>
            <Image source={{uri: image}} style={styles.fullcardimage} />
          </CardItem>
          <CardItem style={styles.card}>
            <Body style={styles.cardbody}>{ratingStars}</Body>
          </CardItem>
          <CardItem style={styles.card}>
            <Accordion
              dataArray={summaryAccordion}
              icon="add"
              expandedIcon="remove"
              iconStyle={{color: 'green'}}
              expandedIconStyle={{color: 'red'}}
            />
          </CardItem>
          <CardItem style={styles.card}>
            <Body style={styles.cardbody}>
              <Text>Schedule</Text>
            </Body>
          </CardItem>
          <CardItem style={styles.card}>
            <Accordion
              dataArray={scheduleAccordion}
              icon="add"
              expandedIcon="remove"
              iconStyle={{color: 'green'}}
              expandedIconStyle={{color: 'red'}}
            />
          </CardItem>
          <CardItem style={styles.card}>
            <Body style={styles.cardbody}>
              <Text>Networks</Text>
            </Body>
          </CardItem>
          <CardItem style={styles.card}>
            <Accordion
              dataArray={networksAccordion}
              icon="add"
              expandedIcon="remove"
              iconStyle={{color: 'green'}}
              expandedIconStyle={{color: 'red'}}
            />
          </CardItem>
          <CardItem style={styles.card}>
            <Body style={styles.cardbody}>
              <Text>Language: {language}</Text>
            </Body>
          </CardItem>
        </Card>
      );
    } else {
      return <View></View>;
    }
  }
}

export default ShowPageComponent;
