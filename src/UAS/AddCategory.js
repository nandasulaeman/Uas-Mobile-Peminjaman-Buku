import React, { Component } from 'react'
import { Text, View, TextInput, TouchableHighlight } from 'react-native'
import Textarea from 'react-native-textarea';
import axios from 'axios';
import Header from './Header'
import DatePicker from 'react-native-datepicker';


export default class AddCategory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tgl_pinjam: "",
      tgl_kembali: "",
      id_login: "",
      id_buku: "",
    }
  }

  _simpan = () => {
    axios.post('https://uasmobilenanda.000webhostapp.com/uasnanda/create_peminjaman.php', {
      tgl_pinjam: this.state.tgl_pinjam,
      tgl_kembali: this.state.tgl_kembali,
      id_login: this.state.id_login,
      id_buku: this.state.id_buku,
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
         <Header judul={"PEMINJAMAN BUKU"} />
        <View style={{ flex: 1, marginVertical: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
            <View style={{ width: '30%' }}>
              <Text>Tanggal Pinjam : </Text>
            </View>
            <DatePicker
              style={{width: 260}}
              date={this.state.tgl_pinjam} //initial date from state
              mode="date" //The enum of date, datetime and time
              placeholder="Tanggal Pinjam"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={(tgl_pinjam) => {this.setState({tgl_pinjam})}}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
            <View style={{ width: '30%' }}>
              <Text>Tanggal Kembali : </Text>
            </View>
            <DatePicker
              style={{width: 260}}
              date={this.state.tgl_kembali} //initial date from state
              mode="date" //The enum of date, datetime and time
              placeholder="Tanggal Kembali"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={(tgl_kembali) => {this.setState({tgl_kembali})}}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
            <View style={{ width: '30%' }}>
              <Text>ID login : </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(id_login) => this.setState({ id_login })}
              value={this.state.id_login}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
            <View style={{ width: '30%' }}>
              <Text>ID Buku : </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(id_buku) => this.setState({ id_buku })}
              value={this.state.id_buku}
            />
          </View>

          <TouchableHighlight
            style={{
              width: '90%', marginHorizontal: '5%', borderRadius: 20, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF5722'
            }}
            onPress={
              () => {
                this._simpan();
                this.props.navigation.navigate('Category')
              }
            }
            underlayColor='#F4511E'
          >
            <Text style={{ fontSize: 24, color: 'white' }}>SIMPAN DATA</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
