package com.example.restblog.data;

import lombok.*;

import javax.persistence.Entity;
import java.time.LocalDate;
import java.util.Collection;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString


public class User {

    private long id;
    private String username;
    private String email;
    private String password;
    private LocalDate createdAt;
    private Role role;
    private Collection<Post> posts;

    public enum Role {USER, ADMIN}

    ;


}
