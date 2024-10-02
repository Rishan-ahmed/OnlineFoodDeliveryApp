package com.project.ofd.Requests;

import com.project.ofd.model.Address;
import com.project.ofd.model.ContectInfo;
import com.project.ofd.model.User;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
@Data
public class createResturentRequest {
    private long Id;
    // private User owner;
    private String name;
    private String description;
    private String cuisineType;
    // private Address address;
    private String address;
    private ContectInfo contactInformation;
    private String openingHours;
    private List<String> images = new ArrayList<String>();
}
