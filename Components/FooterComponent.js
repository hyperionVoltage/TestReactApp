import React, {Component} from 'react';
import {Footer, FooterTab, Text} from 'native-base';
import {StyleSheet} from 'react-native';

import {styles} from '../styles/FooterStyle';

export class FooterComponen extends Component {
  render() {
    return (
      <Footer>
        <FooterTab style={styles.footerTabStyle}>
          <Text style={styles.footerTextStyle}>Ido Hornstein</Text>
        </FooterTab>
      </Footer>
    );
  }
}

export default FooterComponen;
