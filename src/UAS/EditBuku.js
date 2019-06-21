import React, { Component } from 'react'
import { Text, View, TextInput, TouchableHighlight } from 'react-native'
import Textarea from 'react-native-textarea';
import axios from 'axios';
import DatePicker from 'react-native-datepicker';
import Header from './Header'

export default class EditBuku extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id :"",
      tgl_kembali: "",
    }
  }

  _simpan = () => {
    axios.post('https://uasmobilenanda.000webhostapp.com/uasnanda/update_tglkembali_peminjaman.php', {
      id : this.state.id,
      tgl_kembali : this.state.tgl_kembali
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
        <Header judul={"EDIT TANGGAL KEMBALI"} />
        <View style={{ flex: 1, marginVertical: 20 }}>
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
              width: '90%', marginHorizontal: '5%', borderRadius: 20, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF5722'
            }}
            onPress={
              () => {
                this._simpan();
                this.props.navigation.navigate('Peminjaman')
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
