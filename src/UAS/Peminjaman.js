import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import axios from 'axios';
import Header from './Header';
import DetailBuku from './DetailBuku';

export default class Peminjaman extends Component {
  static defaultNavigationOptions = {
    Peminjaman: null
}
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    };
  }

  static navigationOptions = {
    tabBarLabel: 'Category'
  }

//   componentDidMount() {
//     axios.get("https://uasmobilenanda.000webhostapp.com/uasnanda/read_listPeminjaman_buku.php")
//       .then(res => {
//         const categories = res.data;
//         console.log(categories);
//         this.setState({ categories });
//       })
//   }
  componentDidMount() {
    this.willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      () => {
        this._loadData();
      }
    );
  }

  _loadData = () => {
    axios.get('https://uasmobilenanda.000webhostapp.com/uasnanda/read_listPeminjaman_buku.php')
    .then(res => {
      const categories = res.data;
      console.log(categories);
      this.setState({ categories });
      })
  }
  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
    <ListItem 
      title={item.buku_judul}
      subtitle={item.tgl_kembali}
      onPress={
        () => {
          this.props.navigation.navigate('DetailPeminjaman', { id: item.id, title: item.buku_judul })
        }
      }
    />
  )
  render() {
    return (
      <View style={styles.container} >
        <Header judul={"LIST PEMINJAMAN"} />
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