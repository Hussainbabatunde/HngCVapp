import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Editpage({setPage, data, deleteDataField, setData, items, setItems, addCompany, removeItem, addDataField}){
    return(
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex: 1}}>
        <ScrollView style={{backgroundColor:'#bedafd', flex: 1, paddingVertical: 50, paddingHorizontal: 20}}>
            <StatusBar style="auto" />
            <View style={{backgroundColor: "white", borderRadius: 15, padding: 10, marginVertical: 20, paddingBottom: 40}}>
                <View style={{ flexDirection:'row'}}>
            <TouchableOpacity style={{marginTop: 5}} onPress={()=>{setPage(1)}}>
            <Text style={{color: 'red'}}>{'<'}Back</Text>
            </TouchableOpacity>
            <Text style={{flex: 1, textAlign:'center', fontSize: 22}}>Edit CV</Text>
            </View>
            <Text style={{marginTop: 5}}>Name:</Text>
            <TextInput value={data?.name} onChangeText={(text)=> setData({...data, name: text})} style={{borderWidth: 1, fontSize: 17, padding: 5}} />
            <Text style={{marginTop: 5}}>Bio:</Text>
            <TextInput value={data?.bio} onChangeText={(text)=> setData({...data, bio: text})} multiline={true} numberOfLines={5} style={{borderWidth: 1, fontSize: 17, padding: 5, minHeight: 100,}} />

            <Text style={{marginTop: 5}}> Slack Username:</Text>
            <TextInput value={data?.slackUsername} onChangeText={(text)=> setData({...data, slackUsername: text})}  style={{borderWidth: 1, fontSize: 17, padding: 5}} />
            <Text style={{marginTop: 5}}>Github Handle:</Text>
            <TextInput value={data?.github} onChangeText={(text)=> setData({...data, github: text})} style={{borderWidth: 1, fontSize: 17, padding: 5}} />

            <Text style={{fontSize: 20, marginTop: 20}}>Education</Text>
            <Text style={{marginTop: 5}}>University:</Text>
            <TextInput value={data?.university} onChangeText={(text)=> setData({...data, university: text})} style={{borderWidth: 1, fontSize: 17, padding: 5}} />
            <Text style={{marginTop: 5}}>Department:</Text>
            <TextInput value={data?.department} onChangeText={(text)=> setData({...data, department: text})} style={{borderWidth: 1, fontSize: 17, padding: 5}} />
            <Text style={{marginTop: 5}}>University Location:</Text>
            <TextInput value={data?.location} onChangeText={(text)=> setData({...data, location: text})} style={{borderWidth: 1, fontSize: 17, padding: 5}} />

            <Text style={{fontSize: 20, marginTop: 20}}>Experience</Text>
            {items?.map((each, index) => 
            <View key={index}>
            <Text style={{marginTop: 5}}>Company:</Text>
            <TextInput value={each?.company} onChangeText={(text)=>{ 
                const updatedItems = [...items];
                updatedItems[index].company = text;
                setItems(updatedItems);
                }} style={{borderWidth: 1, fontSize: 17, padding: 5}} />
            <Text style={{marginTop: 5}}>Job description:</Text>
            <TextInput  value={each?.jobDesc} onChangeText={(text)=>{ 
                const updatedItems = [...items];
                updatedItems[index].jobDesc = text;
                setItems(updatedItems);
                }} style={{borderWidth: 1, fontSize: 17, padding: 5}} />
            <Text style={{marginTop: 5}}>Company Location:</Text>
            <TextInput value={each?.location} onChangeText={(text)=>{ 
                const updatedItems = [...items];
                updatedItems[index].location = text;
                setItems(updatedItems);
                }} style={{borderWidth: 1, fontSize: 17, padding: 5}} />

                <Text style={{marginTop: 5}}>Details</Text>

                {each?.data?.map((work, i)=>
                <View key={i}>
                    <TextInput value={work} onChangeText={(text)=>{ 
                const updatedItems = [...items];
                updatedItems[index].data[i] = text;
                setItems(updatedItems);
                }} multiline={true} numberOfLines={3} style={{borderWidth: 1, fontSize: 17, padding: 5, marginTop: 5}} />
                {/* <Button title='Delete Detail' onPress={()=>deleteDataField(index, i)} /> */}
                <TouchableOpacity  onPress={()=>deleteDataField(index, i)} style={{backgroundColor:'red', padding: 5, marginVertical: 10, justifyContent:'center', alignItems:'center', borderRadius: 5}}>
                <Text style={{color:'white', fontSize: 15}}>Delete detail</Text>
            </TouchableOpacity>
                </View>
                )}
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                {/* <Button title='Add detail' onPress={()=>addDataField(index)} /> */}
                <TouchableOpacity  onPress={()=>addDataField(index)} style={{backgroundColor:'#438fef', padding: 5, marginVertical: 10, justifyContent:'center', alignItems:'center', borderRadius: 5}}>
                <Text style={{color:'white', fontSize: 15}}>Add detail</Text>
            </TouchableOpacity>
                {/* <Button title='Delete Company' onPress={()=> removeItem(index)} /> */}
                <TouchableOpacity  onPress={()=> removeItem(index)} style={{backgroundColor:'red', padding: 5, marginVertical: 10, justifyContent:'center', alignItems:'center',  borderRadius: 5}}>
                <Text style={{color:'white', fontSize: 15}}>Delete Company</Text>
            </TouchableOpacity>
            </View>
            </View>
            )}
            {/* <Button title='Add Company' onPress={addCompany} /> */}
            <TouchableOpacity  onPress={addCompany} style={{backgroundColor:'black', padding: 5, marginVertical: 10, justifyContent:'center', alignItems:'center', borderRadius: 5}}>
                <Text style={{color:'white', fontSize: 18}}>Add Company {'+'}</Text>
            </TouchableOpacity>
            </View>

            <TouchableOpacity  onPress={()=>{setPage(1)}} style={{backgroundColor:'black', padding: 5, marginBottom: 90, justifyContent:'center', alignItems:'center', borderRadius: 5}}>
                <Text style={{color:'white', fontSize: 18}}>Back</Text>
            </TouchableOpacity>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}