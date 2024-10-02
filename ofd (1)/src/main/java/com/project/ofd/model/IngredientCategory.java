package com.project.ofd.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "ingredientCategory")
public class IngredientCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "inCategory")
    private List<IngredientsItem> ingredients = new ArrayList<IngredientsItem>();
}
