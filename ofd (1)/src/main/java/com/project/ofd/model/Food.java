package com.project.ofd.model;
import java.util.Date;
import java.util.List;
import java.util.ArrayList;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "food")
public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String description;
    private int price;
    @ManyToOne(cascade = CascadeType.ALL)
    private Category foodCategory;

     @Column(length = 1000)
     @ElementCollection
     private List<String>  images = new ArrayList<String>();
    private boolean available;
    @ManyToOne
    private Resturents restaurant;
    private boolean isVegetarian;
    private boolean isSeasonal;
    @OneToMany(mappedBy = "food")
    private List<IngredientsItem> ingredients = new ArrayList<>();

    private Date creationDate;
}
