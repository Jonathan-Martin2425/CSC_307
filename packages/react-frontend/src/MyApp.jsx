import React, { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";


const characters = [
  {
    name: "Charlie",
    job: "Janitor"
  },
  {
    name: "Mac",
    job: "Bouncer"
  },
  {
    name: "Dee",
    job: "Aspring actress"
  },
  {
    name: "Dennis",
    job: "Bartender"
  }
];

function test(){
    let cur = fetchUsers()
	      .then((res) => res.json())
          .then((res) => console.log(res))
	      .catch((error) => { console.log(error); }).PromiseResult  ;
    return;
}

function fetchUsers() {
    const promise = fetch("http://localhost:8000/users");
    return promise;
}

function MyApp() {
  const [characters, setCharacters] = useState([]);

  function fetchUsers() {
    const promise = fetch("http://localhost:8000/users");
    return promise;
}

function postUser(person) {
    const promise = fetch("Http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });
    return promise;
  }

  function updateList(person) { 
    postUser(person)
      .then( (response) => {return response.json()})
      .then(() => setCharacters([...characters, person]))
      .catch((error) => {
        console.log(error);
      })

    }

  function removeOneCharacter(index) {
    const updated = characters.filter((character, i) => {
      return i !== index;
    });
    setCharacters(updated);
  }

    useEffect(() => {
      fetchUsers()
	      .then((res) => res.json())
	      .then((json) => setCharacters(json["users_list"]))
	      .catch((error) => { console.log(error); });
    }, [] );

  return (
    <div className = "container">
      <Table
            characterData={characters}
            removeCharacter={removeOneCharacter}
      />

      <Form handleSubmit={updateList} />
      <Form handleSubmit={test} />
    </div>
  );
}
export default MyApp;