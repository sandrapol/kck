package com.example.demo.controllers;

import com.example.demo.utils.MNKGenerator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Sandra on 2018-11-03.
 */
@Slf4j
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@RestController
@RequestMapping("/api")
public class MNKController {
    MNKGenerator mnkGenerator= new MNKGenerator();
  //  @RequestMapping("/createMNK")
  //  public ResponseEntity<MNKModel> createMNK(String fileName){
//
  //  }

}
