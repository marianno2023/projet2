import React, { useState, useEffect } from 'react'
import { useHistory, Link, useParams } from 'react-router-dom'
import ProduitService from '../services/ProduitService'

const AddProduitComponent = () => { 

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [prix, setPrix] = useState('')
    const [imageFile, setImageFile] = useState('')
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        ProduitService.getPId(id).then((response) => {
            setName(response.data.name)
            setDescription(response.data.description)
            setPrix(response.data.prix)
            setImageFile(response.data.imageFile)
        }).catch(error => {
            console.log(error);
        })
    }, [])

    const saveOrUpdateProduit = (e) => {
        e.preventDefault();
        const produit = { name, description, prix, imageFile }


        if (id) {

            ProduitService.updateProduit(id, produit).then((response) => {
                history.push('/produits')
            }).catch(error => {
                console.log(error)
            })
        } else {

            ProduitService.createProduit(produit).then((response) => {
                console.log(response.data)

                history.push('/produits')

            }).catch(error => {
                console.log(error)
            })
        }



    }



    const title = () => {
        if (id) {
            return <h2 className="text-center">Edit Produit</h2>
        } else {
            return <h2 className="text-center">Add Produit</h2>
        }
    }



    return (
        <div className="container" >
            <div className="row" >
                {
                    title()
                }
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label> Name: </label>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    name="Name"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className="form-group">
                                <label> Description: </label>
                                <input
                                    type="text"
                                    placeholder=" Description "
                                    name="Description"
                                    className="form-control"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Prix: </label>
                                <input
                                    type="text"
                                    placeholder="prix produit"
                                    name="Prix"
                                    className="form-control"
                                    value={prix}
                                    onChange={(e) => setPrix(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label> Image: </label>
                                <input
                                    type="file" 
                                    placeholder="Email Address"
                                    name="imageFile"
                                    className="form-control"
                                    onChange={(e) => setImageFile(e.target.files[0])}
                                />
                            </div>

                            <button className="btn btn-success" onClick={(e) => saveOrUpdateProduit(e)}>Save</button>
                            <Link className="btn btn-danger" to="/produits">Cancel</Link>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduitComponent;
