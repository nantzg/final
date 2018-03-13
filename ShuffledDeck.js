export default function() {
  // shuffles the deck
  //I wasn't sure what to call the variable "countryList"...what I'm trying to do here is
  //shuffle the variable that was requested via JSON from the database
  //(see countryList: json.records)
  let currentIndex = data.flags.name.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = deck[currentIndex];
    data.flags.name[currentIndex] = data.flags.name[randomIndex];
    data.flags.name[randomIndex] = temporaryValue;
  }
  return flags.name;
}
