import axios from "axios";

const Produit_API_URL = 'http://localhost:2023/produit';

class ProduitService{
    readProduit(){
        return axios.get(Produit_API_URL+'/read');
    }
    createProduit(produit){
        return axios.post(Produit_API_URL+'/create',produit);
    }
    getPId(id){
        return axios.get(Produit_API_URL +'/get/'+ id);
    }

    updateProduit(id, produit){
        return axios.put(Produit_API_URL +"/update/"+ id, produit);
    }
    deleteProduit(id){
        return axios.delete(Produit_API_URL +"/delete/"+ id);
    }
}

export default new ProduitService();