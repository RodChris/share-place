const { v4: uuidV4 } = require('uuid');

const HttpError = require('../models/http-error')

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of New York\'s iconic sky scrapers',
        location: {
            lat: 40.784,
            lon: -73.98
        },
        address: '20 W 34th St, New York, NY',
        creator: 'u1'
    }
]

const getPlaceById = (req, res, next) => {
    const placeId = req.params.pid
    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId
    })

    if (!place) {
        throw new HttpError('No place for provided id', 404)
    }

    res.json({ place })
}

const getPlaceByUserId = (req, res, next) => {
    const userId = req.params.uid
    const place = DUMMY_PLACES.find(p => {
        return p.creator === userId
    })

    if (!place) {
        return next(new HttpError('No place for provided user id', 404))
    }

    res.json({ place })
}

const createPlace = (req, res, next) => {
    const { title, description, location, address, creator } = req.body
    const createdPlace = {
        id: uuidV4(),
        title,
        description,
        location,
        address,
        creator
    }

    DUMMY_PLACES.push(createdPlace)

    res.status(201).json({place: createdPlace})
}

exports.getPlaceById = getPlaceById
exports.getPlaceByUserId = getPlaceByUserId
exports.createPlace = createPlace