import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, Text, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import Header from './Header';

export default class DetailPeminjaman extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)


        this.state = {
            detail: [],
            id : " "
        };
    }
    // componentDidMount() {
        // const id = this.props.navigation.state.params.id
    //     axios.get(`https://uasmobilenanda.000webhostapp.com/uasnanda/read_peminjaman_byid.php?id=` + id)
    //         .then(res => {
    //             const detail = res.data;
    //             console.log(detail);
    //             this.setState({ detail });
    //         })
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
        const id = this.props.navigation.state.params.id
        axios.get('https://uasmobilenanda.000webhostapp.com/uasnanda/read_peminjaman_byid.php?id=' + id)
        .then(res => {
            const detail = res.data;
            console.log(detail);
            this.setState({ detail });
          })
      }
    _hapus = () => {
        axios.post('https://uasmobilenanda.000webhostapp.com/uasnanda/delete_peminjaman.php', {
            id: this.state.id
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    keyExtractor = (item, index) => index.toString()
    render() {
        const title = this.props.navigation.getParam('title', 'NO-TITLE');

        return (
            <View style={styles.container} >
                <Header judul={"DETAIL PEMINJAMAN"} />
                <FlatList
                    data={this.state.detail}
                    keyExtractor={this.keyExtractor}
                    renderItem={({ item }) =>
                        <View style={styles.label1}>
                            <Text style={styles.label2}>ID : {item.id}</Text>
                            <Text style={styles.label2}>Tanggal Pinjam : {item.tgl_pinjam}</Text>
                            <Text style={styles.label2}>Tanggal Kembali : {item.tgl_kembali}</Text>
                            <Text style={styles.label2}>ID Login : {item.id_login}</Text>
                            <Text style={styles.label2}>Kode Buku : {item.id_buku}</Text>
                        </View>
                    }
                />

                <View style={styles.box01}>
                    <View style={styles.box02}>
                        <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle}
                            onPress={() => this.props.navigation.navigate('EditBuku')}>
                            <Text style={styles.buttonText1}>Edit</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.box02}>
                        <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle}
                            onPress={
                                () => {
                                    this.props.navigation.navigate('Delete_Pinjam')
                                }
                            }
                        >
                            <Text style={styles.buttonText1}>Hapus</Text>
                        </TouchableHighlight>
                    </View>
                </View>
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
        flex: 4,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: "#FF69B4",
        margin: 5
    },
    label2: {
        borderWidth: 1,
        fontSize: 15,
        color: 'black',
        paddingLeft: 10,
        paddingTop: 10,
        paddingRight: 10,
        backgroundColor: "#FF69B4",
        paddingBottom: 10
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