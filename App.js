//Ben, below is my pseudo code. Since I couldn't get things to run,
//I thought I might as well reach for the stars and show how I would do
//the country flag quiz. Below is my attempt. Thanks again for all your help
//this quarter.

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//added to interact with database
import { Body, Title, Right, Container, Header, Content, Button, Icon, List, ListItem, Text } from 'native-base';
//added Shuffler
import flags.name from './ShuffledDeck';
//see ShuffledDeck file for code
//shuffledDeck needs to read from database

export default class App extends React.Component {
  constructor() {
    super();
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      countryList: ["Russia", "Germany", "France", "Italy"],
      rowId: [],
      flag:""
    }
  }
  getflags() {
      // Airtable API endpoint, replace with your own
      let airtableUrl = "https://api.airtable.com/v0/appoqvUe6fGVZBfrC/flags";

      // Needed for Airtable authorization, replace with your own API key
      let requestOptions = {
        headers: new Headers({
          'Authorization': 'Bearer keyMnNyCATMPEHfQD'
        })
      };

      // Form the request
      let request = new Request(airtableUrl, requestOptions);

      // Make the request
      fetch(request).then(response => response.json()).then(json => {
        this.setState({
          countryList: json.records
        });
      });
    }
//function for randomizing from the four selected country names below:
randomFlag(){
  this.setState(){
    //4 entries; randomly selects 1 between 1 and 4
    rowId: Math.floor((Math.random() * 4) + 1);
  }
  let flagId = data.flags.notes if (rowId!==4);
}

//Shuffle and splice to four country names
//Country name generator
generate(){
  this.setState(){
    countryList: data.flags.name.splice(0,4),
    //I want when I do the event for flag, it runs the randomFlag function
    //But I'm not sure how to embed a function an object in an array; can I do that?
    flag: flagId
  }
}

//need to add onPress>generate
//need to add flag language to Footer (that draws an image)
renderRow(data) {
  return (
    <ListItem style={{ paddingLeft: 20, paddingRight: 20 }}>
      <Body>
        <Text>{this.countryList}</Text>
      </Body>
    </ListItem>
  )
}
//adds points if correct
pointAdd() {
  //I don't know the syntax for this, but basically saying if the rowId
  //corresponding to the shown flag === rowId for the row that selected
  //with onPress, give that one point.
  if (flagId===rowId){
    data.flags.votes=data.flags.votes + 1;
  }
}

export default class App extends React.Component {
  render() {
  let flagImage = "http://flagpedia.net/data/flags/normal/" + this.state.data.flags.notes + ".png"
  let rows = this.ds.cloneWithRows(this.state.countryList);
  return (
    <Container>
      <Header>
        <Body>
          <Title>Rank your favorite flags!</Title>
        </Body>
      </Header>
      <Content>
        <List
          dataSource={rows}
          renderRow={(data) => this.renderRow(data),
          Button onPress={() => this.randomFlag()} title=this.state.countryList />}
          pointsAdd= {(data) => this.pointsAdd(),
        />
      </Content>
      <Footer>
        <Body>
          <img src={flagImage} />
        </Body>
      </Footer>
    </Container>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
