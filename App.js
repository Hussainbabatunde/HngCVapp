import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import { useState } from 'react';
import Editpage from './components/EditPage';

export default function App() {
  const [page, setPage] = useState(1)
  const [items, setItems] = useState([{
    company: 'BCT Limited',
    location: 'Lagos, Nigeria',
    jobDesc: 'Software developer (Web and Mobile app development)',
    data: [
      'Maintaining internal projects',
      'Translated UX and business requirements into elegant code solutions with responsive web design projects in React framework',
      'Developed a robust mobile application which allows users request for a ride and assigns a driver to transport the user from a location on a map to another location (Smoothride).',
    ],
  }]);
  const [newItem, setNewItem] = useState('');
  const [data, setData] = useState({
    name: 'Hussain Babatunde Adekunle',
    slackUsername: 'Hussain Babatunde',
    github:'Hussainbabatunde',
    bio:'A highly motivated graduate, I am committed to delivering top-quality service through hard work, innovative thinking, strong interpersonal skills, organization, and a positive attitude.',
    university: 'University of Lagos',
    department:'Electrical/ Electronics Engineering',
    location: 'Lagos, Nigeria',
    // jobDesc: 'Software developer (Web and Mobile app development)',
    // company:'BCT Limited',
    // companyLocation: 'Lagos, Nigeria'
  })
  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, { text: newItem, editable: true }]);
      setNewItem('');
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const editItem = (index, text) => {
    const updatedItems = [...items];
    updatedItems[index].text = text;
    setItems(updatedItems);
  };

  const toggleEditable = (index) => {
    const updatedItems = [...items];
    updatedItems[index].editable = !updatedItems[index].editable;
    setItems(updatedItems);
  };
  return (<>
    {page == 1 ?
      <Home setPage={setPage} items={items} data={data}  /> : <Editpage setPage={setPage} data={data} setData={setData} />
    }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
