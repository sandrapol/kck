package com.example.demo.validators;

import com.example.demo.exceptions.FileNotValidException;

/**
 * Created by Sandra on 2018-11-03.
 */
public interface Rule {

    /**
     * Validate method, which one throw exception when file is not correct
     *
     * @param fileName the file name
     * @throws FileNotValidException the file not valid exception
     */
    void validate(String fileName) throws FileNotValidException;

}
