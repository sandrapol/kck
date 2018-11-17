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
    private SimpleMatrix xData;
    private SimpleMatrix yData;
    private SimpleMatrix params;
    private int rowsNumber;
    private double colNumber;

    public MNKModel createMNK(Double[][] firstDataMatrix, Double[] yMatrix, List<String> headers) {
        mnkModel= new MNKModel(headers);
        rowsNumber = yMatrix.length;
        colNumber = firstDataMatrix[0].length;
        prepareXMatrix(firstDataMatrix);
        yData = new SimpleMatrix(yMatrix.length, 1, false, ArrayUtils.toPrimitive(yMatrix));
        countParameters();
        countVariance();
        paramsToList();
        return mnkModel;
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
    //extractVector(false,0)
    private void paramsToList(){
        double[] parameters= new double[params.numRows()];
        params.print();
        for(int i=0;i<params.numRows();i++)
        {
            System.out.println(params.get(i,0));
            parameters[i]=params.get(i,0);
        }
        mnkModel.setParameters(parameters);
    }

    private void countVariance() {
        SimpleMatrix yModelData = xData.mult(params);
        SimpleMatrix et = yData.minus(yModelData);
        SimpleMatrix et2 = et.elementMult(et);
        double sum = et2.elementSum();
        double variance = (1 / (rowsNumber - colNumber - 1)) * sum;
        mnkModel.setResidualVariance(variance);
        double standardDeviation = sqrt(variance);
        mnkModel.setStandardDeviation(standardDeviation);
        System.out.println(variance);
        SimpleMatrix xtx1 = xData.transpose().mult(xData).invert();
        SimpleMatrix varCovMatrix = xtx1.scale(variance);
        SimpleMatrix diag = varCovMatrix.diag();
        SimpleMatrix averageEstimateError = diag.elementPower(0.5);
        double[] avgErr= new double[averageEstimateError.numRows()];
        averageEstimateError.print();
        for(int i=0;i<averageEstimateError.numRows();i++)
        {
            System.out.println(averageEstimateError.get(i,0));
           avgErr[i]=averageEstimateError.get(i,0);
        }
        mnkModel.setAverageEstimateError(avgErr);
        double avg = yData.elementSum() / rowsNumber;
        double CRV= (standardDeviation/avg)*100; //wspolczynnik zmiennosci resztowej w %
        mnkModel.setCRV(CRV);
        double sumYT = yData.minus(avg).elementPower(2).elementSum();
        double R2 = 1 - (sum / sumYT);
        mnkModel.setR2(R2);
    }

}
