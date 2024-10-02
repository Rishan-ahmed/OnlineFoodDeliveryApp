package com.project.ofd.model;

import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "category")
public class Category {
        @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    @JsonIgnore
    @ManyToOne
    private Resturents restaurant;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "foodCategory")
    private List <Food> food = new ArrayList<Food>();
}

