package com.example.demo.utils;

import com.example.demo.models.DividedData;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import static com.example.demo.utils.ConstantFields.fileLocalServerDirection;


/**
 * Created by Sandra on 2018-11-03.
 */
public class DataGenerator {
    private DividedData dividedData;
    private String fileName;
    private Double[][] dataMatrix;
    private int yIndex=-1;
    private List<String> headers = new ArrayList<>();
    private BufferedReader reader;
    private String currentLine;


    public DataGenerator(String fileName) {
        this.fileName=fileName;
        dividedData=new DividedData(fileName);
        getHeaders();
        generateMatrix();
        findYIndex();
        generateYandX();
    }
    public DividedData getDividedData(){
        return dividedData;
    }

    private List<String> getHeaders() {
        try {
            reader = new BufferedReader(new FileReader(fileLocalServerDirection + fileName));
            if ((currentLine = reader.readLine()) != null) {
                headers = Arrays.asList(currentLine.split(";"));
            }
            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return headers;
    }

    private Double[] lineToDouble(String[] elems) {
        Double[] thisLine = new Double[elems.length];
        for (int i = 0; i < elems.length; i++) {
            thisLine[i] = Double.parseDouble(elems[i]);
        }

        return thisLine;
    }

    private void generateMatrix() {
        String[] line;
        List<Double[]> lines = new ArrayList<>();
        try {
            reader = new BufferedReader(new FileReader(fileLocalServerDirection + fileName));
            currentLine = reader.readLine();
            while ((currentLine = reader.readLine()) != null) {
                line = currentLine.split(";");
                lines.add(lineToDouble(line));
            }
            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        dataMatrix = new Double[lines.size()][0];
        lines.toArray(dataMatrix);
    }

    private void findYIndex() {
        headers = headers.stream().map(elem -> elem.toUpperCase()).collect(Collectors.toList());
        yIndex = headers.indexOf("Y");
        headers.remove("Y");
        dividedData.setHeaders(headers);
    }

    private  void generateYandX() {
        int row = dataMatrix.length;
        int col = dataMatrix[0].length;

        Double[][] xArray = new Double[row][col - 1]; //new Array will have one column less
        Double[] yArray = new Double[row];
        for (int i = 0; i < row; i++) {
            for (int j = 0, currColumn = 0; j < col; j++) {
                if (j != yIndex) {
                    xArray[i][currColumn++] = dataMatrix[i][j];
                }
                else{
                    yArray[i]= dataMatrix[i][j];
                }
            }
        }
        dividedData.setYdata(yArray);
        dividedData.setDataMatrix(xArray);

    }

}
