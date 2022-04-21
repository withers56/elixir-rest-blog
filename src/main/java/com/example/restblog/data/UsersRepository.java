package com.example.restblog.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UsersRepository extends JpaRepository<User, Long> {

//    User findByUsername(String username);
//    User findByEmail(String email);
    User findByUsername(String username);

}
