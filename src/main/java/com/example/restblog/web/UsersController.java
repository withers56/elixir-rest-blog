package com.example.restblog.web;


import com.example.restblog.data.User;
import com.example.restblog.data.UsersRepository;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.*;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/users", headers = "Accept=application/json")
public class UsersController {

    private UsersRepository usersRepository;

    public UsersController(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    @GetMapping
    private List<User> getAll() {
        return usersRepository.findAll();
    }

    @GetMapping("{userId}")
    private User getById(@PathVariable Long userId){
        return usersRepository.getById(userId);
    }

    @PostMapping
    private void createUser(@RequestBody User newUser) {

        newUser.setCreatedAt(LocalDate.now());
        newUser.setRole(User.Role.USER);

        usersRepository.save(newUser);

        System.out.println("User created");
    }

    @PutMapping("{userId}")
    private void updateUser(@PathVariable Long userId, @RequestBody User user) {

        User userToUpdate = usersRepository.getById(userId);
        userToUpdate.setPassword(user.getPassword());
        usersRepository.save(userToUpdate);

        System.out.println("Updating password of user with id of: " + userId + " \nto: " + user);
    }

    @DeleteMapping("{userId}")
    private void deleteUser(@PathVariable long userId) {
        usersRepository.deleteById(userId);
        System.out.println("Deleting user with id of: " + userId);
    }

    @GetMapping("/username")
    @ResponseBody
    private User getByUsername(@RequestParam String username) {
        User user = usersRepository.findByUsernameIs(username);
        return user;
    }

//    @GetMapping("/email")
//    @ResponseBody
//    private User getByEmail(@RequestParam String email) {
//        LocalDate date = LocalDate.now();
//        return new User(5L, "withers56", email, "w23rwdf", date, User.Role.USER, Arrays.asList(post6));
//    }


    @PutMapping("/{userId}/updatePassword")
    private void updatePassword(@PathVariable Long userId, @RequestBody String newPassword){

        User userToUpdate = usersRepository.getById(userId);
        userToUpdate.setPassword(newPassword);
        usersRepository.save(userToUpdate);

        System.out.println("Updating the password of user: " + userToUpdate.getUsername() + " to: " + newPassword);
    }

}
