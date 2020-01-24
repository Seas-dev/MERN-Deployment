import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const AllPets = props => {
    const [ pets, setPets ] = useState([]);

    useEffect (() => {
        axios.get("http://localhost:8000/api/pets")
          .then(res => setPets(res.data))
          .catch(err => console.log(err));
      }, []);

      return (
          <div className="row">
              <div className="col">
              <h3>These pets are looking for a home!</h3>
              <Link to="/pets/new" className="bigger">Add a pet to the shelter</Link>
                  <table className="table table-dark table-striped mt-2">
                      <thead>
                          <tr>
                              <th>Name</th>
                              <th>Type</th>
                              <th>Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                            pets.map(pet =>
                                <tr key={pet._id}>
                                    <td>{pet.name}</td>
                                    <td>{pet.type}</td>
                                    <td>
                                        <Link to={`/pets/${pet._id}`} className="btn btn-outline-info mr-3">Details</Link>
                                         | 
                                        <Link to={`/pets/${pet._id}/edit`} className="btn btn-outline-warning ml-3">Edit</Link>
                                    </td>
                                </tr>
                            )
                          }
                      </tbody>
                  </table>
              </div>
          </div>
      );    
}

export default AllPets;