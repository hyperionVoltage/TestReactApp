import React, {Component} from 'react';
import {Container, Content} from 'native-base';

//Import Custom Components
import {ShowPageComponent} from '../Components/ShowPageComponent';
import FooterComponent from '../Components/FooterComponent';

export class ShowScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = params => {
    return {
      title: params.navigation.getParam('item').name,
    };
  };

  render() {
    return (
      <Container>
        <Content>
          <ShowPageComponent id={this.props.navigation.getParam('item').id} />
        </Content>
        <FooterComponent />
      </Container>
    );
  }
}

export default ShowScreen;
