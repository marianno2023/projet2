package com.autourducode.demo.service;

import com.autourducode.demo.model.Produit;

import java.util.List;

public interface ProduitService {
    Produit creer(Produit produit);

    List<Produit> lire();

    Produit modifier(Long id, Produit produit);

    String supprimer(Long id);

}
