import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const PetDetails = props => {
    const { _id } = props;
    const [ pet, setPet ] = useState({});
    const [ likes, setLikes ] = useState(0);
    const [ dis, setDis ] = useState(false);

    useEffect (() => {
        axios.get(`http://localhost:8000/api/pets/${_id}`)
          .then(res => {
              setPet(res.data);
              setLikes(res.data.likes);
            })
          .catch(err => console.log(err));
    }, [_id,dis]);

    const likePet = () => {
        setDis(true);
        axios.put(`http://localhost:8000/api/like/${_id}`, {likes})
            .then(res => console.log(res))
            .catch(err=>console.log(err));
    }

    const adoptPet = () => {
        axios.delete(`http://localhost:8000/api/pets/${_id}`)
        .then(res => {
            navigate("/");
        })
        .catch(err=>console.log(err));
    }


    return (
        <>
            <div className="row">
                <div className="col">
                    <h3>Details about {pet.name}</h3>
                    <Link to="/" className="float-right bigger mr-5">Home</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-2 text-center">
                    <p className="bigger">Pet Type:</p>
                </div>
                <div className="col">
                    <p>{pet.type}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-2 text-center">
                    <p className="bigger">Description:</p>
                </div>
                <div className="col">
                    <p>{pet.description}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-2 text-center">
                    <p className="bigger">Skills:</p>
                </div>
                <div className="col">
                    <p>{pet.skill1}</p>
                    <p>{pet.skill2}</p>
                    <p>{pet.skill3}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-2 text-center">
                    <p className="bigger">Likes:</p>
                </div>
                <div className="col">
                    <p>{pet.likes}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {
                        dis 
                        ?
                        <button className="btn btn-primary ml-3" disabled>Like this pet</button>
                        : 
                        <button className="btn btn-primary ml-3" onClick={likePet}>Like this pet</button>
                    }

                    <button 
                        className="btn btn-success ml-4"
                        onClick={adoptPet}
                    >Adopt this pet</button>
                </div>
            </div>
        </>
    );
}

export default PetDetails;