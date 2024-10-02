package com.project.ofd.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.Date;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.ArrayList;
import java.util.List;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    private User customer;
    @JsonIgnore
    @ManyToOne
    private Resturents restaurant;
    private long totalAmount;
    private String orderStatus;
    private Date createdAt;
    @OneToOne
    private Address deliveryAddress;
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "order")
    private List <OrderItem> items = new ArrayList<OrderItem>();
    // private String payment;
    private int totalItem; 
    private int totalPrice;
    @ManyToOne
    private Cart cart;
}
