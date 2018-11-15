package com.example.demo.utils;

import com.example.demo.models.MNKModel;
import org.apache.commons.lang3.ArrayUtils;
import org.ejml.simple.SimpleMatrix;

import java.util.List;

import static java.lang.Math.sqrt;

/**
 * Created by Sandra on 2018-11-02.
 */
public class MNKGenerator {
    private MNKModel mnkModel;
    private List<String> headers;
    private SimpleMatrix xData;
    private SimpleMatrix yData;
    private SimpleMatrix params;
    private double rowsNumber;
    private double colNumber;

    public void createMNK(Double[][] firstDataMatrix, Double[] yMatrix) {
        rowsNumber = yMatrix.length;
        colNumber = firstDataMatrix[0].length;
        prepareXMatrix(firstDataMatrix);
        yData = new SimpleMatrix(yMatrix.length, 1, false, ArrayUtils.toPrimitive(yMatrix));
        countParameters();
        countVariance();
    }

    private void prepareXMatrix(Double[][] firstDataMatrix) {
        double[][] dataMatrix = new double[firstDataMatrix.length][firstDataMatrix[0].length + 1];
        for (int i = 0; i < dataMatrix.length; i++) {
            for (int j = 0; j < dataMatrix[0].length; j++) {
                if (j == 0) {
                    dataMatrix[i][j] = 1.0;
                } else {
                    dataMatrix[i][j] = Double.valueOf(firstDataMatrix[i][j - 1]);
                }
            }
        }
        xData = new SimpleMatrix(dataMatrix);
    }


    private void countParameters() {
        SimpleMatrix xtx1 = xData.transpose().mult(xData).invert();
        SimpleMatrix xty = xData.transpose().mult(yData);
        params = xtx1.mult(xty);
    }

    private void countVariance() {
        SimpleMatrix yModelData = xData.mult(params);
        SimpleMatrix et = yData.minus(yModelData);
        SimpleMatrix et2 = et.elementMult(et);
        double sum = et2.elementSum();
        double variance = (1 / (rowsNumber - colNumber - 1)) * sum;
        double standardDeviation = sqrt(variance);
        System.out.println(variance);
        SimpleMatrix xtx1 = xData.transpose().mult(xData).invert();
        SimpleMatrix varCovMatrix = xtx1.scale(variance);
        SimpleMatrix diag = varCovMatrix.diag();
        SimpleMatrix averageEstimateError = diag.elementPower(0.5);
        averageEstimateError.print();
        double avg = yData.elementSum() / rowsNumber;
        double CRV= (standardDeviation/avg)*100; //wspolczynnik zmiennosci resztowej w %
        double sumYT = yData.minus(avg).elementPower(2).elementSum();
        double R2 = 1 - (sum / sumYT);
        System.out.println(CRV);
        System.out.println(R2);

    }

}
