import react, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TextInput,TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';


const Product = () =>{
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    
    const getApi = () => {
        return fetch('https://fakestoreapi.com/products')
          .then((response) => response.json())
          .then((data) => {
            setProducts(data);
            setFilteredProducts(data); // Initially set filtered products to all products
          })
          .catch(err => console.log(err));
      }
    
      useEffect(() => {
        getApi();
      }, []);
      const filteredProducts = products.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
      // Function to filter products based on search text
      const handleSearch = (text) => {
        setSearchText(text);
        const filtered = products.filter(item =>
          item.title.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredProducts(filtered);
      }
    return(
        
    <View>
            <ScrollView>
            
                <View style={styles.searchContainer}>
          <TextInput
          
            style={styles.searchInput}
            placeholder="Tìm Kiếm..."
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            
            
          />
        </View>
        
        <View style={styles.container}>
            <FlatList
            scrollEnabled={false}
             data={filteredProducts}
             numColumns={2}
            columnWrapperStyle={styles.row}
            renderItem={({item})=>
            <View style={styles.item}>
                
                <TouchableOpacity onPress={()=>{navigation.navigate('ProductDetails',{item})}}>
                <Image source={{uri:item.image}} style= {{width:'100%', height:200,marginTop:20,marginBottom:5,borderRadius:20}}/>
                    <View style ={styles.dess}>
                    <Text style={{color:'#fff', textAlign:'center', padding:7}}>{item.title}</Text>
                    <Text style={{color:'#fff', textAlign:'center', padding:7}}>{item.price}</Text>
                    </View>
                    </TouchableOpacity>
                    
            </View>    
            
        }/>
        
                
        </View>
        
        </ScrollView>
        
    </View>
    
    )
}
export default Product;


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flexWrap:'wrap', // thuộc tính rớt xuống hàng
        justifyContent:'space-between', 
    },
    item:{
        width:'45%',
        marginBottom:10
    },
  dess:{
    backgroundColor:'brown'
  },
  row:{
    flex:1,
    justifyContent:'space-between',
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 9,
    paddingLeft: 20,
  },
}) 