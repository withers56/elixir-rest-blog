package com.example.restblog.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UsersRepository extends JpaRepository<User, Long> {

//    @Query("SELECT u FROM users u WHERE u.username = ?1")
    User findByUsernameIs(String username);
    User findByEmailIs(String email);
}
