import React, { Component } from 'react'
import { Text, View, TextInput, TouchableHighlight } from 'react-native'
import Textarea from 'react-native-textarea';
import axios from 'axios';
import Header from './Header'

export default class AddCategory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: "",
    }
  }

  _simpan = () => {
    axios.post('https://uasmobilenanda.000webhostapp.com/uasnanda/delete_peminjaman.php', {
      id: this.state.id,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
         <Header judul={"DELETE PEMINJAMAN"} />
        <View style={{ flex: 1, marginVertical: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
            <View style={{ width: '30%' }}>
              <Text>ID : </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(id) => this.setState({ id })}
              value={this.state.id}
            />
          </View>

          <TouchableHighlight
            style={{
              width: '90%', marginHorizontal: '5%', borderRadius: 20, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4286f4'
            }}
            onPress={
              () => {
                this._simpan();
                this.props.navigation.navigate('Peminjaman')
              }
            }
            underlayColor='#F4511E'
          >
            <Text style={{ fontSize: 24, color: 'white' }}>HAPUS DATA</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}