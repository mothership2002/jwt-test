package com.example.oauthtest.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {


    // adapter , antMatchers() - deprecated upper security 6.0
    @Bean
    public SecurityFilterChain configure(HttpSecurity http) throws Exception {
        return http
                .cors().and()
                .csrf().disable()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                .requestMatchers(HttpMethod.OPTIONS, "/api/v1/test/login").permitAll()
//                .requestMatchers("/api/v1/test/permit-all").permitAll()
//                .requestMatchers("/api/v1/test/auth").authenticated()
//                .requestMatchers("/**").authenticated()
                .anyRequest().permitAll()
                .and()
                .formLogin().disable().build();
    }

//    - cors().and() : CorsFilter 활성화
//    - csrf().disable() : JWT 토큰

//    - sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) : stateless 서버
//    - authorizeRequests() : 인증 관련
//    - requestMatchers : 특정 url

//    - permitAll : 모두 허가
//    - authenticated : 인가된 인원만
//    - anonymous : 익명
}
