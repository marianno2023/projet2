import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import ProduitService from '../services/ProduitService'


function ListProduitComponent() {
    

    const [produits, setProduits] = useState([])
    const history = useHistory();

    useEffect(() => {
        readProduit();

    }, [])

    const readProduit = () => {
        ProduitService.readProduit().then((response) => {
            setProduits(response.data)
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteProduit = (id) => {
        ProduitService.deleteProduit(id).then((response) => {
            readProduit();
        }).catch(error => {
            console.log(error);
        })
    }

    const editeProduit = (id) =>{
        history.push(`/edit-produit/${id}`);
    }

    const viewProduit = (id) =>{
        history.push(`/view-produit/${id}`);
    }

    return (
        <div className="container">
            <h2 className="text-center">List Produits</h2>

            <Link to="/add-Produit" className="btn btn-primary mb-2">Add Produit</Link>

            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th> Produit Id</th>
                        <th> Produit Name</th>
                        <th> Produit Description</th>
                        <th> Produit prix </th>
                        <th> Produit image </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        produits.map(
                            p =>
                                <tr key={p.id}>
                                    <td>{p.id}</td>
                                    <td>{p.name}</td>
                                    <td>{p.description}</td>
                                    <td>{p.prix}</td>
                                    <td>{p.prix}</td>
                                    <td>
                                        <button className="btn btn-info" onClick={ () => editeProduit(p.id)} style={{ marginLeft: "10px" }} >Update</button >
                                        <button className="btn btn-info" onClick={ () => viewProduit(p.id)} style={{ marginLeft: "10px" }} >View</button >
                                        <button className="btn btn-danger" onClick={ () => deleteProduit(p.id)} style={{ marginLeft: "10px" }} >Delete</button >
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ListProduitComponent
