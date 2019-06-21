import React from 'react';
import { View, Text,Button, StyleSheet } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import Category from './Category.js';
import AddCategory from './AddCategory.js';
import Login from './Login.js';
import DetailBuku from './DetailBuku';
import About1 from './About1.js';
import EditBuku from './EditBuku';
import Peminjaman from './Peminjaman.js';
import DetailPeminjaman from './DetailPeminjaman.js';
import Delete_Pinjam from './Delete_pinjam.js';

const AppNavigator = createDrawerNavigator(
    {
        Login: Login
    },
    {
        defaultNavigationOptions: {
            gesturesEnabled: false
        },
        initialRouteName: 'Login',
        }
    );

 const CategoryNav = createDrawerNavigator(
        {
            Category: Category,
            DetailBuku : DetailBuku,
            AddCategory : AddCategory
        },
        {
            defaultNavigationOptions: {
                gesturesEnabled: false
            },
            initialRouteName: 'Category',
            }
        );

        const PinjamNav = createDrawerNavigator(
            {
                Peminjaman: Peminjaman,
                DetailPeminjaman : DetailPeminjaman,
                Delete_Pinjam : Delete_Pinjam,
                EditBuku : EditBuku
            },
            {
                defaultNavigationOptions: {
                    gesturesEnabled: false
                },
                initialRouteName: 'Peminjaman',
                }
            );
            
            const AboutNav = createDrawerNavigator(
                {
                    About1: About1,
                },
                {
                    defaultNavigationOptions: {
                        gesturesEnabled: false
                    },
                    initialRouteName: 'About1',
                    }
                );

                const TabNavigator = createBottomTabNavigator(
                    {
                      CategoryNav,
                      PinjamNav,
                      AboutNav
                    },
                {
                    defaultNavigationOptions: ({ navigation }) => ({
                        tabBarLabel: () => {
                        const { routeName } = navigation.state
                        let title = null
                        if (routeName === 'CategoryNav') {
                            title = 'Category'
                        } else if (routeName === 'PinjamNav') {
                            title = 'Pinjam'
                        }else if (routeName === 'AboutNav') {
                            title = 'About'
                        }
                        return <Text style={{ color: '#fff', fontSize: 20,padding: 10, textAlign: 'center' }}>{title}</Text>
                        },
                    }),
                    tabBarOptions: {
                        activeTintColor: 'white',
                        inactiveTintColor: 'black',
                        activeBackgroundColor: 'darkgreen',
                        inactiveBackgroundColor: 'green',
                    },
                    },
                //     {
                //     tabBarPosition: 'bottom',
                //     swipeEnable : true,
                //     tabBarOptions: {
                //         activeTintColor : 'white',
                //         activeBackgroudColor: 'darkgreen',
                //         inactiveTintColor : 'black',
                //         inactiveBackgroudColor: 'green',
                //         labelStyle: {
                //             fontSize: 16,
                //             padding: 10
                //         }
                //     }
                // }
                );
export default createAppContainer(TabNavigator) ;