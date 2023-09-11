import { StatusBar } from "expo-status-bar";
import React from "react";
import { KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Editpage({setPage, data, setData}){
    return(
        <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <ScrollView style={{backgroundColor:'#bedafd', flex: 1, paddingVertical: 50, paddingHorizontal: 20}}>
            <StatusBar style="auto" />
            <View style={{backgroundColor: "white", borderRadius: 15, padding: 10, marginVertical: 20}}>
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
            <Text style={{marginTop: 5}}>Company:</Text>
            <TextInput value={data?.company} onChangeText={(text)=> setData({...data, company: text})} style={{borderWidth: 1, fontSize: 17, padding: 5}} />
            <Text style={{marginTop: 5}}>Job description:</Text>
            <TextInput  value={data?.jobDesc} onChangeText={(text)=> setData({...data, jobDesc: text})} style={{borderWidth: 1, fontSize: 17, padding: 5}} />
            <Text style={{marginTop: 5}}>Company Location:</Text>
            <TextInput value={data?.companyLocation} onChangeText={(text)=> setData({...data, companyLocation: text})} style={{borderWidth: 1, fontSize: 17, padding: 5}} />
            </View>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}