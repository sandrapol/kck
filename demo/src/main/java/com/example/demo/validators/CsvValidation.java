package com.example.demo.validators;

import com.example.demo.exceptions.FileNotValidException;

/**
 * Created by Sandra on 2018-11-03.
 */
public class CsvValidation implements Rule {

    @Override
    public void validate(String fileName) throws FileNotValidException {
        if(!fileName.endsWith(".csv")){
            throw new FileNotValidException("Wrong file format");
        }
    }
}
