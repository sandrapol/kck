package com.example.demo.validators;

import com.example.demo.exceptions.FileNotValidException;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import static com.example.demo.utils.ConstantFields.fileLocalServerDirection;

/**
 * Created by Sandra on 2018-11-17.
 */
public class HeadersValidation implements Rule {
    private BufferedReader reader;
    private List<String> headers = new ArrayList<>();
    String currentLine;
    @Override
    public void validate(String fileName) throws FileNotValidException {
        try {
            reader = new BufferedReader(new FileReader(fileLocalServerDirection + fileName));
            if ((currentLine = reader.readLine()) != null) {
                headers = Arrays.asList(currentLine.split(";"));
            }
            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        headers = headers.stream().map(elem -> elem.toUpperCase()).collect(Collectors.toList());
        if(!headers.contains("Y")){
            throw new FileNotValidException("Required headers not found!");
        }
    }
}
