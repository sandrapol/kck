package com.example.demo.utils;

import com.example.demo.models.MNKModel;

import java.util.List;

/**
 * Created by Sandra on 2018-11-02.
 */
public class MNKGenerator {
    private MNKModel   mnkModel;
    private List<String> headers;
    private Double[][] dataMatrix;
    private DataGenerator dataGenerator;

    public void createMNK(String fileName){
        dataGenerator=new DataGenerator(fileName);
        //headers=dataGenerator.getHeaders(fileName);
        //dataMatrix=dataGenerator.getMatrix(fileName);
    }
}
