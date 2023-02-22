package com.example.oauthtest.dto;

import lombok.*;

@Data
public class Member {

    @NonNull
    private String id;
    @NonNull
    private String password;

}
