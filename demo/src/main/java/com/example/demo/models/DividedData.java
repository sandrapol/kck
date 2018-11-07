package com.example.demo.models;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by Sandra on 2018-11-06.
 */
public class DividedData {
    private String fileName;
    private List<String> headers = new ArrayList<>();
    private Double[][] dataMatrix;
    private Double[] yData;

    public Double[] getYdata() {
        return yData;
    }

    @Override
    public String toString() {
        return "DividedData{" +
                "fileName='" + fileName + '\'' +
                ", headers=" + headers +
                ", dataMatrix=" + Arrays.deepToString(dataMatrix) +
                ", Ydata=" + Arrays.toString(yData) +
                '}';
    }

    public void setYdata(Double[] ydata) {
        yData = ydata;
    }

    public DividedData() {
    }
    public DividedData(String fileName) {
        this.fileName=fileName;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public List<String> getHeaders() {
        return headers;
    }

    public void setHeaders(List<String> headers) {
        this.headers = headers;
    }

    public Double[][] getDataMatrix() {
        return dataMatrix;
    }

    public void setDataMatrix(Double[][] dataMatrix) {
        this.dataMatrix = dataMatrix;
    }
}
