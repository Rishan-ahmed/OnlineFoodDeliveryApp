package com.project.ofd.model;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
@Entity
@Data
@Table(name = "IngredientsItem")
public class IngredientsItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    @ManyToOne(cascade = CascadeType.ALL)
    private IngredientCategory inCategory;
    @JsonIgnore
    @ManyToOne
    private Resturents restaurant;
    private boolean inStock;
    @ManyToOne(cascade = CascadeType.ALL)
    private OrderItem orderItem;
    @ManyToOne
    private Food food;
    @ManyToOne
    private CartItems cartItems;
}
