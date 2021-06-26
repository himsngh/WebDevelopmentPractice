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
                // Since its a single line return statement we can directly return it without have to explicitely write return and the curly braces can also be omitted.
               

            }
            {/* <Card name={contacts[0].name} src={contacts[0].imgURL} phone={contacts[0].phone} email={contacts[0].email} />
            <Card name={contacts[1].name} src={contacts[1].imgURL} phone={contacts[1].phone} email={contacts[1].email} />
            <Card name={contacts[2].name} src={contacts[2].imgURL} phone={contacts[2].phone} email={contacts[2].email} /> */}
        </div>
    )
}

export default App;