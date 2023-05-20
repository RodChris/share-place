import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building bro',
        description: 'One of New York\'s iconic sky scrapers',
        imageUrl: 'https://www.takewalks.com/blog/wp-content/uploads/2013/07/empire-state-building-nyc-skyline.jpg',
        location: {
            lat: 40.784,
            lon: -73.98
        },
        address: '20 W 34th St, New York, NY',
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building yo',
        description: 'One of New York\'s iconic sky scrapers',
        imageUrl: 'https://www.takewalks.com/blog/wp-content/uploads/2013/07/empire-state-building-nyc-skyline.jpg',
        location: {
            lat: 40.784,
            lon: -73.98
        },
        address: '20 W 34th St, New York, NY',
        creator: 'u2'
    }
]

const UserPlaces = () => {
    const userId = useParams().userId
    const userPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    console.log(userPlaces)
    return (
        <PlaceList items={userPlaces} />
    )
}

export default UserPlaces