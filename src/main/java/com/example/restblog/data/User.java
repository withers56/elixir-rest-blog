package com.example.restblog.data;

import lombok.*;

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
    private Date createdAt;
    private Role role;

    public enum Role {USER, ADMIN}

    ;


}
