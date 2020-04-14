
import React from "react";
import Parse from 'parse';

const Store = React.createContext({});

export default function (props: { children: React.ReactNode }) {
    // Parse Current User
    const [user, setUser] = React.useState<Parse.Attributes | null>();
    const [location, setLocation] = React.useState<Parse.Attributes | null>();

    // if we want to display settings is true
    const [modification, setModification] = React.useState(false);

    // get current user
    React.useEffect(() => {
        Parse.User.currentAsync().then(currentUser => {
            if (currentUser) {
                setUser(currentUser)
            }
        });
        navigator.geolocation.getCurrentPosition(res => {
            var currentLocation = new Parse.GeoPoint({
                latitude: res.coords.latitude,
                longitude: res.coords.longitude
            });
            setLocation(currentLocation)
        });
    }, [])

    // states manager
    return (
        <Store.Provider value={{ user, setUser, modification, setModification, location, setLocation }}>
            {props.children}
        </Store.Provider>
    );
}

// HOC for Store Consumer
export function withStore<T>(Component: React.ComponentType<T>) {
    return (props: T) => (
        <Store.Consumer>
            {({ ...store }) => <Component {...props} {...store} />}
        </Store.Consumer>
    )
}