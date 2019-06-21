import React, { Component } from 'react';
import { StyleSheet,TouchableHighlight, Text, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import Header from './Header';

export default class DetailBuku extends Component {
  static navigationOptions = {
    header: null}
  constructor(props) {
    super(props)
   
    
    this.state = {
      detail: [],
    };
  }
  // componentDidMount() {
  //   const id = this.props.navigation.state.params.id
  //   axios.get(`https://uasmobilenanda.000webhostapp.com/uasnanda/read_listbuku_byid.php?id=` + id)
  //     .then(res => {
  //       const detail = res.data;
  //       console.log(detail);
  //       this.setState({ detail });
  //     })
  // }
  componentDidMount() {
    this.willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      () => {
        this._loadData();
      }
    );
  }

  _loadData = () => {
    id = this.props.navigation.state.params.id;
    axios.get('https://uasmobilenanda.000webhostapp.com/uasnanda/read_listbuku_byid.php?id='+ id)
    .then(res => {
      const detail = res.data;
      console.log(detail);
      this.setState({ detail });
      })
  }
  keyExtractor = (item, index) => index.toString()
  render() {
  const title = this.props.navigation.getParam('title', 'NO-TITLE');

    return (
      <View style={styles.container} >
        <Header judul={"DETAIL BUKU"} />
        <FlatList
                    data={this.state.detail}
                    keyExtractor={this.keyExtractor}
                    renderItem={({item}) =>
                    <View style={styles.label1}>
                          <Text style={styles.label2}>Kode Buku : {item.buku_kode}</Text>
                          <Text style={styles.label2}>Judul Buku : {item.buku_judul}</Text>
                          <Text style={styles.label2}>Penulis Buku : {item.penulis}</Text>
                          <Text style={styles.label2}>Penerbit : {item.penerbit}</Text>
                          <Text style={styles.label2}>Sinopsis Buku : {item.sinopsis}</Text>
                        </View>
                    }
                /> 
        
          <View style={styles.box01}>
            <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle} 
        onPress={() => this.props.navigation.navigate('AddCategory')}>       
            <Text style={styles.buttonText1}>Pinjam</Text>       
            </TouchableHighlight>
          </View>
       
       <ActionButton buttonColor="#4286f4">
          <ActionButton.Item buttonColor='#9b59b6' title="Tambah Detail" onPress={() => this.props.navigation.navigate('AddDetail')}>
            <Icon name="ios-add" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
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
  buttonStyle: {          
    flex: 2,
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 10,
    paddingLeft: 10,
    margin: 5,  
    borderRadius: 25,
    backgroundColor: "#4286f4",
},   
buttonText1: {     
  textAlign: "center",     
  height: 25,     
  width: "100%",     
  marginTop: 10,     
  color: "#FFFFFF",     
  fontSize: 14   
},   
label1: {
  flex:4,
  alignItems:'stretch',  
  justifyContent:'center',
  backgroundColor: "#FF69B4",
  margin:5
},
label2: {
  borderWidth:1,
  fontSize:15, 
  color: 'black',
  paddingLeft:10, 
  paddingTop:10,
  paddingRight:10,
  backgroundColor: "#FF69B4",
  paddingBottom:10
},
box02: {
  flex: 1,
  height: 50,
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'row',
  paddingRight: 20,
  paddingLeft: 10,
  margin: 5,
  backgroundColor: 'white',
  
},

box01: {
  flex: 1,
  margin: 1,
  flexDirection: 'row',
},
});