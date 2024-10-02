package com.project.ofd.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import lombok.Data;
@Entity
@Data
@Table(name = "orderitem")
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @OneToOne
    private Food food;
    private int quantity;
    private long totalPrice;
    @ManyToOne
    private Order order;
    @OneToMany(mappedBy = "orderItem")
    private List<IngredientsItem> ingredients = new ArrayList<>(); 
    @ManyToOne
    private Resturents restaurant;
}
