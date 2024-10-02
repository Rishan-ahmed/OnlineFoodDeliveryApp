package com.project.ofd.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import lombok.Data;
@Entity
@Data
@Table(name = "cartitems")
public class CartItems {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne(cascade = CascadeType.ALL)
    private Cart cart;
    @OneToOne
    private Food food;
    private int quantity;
    @OneToMany(mappedBy = "cartItems")
    private List<IngredientsItem>  ingredients = new ArrayList<>();
    private long totalPrice;
    
}
