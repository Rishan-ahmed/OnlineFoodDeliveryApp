package com.project.ofd.model;
import java.util.ArrayList;
import java.util.List;
import java.util.Date;

import jakarta.persistence.*;
import lombok.Data;
@Entity
@Data
@Table(name = "Events")
public class Events {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ElementCollection
    private List<String> image = new ArrayList<>();
    private Date startedAt;
    private Date endsAt;
    private String name;
    @ManyToOne
    private Resturents restaurant;
    private String location;
}
