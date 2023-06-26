import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators'
import { useForm } from '../../shared/hooks/form-hook'

import './PlaceForm.css'
import Card from '../../shared/components/UIElements/Card'

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
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

const UpdatePlace = () => {
    const placeId = useParams().placeId

    const [formState, inputHandler, setFormData] = useForm(
        {
            title: {
                value: '',
                isValid: true,
            },
            description: {
                value: '',
                isValid: true,
            }
        }, false
    )

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId)

    useEffect(() => {
        if (identifiedPlace) {
            setFormData(
                {
                    title: {
                        value: identifiedPlace.title,
                        isValid: true,
                    },
                    description: {
                        value: identifiedPlace.description,
                        isValid: true,
                    }
                },
                true
            )
        }
    }, [setFormData, identifiedPlace])

    const placeUpdateSubmitHandler = event => {
        event.preventDefault()
        console.log(formState.inputs)
    }

    if (!identifiedPlace) {
        return (
            <div className="center">
                <Card>
                    <h2>Place not found</h2>
                </Card>
            </div>)

    }

    return (
        formState.inputs.title.value && <form className='place-form' onSubmit={placeUpdateSubmitHandler}>
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title"
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description"
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
            />
            {/* <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE]}
                errorText="Please enter a valid title"
                onInput={() => { }}
                value={identifiedPlace.title}
                valid={true}
            /> */}
            <Button type="submit" disabled={!formState.isValid}>
                UPDATE PLACE
            </Button>
        </form>
    )
}

export default UpdatePlace