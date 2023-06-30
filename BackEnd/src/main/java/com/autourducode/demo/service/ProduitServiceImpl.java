package com.autourducode.demo.service;

import com.autourducode.demo.model.Produit;
import com.autourducode.demo.repository.ProduitRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@AllArgsConstructor

public class ProduitServiceImpl implements ProduitService {

    private final ProduitRepository produitRepository;

    @Override
    public Produit creer(Produit produit) {
        return produitRepository.save(produit);
    }

    @Override
    public List<Produit> lire() {
        return produitRepository.findAll();
    }

    @Override
    public Produit modifier(Long id, Produit produit) {
        return produitRepository.findById(id)
                .map(p-> {
                    p.setPrix(produit.getPrix());
                    p.setName(produit.getName());
                    p.setDescription(produit.getDescription());

                    return produitRepository.save(p);
                }).orElseThrow(()->new RuntimeException("Oooh Produit not Find"));
    }

    @Override
    public String supprimer(Long id) {
        produitRepository.deleteById(id);
        return "produit Delete ";
    }
}
