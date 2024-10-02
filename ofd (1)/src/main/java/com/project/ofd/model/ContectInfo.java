package com.project.ofd.model;

import jakarta.persistence.*;
import lombok.Data;
@Data
@Entity
public class ContectInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    // @OneToOne(mappedBy = "contactInformation")
    // private Resturents resturentName;
    private String name;
    private String email;
    private String phone;
    private String twitter;
    private String instagram;

}
