package com.example.restblog.web;


import com.example.restblog.data.Post;
import com.example.restblog.data.User;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Array;
import java.time.LocalDate;
import java.util.*;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/users", headers = "Accept=application/json")
public class UsersController {

//    private static final Post post1 = new Post(1L, "Testtitle1", "Testcontent", null);
//    private static final Post post2 = new Post(2L, "Testtitle1", "Testcontent", null);
//    private static final Post post3 = new Post(3L, "Testtitle1", "Testcontent", null);
//    private static final Post post4 = new Post(4L, "Testtitle1", "Testcontent", null);
//    private static final Post post5 = new Post(5L, "Testtitle1", "Testcontent", null);
//    private static final Post post6 = new Post(6L, "Testtitle1", "Testcontent", null);



    @GetMapping
    private List<User> getAll() {
        LocalDate date = LocalDate.now();
        List<User> users = new ArrayList<>();
//        users.add(new User(1, "testman", "test@gmail.com", "mypass", date, User.Role.USER, Arrays.asList(post1, post2)));
//        users.add(new User(2, "testman", "test@gmail.com", "mypass", date, User.Role.USER, Arrays.asList(post3, post4)));
//        users.add(new User(3, "testman", "test@gmail.com", "mypass", date, User.Role.ADMIN, Arrays.asList(post5, post6)));
        return users;
    }

    @GetMapping("{userId}")
    private User getById(@PathVariable Long userId){
        LocalDate date = LocalDate.now();
        return new User(userId, "byIdTestname", "email", "38dh83hs", date, User.Role.USER, new ArrayList<>());
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

//    @GetMapping("/username")
//    @ResponseBody
//    private User getByUsername(@RequestParam String username) {
//        LocalDate date = LocalDate.now();
//        return new User(5L, username, "wwithers16@Yahoo.com", "nbgyhjbd7828d8dhh2", date, User.Role.USER, Arrays.asList(post1, post2, post3));
//    }

//    @GetMapping("/email")
//    @ResponseBody
//    private User getByEmail(@RequestParam String email) {
//        LocalDate date = LocalDate.now();
//        return new User(5L, "withers56", email, "w23rwdf", date, User.Role.USER, Arrays.asList(post6));
//    }


    @PutMapping("/{username}/updatePassword")
    private void updatePassword(@PathVariable String username, @RequestBody String newPassword){
        System.out.println("Updating the password of user: " + username + " to: " + newPassword);
    }

}
