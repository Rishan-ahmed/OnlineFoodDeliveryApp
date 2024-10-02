package com.project.ofd.controllers;

import com.project.ofd.Requests.createResturentRequest;
import com.project.ofd.model.Resturents;
import com.project.ofd.service.ResturentService;
import com.project.ofd.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/restaurants")
public class customerRestaurantController {

    @Autowired
    ResturentService resturentService;
    @Autowired
    UserService userService;

    @GetMapping ("/allRestaurants")
    public ResponseEntity<List<Resturents>> getAllRestaurants(
            // @RequestHeader("Authorization") String jwt
    ) throws Exception
    {
        List<Resturents> restaurant = resturentService.getAllResturents();
        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }

    @GetMapping ("/SearchRestaurants")
    public ResponseEntity<List<Resturents>> SearchRestaurants(
            @RequestBody createResturentRequest req,
            @RequestHeader("Authorization") String jwt
    ) throws Exception
    {
        List<Resturents> restaurant = resturentService.getAllResturents();
        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }

    // @GetMapping("/getRestaurant/{id}")
    // public ResponseEntity<Resturents> getRestaurantById(
    //         @PathVariable Long id,
    //         @RequestHeader("Authorization") String jwt) throws Exception {
    //     Resturents restaurant = resturentService.findRestaurantById(id);
    //     if (restaurant != null) {
    //         return new ResponseEntity<>(restaurant, HttpStatus.OK);
    //     } else {
    //         return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    //     }
    // }
}
