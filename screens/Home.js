import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    SafeAreaView
} from 'react-native';

import {icons, COLORS, images, SIZES, FONTS} from '../constants/index';

const Home = () => {

    const renderHeader = () => {
        return (
            <View style={{flexDirection: 'row', height: 50, marginTop: 5}}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image 
                        source={icons.nearby}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <View
                        style={{
                            backgroundColor: COLORS.lightGray3,
                            width: '70%',
                            height: "100%",
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius                            
                        }}
                    >
                        <Text style={{...FONTS.h4}}>Location</Text>
                    </View>
                </View>
                
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center',
                    }}
                >
                    <Image 
                        source={icons.basket}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1
    }
})


export default Home;
