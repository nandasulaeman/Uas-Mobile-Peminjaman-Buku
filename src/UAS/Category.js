import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import axios from 'axios';
import Header from './Header';
import DetailBuku from './DetailBuku';

export default class Category extends Component {
  static defaultNavigationOptions = {
    Category: null
}
  constructor(props) {
    super(props)
    prefik_url = 'https://uasmobilenanda.000webhostapp.com/uasnanda/file/';
    this.state = {
      categories: []
    };
  }

    componentDidMount() {
      this.willFocusSubscription = this.props.navigation.addListener(
        'willFocus',
        () => {
          this._loadData();
        }
      );
    }
  
    _loadData = () => {
      axios.get('https://uasmobilenanda.000webhostapp.com/uasnanda/read_listbuku.php')
      .then(res => {
        const categories = res.data;
        console.log(categories);
        this.setState({ categories });
        })
    }
  static navigationOptions = {
    tabBarLabel: 'Category'
  }

  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
    <ListItem 
      title={item.buku_judul}
      subtitle={item.penulis}
      leftAvatar={{ source: { uri: prefik_url + item.sampul } }}
      onPress={
        () => {
          this.props.navigation.navigate('DetailBuku', { id: item.buku_kode, title: item.buku_judul })
        }
      }
    />
  )
  render() {
    return (
      <View style={styles.container} >
        <Header judul={"LIST BUKU"} />
        <FlatList 
          keyExtractor={this.keyExtractor}
          data={this.state.categories}
          renderItem={this.renderItem}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});