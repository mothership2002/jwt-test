package com.example.oauthtest.controller;

import com.example.oauthtest.service.SampleService;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@Controller
@RestController
@RequestMapping(value = "/api/v1/test", produces = "application/json; charset=UTF-8")
@RequiredArgsConstructor
public class JwtController {

    private final SampleService jwtService;

    @GetMapping({"", "/"})
    public Map main() {
        Map<String, String> map = new HashMap<>();
        map.put("message","hello world");
        return map;
    }

    @GetMapping("/login")
    public Map login() {
        Map<String, String> map = new HashMap<>();
        map.put("message","test");
        return map;
    }

}
