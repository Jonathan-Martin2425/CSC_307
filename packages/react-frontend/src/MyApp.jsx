import React, { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";

function test(){
    fetchUsers()
          .then((res) => console.log(res.json()))
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
    let x = postUser(person)
      .then((response) => {return response.json();})
      .then((newUser) => setCharacters([...characters, newUser]))
      .catch((error) => {
        console.log(error);
      })
    

    }

  function removeOneCharacter(index) {
    const updated = characters.filter((character, i) => {
      return i !== index;
    });

    fetch("Http://localhost:8000/users?id=".concat(characters[index]["id"]), {
      method: "DELETE",
    }).catch((error) => {
        console.log(error);
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
    </div>
  );
}
export default MyApp;