package com.project.ofd.controllers.adimin;

import com.project.ofd.Requests.createResturentRequest;
import com.project.ofd.model.Resturents;
import com.project.ofd.model.User;
import com.project.ofd.service.ResturentService;
import com.project.ofd.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/admin/api/restaurants")
@RestController
public class AdminRestaurantController {

    @Autowired
    ResturentService resturentService;
    @Autowired
    UserService userService;

    @PostMapping("/createRestaurant")
    public ResponseEntity<Resturents> CreateRestaurant(
            @RequestBody createResturentRequest req,
            @RequestHeader("Authorization") String jwt
            ) throws Exception
    {
        User user = userService.findUserByJwtToken(jwt);
        Resturents resturents = resturentService.creteRestuents(req, user);
        return new ResponseEntity<>(resturents, HttpStatus.CREATED);
    }

    @PutMapping("/{id}/updateRestaurant")
    public ResponseEntity<Resturents> UpdateRestaurant(@RequestParam long id,
                                                       @RequestBody createResturentRequest UpdateReq
                                                       ) throws Exception
    {
        Resturents resturents = resturentService.updateResturent(id,UpdateReq);
        return new ResponseEntity<>(resturents, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}/DeleteRestaurant")
    public String DeleteRestaurant(@PathVariable long id) throws Exception{
        resturentService.deleteResturent(id);
        return "Deleted restaurant with id: " + id;
    }

    @PutMapping
    public boolean UpdateRestaurantStatus(
            @RequestParam long id
           ) throws Exception
    {
        return resturentService.updateStatus(id);
    }


    @PutMapping("/updateStatus/{id}")
    public ResponseEntity<Void> updateStatus(
            @PathVariable Long id,
            @RequestHeader("Authorization") String jwt) throws Exception {
        boolean isUpdated = resturentService.updateStatus(id);
        if (isUpdated) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
