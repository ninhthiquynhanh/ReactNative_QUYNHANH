import { View, Text, StatusBar, TouchableOpacity, TextInput,Button  } from 'react-native'
import React, { useState,useContext } from 'react'
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {CartContext} from "../CartContext";

const ProductDetails = ({route}) =>{
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.goBack();
    };
    const {addItemToCart} = useContext(CartContext)

    function onAddToCart(){
      addItemToCart(item.id)
    }
    const {item} =route.params;
   
    return(
        <View>
            <StatusBar translucent={true} backgroundColor='transparent'/>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <Ionicons name="arrow-back" size={39} color="#000000" />
            </TouchableOpacity>
                <Image source={{uri: item.image}} style={{width:'100%', height:'80%'}}/>
                
                <View style={styles.dess}>
                    <Text style={{fontSize: 18, color:'#fff'}}>Tên sản phẩm: {item.title}</Text>
                    <Text style={{fontSize: 20, color:'#fff'}}>Giá: {item.price}</Text>
                </View>
                
                <TouchableOpacity style={{backgroundColor:'brown', padding:14, borderRadius:27, marginTop:50, }}>
                    <Button onPress={onAddToCart} title="Add To Cart" />
                    <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <Ionicons name="heart" size={25} color="#A52A2A" />
            </TouchableOpacity>
        </TouchableOpacity>
                    
           </View>
    )
}
export default ProductDetails;
const styles = StyleSheet.create({
    dess:{
        backgroundColor:'brown',
        borderTopLeftRadius:36,
        borderTopRightRadius:36,
        padding:30, 
        marginTop:100,
        position:'absolute',
        top:'55%',
        width:'100%',
        height:'50%',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
    },
    modal:{
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:30,
        position:'absolute',
        top:'45%',
        width:'100%',
        height:'100%',
    },
    btn:{
        backgroundColor:'#e21f6d',
        padding:15,
        position:'absolute',
        bottom:-135,
        width:'100%',
        
        
    }
})