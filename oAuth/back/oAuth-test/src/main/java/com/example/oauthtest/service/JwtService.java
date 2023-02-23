package com.example.oauthtest.service;

import com.example.oauthtest.repository.SampleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class JwtService implements SampleService{

    private final SampleRepository JwtRepository;

    public String login() {
        return null;
    }
}
