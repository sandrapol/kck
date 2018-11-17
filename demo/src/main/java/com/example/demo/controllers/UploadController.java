package com.example.demo.controllers;

import com.example.demo.exceptions.FileNotValidException;
import com.example.demo.models.DividedData;
import com.example.demo.models.MNKModel;
import com.example.demo.utils.*;
import com.example.demo.validators.CsvValidation;
import com.example.demo.validators.HeadersValidation;
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
import java.util.List;

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
    private HellwigMethod hellwigMethod;
    private MNKGenerator mnkGenerator;
    private MNKModel mnk;
    private Predictions predictions;

    /**
     * Wrzuca plik do folderu resources
     * Zwraca komunikat o sukcesie lub błędzie
     */
    @PostMapping(value = "/upload")
    public ResponseEntity<String> upload(@RequestParam MultipartFile file) {
        try {
            CsvValidation csvValidation = new CsvValidation();
            HeadersValidation headersValidation=new HeadersValidation();
            if (!file.isEmpty()) {
                csvValidation.validate(file.getOriginalFilename());
                headersValidation.validate(file.getOriginalFilename());
                InputStream is = file.getInputStream();
                File targetFile = new File(fileLocalServerDirection + file.getOriginalFilename());
                FileUtils.copyInputStreamToFile(is, targetFile);
                is.close();
                return ResponseEntity.ok("File was uploaded");
            }
            return ResponseEntity.badRequest().header("This file is empty!").build();
        } catch (FileNotValidException | IOException exception) {
            return ResponseFactory.ResponseError("File is not valid", "error details: " + exception.getMessage());
        }
    }

    /**
     * Usuwa plik
     * Zwraca komunikat o sukcesie lub błędzie
     */
    @RequestMapping(value = "/deleteFile")
    public ResponseEntity<String> deleteFile(@RequestParam String fileName) {

        File file = new File(fileLocalServerDirection + fileName);
        if (file.delete()) {
            return ResponseEntity.ok().header(SUCCESS, "File " + fileName + " was deleted!").build();
        } else
            return ResponseFactory.ResponseError("File is not valid", "error details: File doesn't exist!");
    }

    /**
     * Wywołuje metode hellwiga i wybiera zmienne
     *
     * @return lista z wybranymi naglówkami
     */
    @RequestMapping(value = "/hellwig")
    public ResponseEntity<List<String>> countHellwig(@RequestParam String fileName) {
        try {
            hellwigMethod = new HellwigMethod();
            hellwigMethod.chooseVariables(fileName);
        } catch (Exception e) {
            return ResponseFactory.ResponseError("Data not found!", "File doesn't exist");
        }
        return ResponseEntity.ok(hellwigMethod.getHeaders());
    }

    /**
     * tworzy model z danymi z hellwiga, ale najpierw musi byc wywolana /hellwig
     *
     * @return utworzony model
     */
    @RequestMapping(value = "/mnkWithHellwig")
    public ResponseEntity<MNKModel> mnkWithHellwig() {
        try {
            mnkGenerator = new MNKGenerator();
            mnk = mnkGenerator.createMNK(hellwigMethod.getDividedData(), hellwigMethod.getY(), hellwigMethod.getHeaders());
        } catch (Exception e) {
            return ResponseFactory.ResponseError("Data not found!", "File doesn't exist");
        }
        return ResponseEntity.ok(mnk);
    }

    /**
     * tworzy model ze wszystkimi danymi, ale najpierw musi byc wywolana /hellwig
     *
     * @return utworzony model
     */
    @RequestMapping(value = "/newMNK")
    public ResponseEntity<MNKModel> newMNK(@RequestParam String fileName) {
        try {
            DataGenerator dataGenerator = new DataGenerator(fileName);
            DividedData dividedData = dataGenerator.getDividedData();
            mnkGenerator = new MNKGenerator();
            mnk = mnkGenerator.createMNK(dividedData.getDataMatrix(), dividedData.getYdata(), dividedData.getHeaders());
        } catch (Exception e) {
            return ResponseFactory.ResponseError("Data not found!", "File doesn't exist");
        }
        return ResponseEntity.ok(mnk);
    }


    @RequestMapping(value = "/predict")
    public ResponseEntity<MNKModel> predicate(@RequestParam int from, @RequestParam int to) {

        predictions.createPredictions(from, to, mnk.getParameters());
        return ResponseEntity.ok(mnk);
    }
}

