import React, { useState, useEffect } from 'react'
import {Link, useParams } from 'react-router-dom'
import ProduitService from '../services/ProduitService'

function ViewProduitComponent() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [prix, setPrix] = useState('')
    const { id } = useParams();

    useEffect(() => {
        ProduitService.getPId(id).then((response) => {
            setName(response.data.name)
            setDescription(response.data.description)
            setPrix(response.data.prix)
        })
    }, [])

    return (
        <div className="container" >
            <div className="row" >
            <h2 className="text-center">VIEW</h2>
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="card-body">
                            <div className="form-group">
                                <label> Name: </label>
                                <div> {name}</div>
                            </div>
                            <div className="form-group">
                                <label> Description: </label>
                                <div> {description}</div>
                            </div>
                            <div className="form-group">
                                <label> Prix: </label>
                                <div> {prix}</div>
                            </div>
                            <Link className="btn btn-danger" to="/produits">Cancel</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewProduitComponent
