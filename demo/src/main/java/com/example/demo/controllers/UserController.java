package com.example.demo.controllers;

import com.example.demo.repositories.UserRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Sandra on 2018-11-02.
 */
@Slf4j
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@RestController
public class UserController {

    private final UserRepo userRepo;

    @RequestMapping("/api/cos")
    public ResponseEntity<String> elo() {
        return ResponseEntity.ok().header("succes", "ok").build();
    }
}
