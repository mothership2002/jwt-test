package com.example.oauthtest.controller;

import com.example.oauthtest.service.SampleService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
@RequestMapping("/jwt/api")
@RequiredArgsConstructor
public class JwtController {

    private final SampleService jwtService;


}
