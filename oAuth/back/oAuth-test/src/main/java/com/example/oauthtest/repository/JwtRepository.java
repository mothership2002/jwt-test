package com.example.oauthtest.repository;

import com.example.oauthtest.dto.Member;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

@Repository
@Slf4j
public class JwtRepository implements SampleRepository {

    public String login(Member member) {
        return null;
    }
}
