package com.example.demo.models;

import org.ejml.simple.SimpleMatrix;

import java.util.List;

/**
 * Created by Sandra on 2018-11-02.
 */

public class MNKModel {
    private List<String> headers;

    private SimpleMatrix parameters;

    private double residualVariance;

    private double standardDeviation;

    private SimpleMatrix  AverageEstimateError;

    private double CRV;

    private double R2;

    public MNKModel() {
    }
    public MNKModel(List<String> headers) {
        this.headers=headers;
    }

    public SimpleMatrix getParameters() {
        return parameters;
    }

    public void setParameters(SimpleMatrix parameters) {
        this.parameters = parameters;
    }

    public double getResidualVariance() {
        return residualVariance;
    }

    public void setResidualVariance(double residualVariance) {
        this.residualVariance = residualVariance;
    }

    public double getStandardDeviation() {
        return standardDeviation;
    }

    public void setStandardDeviation(double standardDeviation) {
        this.standardDeviation = standardDeviation;
    }

    public SimpleMatrix  getAverageEstimateError() {
        return AverageEstimateError;
    }

    public void setAverageEstimateError(SimpleMatrix  averageEstimateError) {
        AverageEstimateError = averageEstimateError;
    }

    public double getCRV() {
        return CRV;
    }

    public void setCRV(double CRV) {
        this.CRV = CRV;
    }

    public double getR2() {
        return R2;
    }

    public void setR2(double r2) {
        R2 = r2;
    }

    @Override
    public String toString() {
        return "MNKModel{" +
                "headers=" + headers +
                ", parameters=" + parameters +
                ", residualVariance=" + residualVariance +
                ", standardDeviation=" + standardDeviation +
                ", AverageEstimateError=" + AverageEstimateError +
                ", CRV=" + CRV +
                ", R2=" + R2 +
                '}';
    }
}
