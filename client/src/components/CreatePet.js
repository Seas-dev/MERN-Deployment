import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router'; 

const CreatePet = props => {
    const [ name, setName ] = useState("");
    const [ type, setType ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ skill1, setSkill1 ] = useState("");
    const [ skill2, setSkill2 ] = useState("");
    const [ skill3, setSkill3 ] = useState("");
    const [ likes, setLikes ] = useState(0);
    const [ errors, setErrors ] = useState({});
    const [ allPetNames, setAllPetNames ] = useState([]);
    const [ uniErr, setUniErr ] = useState("");
    const [ uni, setUni ] = useState(false);

    useEffect (() => {
        axios.get("http://localhost:8000/api/pets")
          .then(res => setAllPetNames(res.data))
          .catch(err => console.log(err));
      }, []);
      
    const onSubmitHandler = e => {
        e.preventDefault();
        // for(let i = 0; i < allPetNames.length; i++)
        // {
        //     if(allPetNames[i].name === name){
        //         setUniErr("That name is already taken.")
        //         setUni(false);
        //     }
        //     else {
        //         setUni(true);
        //     }

        // }
        // if(uni){
            axios.post("http://localhost:8000/api/newPet", {
                name,
                type,
                description,
                skill1,
                skill2,
                skill3,
                likes
            })
            .then(res=>{
                if(res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate('/');
                }})
            .catch(err=>console.log(err));
        // }
    }


    return (
        <div className="row">
            <div className="col">
                <h3>Know of a pet needing a home?</h3>
                <form onSubmit={onSubmitHandler} >
                    <div className="form-entry">
                        <label htmlFor="pname">Pet name:</label>
                        <input 
                            type="text" 
                            name="pname" 
                            id="pname" 
                            className="form-control"
                            onChange={ e => setName(e.target.value)}
                        />
                        <span className="text-danger">{errors.name ? errors.name.message : ""}</span>
                        <span className="text-danger">{uni ? uniErr : ""}</span>
                    </div>
                    <div className="form-entry">
                        <label htmlFor="ptype">Pet type:</label>
                        <input 
                            type="text" 
                            name="ptype" 
                            id="ptype" 
                            className="form-control"
                            onChange={ e => setType(e.target.value)}
                        />
                        <span className="text-danger">{errors.type ? errors.type.message : ""}</span>
                    </div>
                    <div className="form-entry">
                        <label htmlFor="pdescription">Description:</label>
                        <input 
                            type="text" 
                            name="pdescription" 
                            id="pdescription" 
                            className="form-control"
                            onChange={ e => setDescription(e.target.value)}
                        />
                        <span className="text-danger">{errors.description ? errors.description.message : ""}</span>
                    </div>
                    <p>Skills:</p>
                    <div className="pl-4 mb-3">
                        <div className="form-entry">
                            <label htmlFor="pskill1">Skill 1:</label>
                            <input 
                                type="text" 
                                name="pskill1" 
                                id="pskill1" 
                                className="form-control"
                                onChange={ e => setSkill1(e.target.value)}
                            />
                        </div>
                        <div className="form-entry">
                            <label htmlFor="pskill2">Skill 2:</label>
                            <input 
                                type="text" 
                                name="pskill2" 
                                id="pskill2" 
                                className="form-control"
                                onChange={ e => setSkill2(e.target.value)}
                            />
                        </div>
                        <div className="form-entry">
                            <label htmlFor="pskill3">Skill 3:</label>
                            <input 
                                type="text" 
                                name="pskill3" 
                                id="pskill3" 
                                className="form-control"
                                onChange={ e => setSkill3(e.target.value)}
                            />
                        </div>
                    </div>
                    <input type="submit" value="Add pet" className="btn btn-primary"/>
                    <Link to="/">
                        <button className="btn btn-danger float-right">Cancel</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default CreatePet;