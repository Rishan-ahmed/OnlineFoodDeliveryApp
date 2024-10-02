package com.project.ofd.model;


import java.util.ArrayList;
import java.util.List;
import java.util.Date;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "resturents")
public class Resturents {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    private User owner;
    private String name;
    private String description;
    private String cuisineType;
    // @OneToOne
    // private Address address;
    private String address;
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private ContectInfo contactInformation;
    private String openingHours;
    private String reviews;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "restaurant")
    private List <Order> orders = new ArrayList<>();
    private String numRating;
    @ElementCollection
    private List<String>  images = new ArrayList<String>();
    private Date registrationDate;
    private boolean status;
    @OneToMany(mappedBy = "restaurant")
    private List<Food> foods = new ArrayList<Food>();
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "restaurant")
    private List<OrderItem> orderItems = new ArrayList<OrderItem>();
    @OneToMany(mappedBy = "restaurant")
    private List<Events> event = new ArrayList<Events>();



}
