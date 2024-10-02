package com.project.ofd.model;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.project.ofd.dto.resturentDto;
import jakarta.persistence.*;
import lombok.Data;
import java.util.List;
import  java.util.ArrayList;
@Entity
@Data
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String email;
    private String password;
    // @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
     private USER_ROLE role;
     @OneToMany(cascade = CascadeType.ALL, mappedBy="customer")
     private List<Order> order = new ArrayList<>();
     @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "customer")
     private List<Address> addresses = new ArrayList<>();
    //  @ElementCollection
    //  private List<resturentDto> favorite = new ArrayList<>();
    private String status;
}