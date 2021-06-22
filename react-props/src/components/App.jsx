import React from 'react';
import Card from './Card';
import contacts from '../contacts';

function App() {

    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            {
                contacts.map((value) => {
                    return <Card
                        key={value.id}
                        name={value.name}
                        src={value.imgURL}
                        phone={value.phone}
                        email={value.email}
                    />
                })
                //  contacts.map((value) => (
                //     <Card name={value.name} src={value.imgURL} phone={value.phone} email={value.email} />
                // ))
                // instead of curly braces and returning the card explicitely we can direclty write normal brackets and directly the return
                // part and no need to explicitely return it 

            }
            {/* <Card name={contacts[0].name} src={contacts[0].imgURL} phone={contacts[0].phone} email={contacts[0].email} />
            <Card name={contacts[1].name} src={contacts[1].imgURL} phone={contacts[1].phone} email={contacts[1].email} />
            <Card name={contacts[2].name} src={contacts[2].imgURL} phone={contacts[2].phone} email={contacts[2].email} /> */}
        </div>
    )
}

export default App;