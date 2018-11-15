package com.example.demo.controllers;

import com.example.demo.exceptions.FileNotValidException;
import com.example.demo.utils.HellwigMethod;
import com.example.demo.utils.MNKGenerator;
import com.example.demo.utils.ResponseFactory;
import com.example.demo.validators.CsvValidation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;

import static com.example.demo.utils.ConstantFields.SUCCESS;
import static com.example.demo.utils.ConstantFields.fileLocalServerDirection;

/**
 * Created by Sandra on 2018-11-03.
 */
@Slf4j
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@RestController
@RequestMapping("/api")
public class UploadController {
    HellwigMethod hellwigMethod=new HellwigMethod();
    MNKGenerator mnkGenerator=new MNKGenerator();
    @PostMapping(value = "/upload")
    public ResponseEntity<String> upload(@RequestParam MultipartFile file) {

        try {
            CsvValidation csvValidation = new CsvValidation();
            if (!file.isEmpty()) {
                csvValidation.validate(file.getOriginalFilename());
                InputStream is = file.getInputStream();
                File targetFile = new File(fileLocalServerDirection + file.getOriginalFilename());
                FileUtils.copyInputStreamToFile(is, targetFile);
                is.close();
                return ResponseEntity.ok("File was uploaded");
            }
            return ResponseEntity.badRequest().header("This file is already on S3").build();
        } catch (FileNotValidException | IOException exception) {
            return ResponseFactory.ResponseError("File is not valid", "error details: " + exception.getMessage());
        }
    }

    @RequestMapping (value = "/deleteFile")
    public ResponseEntity<String> deleteFile(@RequestParam String fileName) {

        File file = new File(fileLocalServerDirection + fileName);
        if (file.delete()) {
            return ResponseEntity.ok().header(SUCCESS,"File " + fileName + " was deleted!").build();
        } else
            return ResponseFactory.ResponseError("File is not valid", "error details: File doesn't exist!");
    }
    @RequestMapping (value = "/hellwig")
    public ResponseEntity<String> R0(@RequestParam String fileName) {
        hellwigMethod.chooseVariables(fileName);
        System.out.print("wybrano: "+ Arrays.toString(hellwigMethod.getIndexes()));
        System.out.println("Matrix wybranych danych:"+ Arrays.deepToString(hellwigMethod.getDividedData() ));
       // mnkGenerator.createMNK(hellwigMethod.getDividedData(),hellwigMethod.getY());
        mnkGenerator.check();
        return ResponseEntity.ok().header(SUCCESS,"Variables chosen!").build();
    }
}

