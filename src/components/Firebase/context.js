import React from 'react';

const FirebaseContext = React.createContext(null);

export const withFirebase = Componet => props => (
    <FirebaseContext.Consumer>
        {firebase => <Componet{...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
)

export default FirebaseContext;