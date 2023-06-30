package com.autourducode.demo.controller;


import com.autourducode.demo.model.Produit;
import com.autourducode.demo.repository.ProduitRepository;
import com.autourducode.demo.service.ProduitService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/produit")
@AllArgsConstructor

public class ProduitController {

    @Autowired
    private ProduitRepository produitRepository;

    private final ProduitService produitService;

    @PostMapping("/create")
    public Produit createProduit(@RequestBody Produit produit){
        return produitService.creer(produit);
    }

    @GetMapping("/read")
    public List<Produit> readProduit(){
        return produitService.lire();
    }


    // get employee by id rest api


    @GetMapping("/get/{id}")
    public ResponseEntity<Produit> getPId(@PathVariable Long id){
        Produit employee = produitRepository.findById(id)
                .orElseThrow(()->new RuntimeException("Oooh Produit not Find"));
        return ResponseEntity.ok(employee);
    }


    @PutMapping("/update/{id}")
    public Produit updateProduit(@PathVariable Long id ,@RequestBody Produit produit){
        return produitService.modifier(id, produit);

    }

    @DeleteMapping("/delete/{id}")
    public String deleteProduit(@PathVariable Long id){
        return produitService.supprimer(id);
    }

}
