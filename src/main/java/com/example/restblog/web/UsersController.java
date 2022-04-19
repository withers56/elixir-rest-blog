package com.example.restblog.web;


import com.example.restblog.data.User;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/users", headers = "Accept=application/json")
public class UsersController {

    @GetMapping
    private List<User> getAll() {
        LocalDate date = LocalDate.now();
        List<User> users = new ArrayList<>();
        users.add(new User(1, "testman", "test@gmail.com", "mypass", date, User.Role.USER));
        users.add(new User(2, "testman", "test@gmail.com", "mypass", date, User.Role.USER));
        users.add(new User(3, "testman", "test@gmail.com", "mypass", date, User.Role.ADMIN));
        return users;
    }

    @GetMapping("{userId}")
    private User getById(@PathVariable Long userId){
        LocalDate date = LocalDate.now();
        return new User(userId, "byIdTestname", "email", "38dh83hs", date, User.Role.USER);
    }

    @PostMapping
    private void createUser(@RequestBody User newUser) {
        System.out.println("ready to create: " + newUser);
    }

    @PutMapping("{userId}")
    private void updateUser(@PathVariable Long userId, @RequestBody User user) {
        System.out.println("Updating user with id of: " + userId + " \nto: " + user);
    }

    @DeleteMapping("{userId}")
    private void deleteUser(@PathVariable long userId) {
        System.out.println("Deleting user with id of: " + userId);
    }

    @GetMapping("/username")
    @ResponseBody
    private User getByUsername(@RequestParam String username) {
        LocalDate date = LocalDate.now();
        return new User(5L, username, "wwithers16@Yahoo.com", "nbgyhjbd7828d8dhh2", date, User.Role.USER);
    }

    @GetMapping("/email")
    @ResponseBody
    private User getByEmail(@RequestParam String email) {
        LocalDate date = LocalDate.now();
        return new User(5L, "withers56", email, "w23rwdf", date, User.Role.USER);
    }


    @PutMapping("/profile/{username}")
    private void updatePassword(@PathVariable String username, @RequestBody String newPassword){
        System.out.println("Updating the password of user: " + username + " to: " + newPassword);
    }

}
