package com.project.ofd.model;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import lombok.Data;
@Entity
@Data
@Table(name = "cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @OneToOne
    private User customer;
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "cart")
    private List<Order> orders = new ArrayList<>();
    private long total;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "cart")
    private List<CartItems> cartItems = new ArrayList<>();
}
