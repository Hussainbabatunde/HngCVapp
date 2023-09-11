import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Home({setPage, items, data}){

    

//   const addItem = () => {
//     if (newItem.trim() !== '') {
//       setItems([...items, newItem]);
//       setNewItem('');
//     }
//   };

//   const removeItem = (index) => {
//     const updatedItems = [...items];
//     updatedItems.splice(index, 1);
//     setItems(updatedItems);
//   };

//   const editItem = (index, text) => {
//     const updatedItems = [...items];
//     updatedItems[index].text = text;
//     setItems(updatedItems);
//   };




    return(
        <ScrollView style={{backgroundColor:'#bedafd', flex: 1, paddingVertical: 50, paddingHorizontal: 20}}>
            <StatusBar style="auto" />
            <View style={{backgroundColor: "white", borderRadius: 15, padding: 10, marginTop: 20}}>
                <Text style={{textAlign:'center', fontSize: 25, color:'#438fef'}}>{data?.name}</Text>
                <Text style={{textAlign:'center'}}>Slack Username: {data?.slackUsername}</Text>
                <Text style={{textAlign:'center'}}>Github handle: {data?.github}</Text>
                <View style={{height: 2, backgroundColor:'black', marginTop: 10}}></View>
                <Text style={{marginTop: 20}}>{data?.bio}</Text>

                <Text style={{fontSize: 20, marginTop: 20}}>Education</Text>
                <View style={{height: 2, backgroundColor:'black'}}></View>
                <Text style={{marginTop: 10, fontSize: 18}}>{data?.university}</Text>
                <Text style={{fontSize: 17}}>Dept: {data?.department}</Text>
                <Text>{data?.location}.</Text>

                <Text style={{fontSize: 20, marginTop: 20}}>Experience</Text>
                <View style={{height: 2, backgroundColor:'black'}}></View>
                { items?.map ((each, index) =>
                    <View key={index}>
                <Text style={{marginTop: 10, fontSize: 18}}>{each?.jobDesc}</Text>
                <Text style={{fontSize: 17}}>Company: {each?.company}</Text>
                <Text>{each?.location}.</Text>

                <View style={{ flexDirection: 'column', marginTop: 10 }}>
                    
            {each?.data?.map((work, i)=>
            <View key={i}>
            <Text>{`${i + 1}. ${work}`}</Text>
            </View>)}
            </View>
            </View>
            
            )}

                <Text style={{fontSize: 20, marginTop: 20}}>Skills</Text>
                <View style={{height: 2, backgroundColor:'black'}}></View>
                <View style={{flexDirection:'row', marginVertical: 5}}>
                <Text style={{fontWeight: 600}}>Languages: </Text>
                <Text style={{flex: 1}}>{data?.languages}</Text>
                </View>
                
                <View style={{flexDirection:'row', marginVertical: 5}}>
                <Text style={{fontWeight: 600}}>Frameworks: </Text>
                <Text style={{flex: 1}}>{data?.frameworks}</Text>
                </View>
                

                {/* <FlatList
        data={items}
        renderItem={({ item, index }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              style={{ flex: 1 }}
              value={item.text}
              onChangeText={(text) => editItem(index, text)}
              editable={item.editable}
            />
            {item.editable ? 
            (
                <TouchableOpacity onPress={() => toggleEditable(index)}>
                  <Text style={{ color: 'green', marginLeft: 10 }}>Edit</Text>
                </TouchableOpacity>
              )
            :
            (
              <TouchableOpacity onPress={() => toggleEditable(index)}>
                <Text style={{ color: 'blue', marginLeft: 10 }}>Save</Text>
              </TouchableOpacity>
            ) }
            <TouchableOpacity onPress={() => removeItem(index)}>
              <Text style={{ color: 'red', marginLeft: 10 }}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TextInput
        placeholder="Add a new item"
        value={newItem}
        onChangeText={(text) => setNewItem(text)}
      />
      <Button title="Add" onPress={addItem} /> */}
                </View>
            <TouchableOpacity style={{marginTop: 10, justifyContent:'center', alignItems:'center', marginBottom: 100, backgroundColor:'black', padding: 5, borderRadius: 5}}  onPress={() => {setPage(2)}}>
                <Text style={{fontSize: 18, color:'white'}}>Edit CV</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}