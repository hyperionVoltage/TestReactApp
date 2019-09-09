import React, {Component} from 'react';
import {SafeAreaView, View, Platform} from 'react-native';
import {Container, Content, Input, Item} from 'native-base';

//Import Custom Components
import FooterComponent from '../Components/FooterComponent';
import MainShowCardsListerComponent from '../Components/MainShowCardsListerComponent';

//Import Component Styles
import {styles} from '../styles/MainScreenStyle';

var changedText = '';

export class MainScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = params => {
    const ViewComponent = Platform.select({
      ios: () => require('SafeAreaView'),
      android: () => require('View'),
    })();
    return {
      header: (
        <ViewComponent style={styles.areaview}>
          <Item>
            <Input
              Textbox
              bordered
              style={styles.navigationtextarea}
              maxLength={30}
              placeholder="Search for a show..."
              onSubmitEditing={event => {
                params.navigation.setParams({
                  searchedText: changedText,
                });
              }}
              onChangeText={text => (changedText = text)}
            />
            </Item>
        </ViewComponent>
      ),
    };
  };

  render() {
    return (
      <Container>
        <Content>
          <View style={styles.bodycontent}>
            <MainShowCardsListerComponent
              data={this.props.navigation.getParam('searchedText')}
              cardClicked={this.cardClicked}
            />
          </View>
        </Content>
        <FooterComponent />
      </Container>
    );
  }

  cardClicked = item => {
    this.props.navigation.navigate('Show', {item});
  };
}

export default MainScreen;
