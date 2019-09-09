import React, {Component} from 'react';
import {Text, View} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {MoviesAPIComponent} from '../Components/MoviesAPIComponent';
import MainShowCardComponent from '../Components/MainShowCardComponent';

import {styles} from '../styles/CardListerStyle';

let showCards = [];
let elements = [];
let errorIcon = '';

export class MainShowCardsListerComponent extends Component {
  constructor(props) {
    super(props);

    MaterialIcons.loadFont();

    this.state = {showsData: []};
  }

  async componentDidMount() {
    await MaterialIcons.getImageSource('error-outline', 200, 'red').then(
      errorSource => {
        errorIcon = errorSource.uri;
      },
    );
  }

  async componentDidUpdate(previousProps, previousState) {
    if (previousProps.data !== this.props.data) {
      const {data} = this.props;
      if (data.length > 0) {
        this.setState({showsData: []});
        showCards = [];
        const resShows = await MoviesAPIComponent(data);
        resShows.forEach((item, key) => {
          showCards.push({
            name: item.show.name,
            averageRating: item.show.rating ? item.show.rating.average : 'null',
            image: item.show.image ? item.show.image.original : errorIcon,
            id: item.show.id,
          });
        });
        this.setState({showsData: showCards});
      }
    }
  }

  render() {
    elements = [];
    console.log(this.state.showsData);
    if (this.state.showsData.length == 0) {
      return (
        <View>
          <Text style={styles.defaultsearch}>Please search for a show</Text>
        </View>
      );
    } else {
      this.state.showsData.forEach((item, key) => {
        elements.push(
          <MainShowCardComponent
            item={item}
            cardClicked={this.props.cardClicked}
            key={key}
          />,
        );
      });
      return <View>{elements}</View>;
    }
  }
}

export default MainShowCardsListerComponent;
