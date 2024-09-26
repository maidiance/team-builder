import React, { useState } from 'react';
import TeamMember from './components/TeamMember';
import Form from './components/Form';
import logo from './logo.svg';
import './App.css';

function App() {
  // Set up teamMembers
  const [teamMembers, setTeamMembers] = useState([]);
  const [error, setError] = useState('');

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...setTeamMembers, [inputName]: inputValue });
  }
  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role) {
      setError("All fields are required, ya chump!!!");
    } else {
      axios.post("fakeapi.com", newTeamMember)
        .then(res => {
          const teamMemberFromServer = res.data;
          setTeamMembers([ teamMemberFromServer, ...teamMembers ]);
          setFormValues(initialFormValues);
        }).catch(err => console.error(err))
        .finally(() => setError(""))
    }
  }

  return (
    <div className="App">
      <h1>Add a team member</h1>
      <Form
        name = ''
        email = ''
        role = ''
      />

      {
        teamMembers.map((teamMember, idx) => {
          return(
            <TeamMember key={idx} details={teamMember} />
          )
        })
      }
    </div>
  );
}

export default App;
