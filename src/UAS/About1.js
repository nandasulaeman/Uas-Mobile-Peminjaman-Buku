import React, { Component } from 'react';
import { StyleSheet, View,TouchableHighlight ,Text, Image} from 'react-native';
import Header from './Header';

export default class About1 extends Component {
    static defaultNavigationOptions = {
        tabBarLabel: 'About'
      }
  render() {
    return (
        <View style={styles.containerMain}>
            <Header judul={"PROFIL SAYA"} />
                <View style={styles.box02}>
                    <Image  style={styles.gambar}
                    source={{uri:'https://uasmobilenanda.000webhostapp.com/uasnanda/file/foto.jpg'}}
                    />
                    </View>
                    <View style={styles.label1}>
                        <Text style={styles.label2}>Nama  : Nanda Sulaeman</Text>
                        <Text style={styles.label2}>Alamat : Hasanudin</Text>
                        <Text style={styles.label2}>No telp : 08989089825</Text>
                        <Text style={styles.label2}>Prodi : Pendidikan Teknik Informatika</Text>
                        <Text style={styles.label2}>Jurusan : Pendidikan Teknik Informatika</Text>
                        <Text style={styles.label2}>Fakultas : Teknik dan Kejuruan</Text>
                    </View>
                    <View style={styles.box5}>          
    </View>   
    </View>      
    );
  }
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: "white",
    },

    box02: {
        flex:5,
        alignItems:'center',
        justifyContent:'center', 
        backgroundColor: "white",
        borderRadius:20
    },
   
    gambar: {
        width: 250,
        height: 270,
        backgroundColor: "white",
        borderRadius:50
    },
    label1: {
        flex:4,
        alignItems:'stretch',  
        justifyContent:'center',
        backgroundColor: "white",
        margin:5
    },
    label2: {
        borderWidth:0,
        fontSize:15, 
        paddingLeft:10, 
        paddingTop:10,
        paddingRight:10,
        backgroundColor: "white",
        paddingBottom:10
    },
    center1: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
    },
    teks1: {
        fontSize: 20,
        color: 'white',
      },
      box4: {     
        flex:0.7,    
        backgroundColor: "#DC143C",     
        alignItems: 'center',
        justifyContent: 'center'  
    },   
    text3:{     
        fontSize:20,     
        color:'white', 
        alignItems: 'center',
        justifyContent: 'center'
      }, 
      vItemMenu:{    
        backgroundColor:"blue",      
        alignItems:'center',     
        justifyContent:'center',  
        paddingBottom : 10,   
        paddingTop : 10,
        borderRadius: 10,     
    },   
    box5: {     
        flex:0.7,      
        margin: 10,     
        borderRadius: 10,   
    },   
})
