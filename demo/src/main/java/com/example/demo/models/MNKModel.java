package com.example.demo.models;

import Jama.Matrix;

import javax.persistence.*;
import java.util.Arrays;

/**
 * Created by Sandra on 2018-11-02.
 */
@Entity
@Table(name="MNKMODEL")
public class MNKModel {
    @Id
    @GeneratedValue
    @Column(name = "MNK_ID", nullable = false)
    private Long id;
    @Column(name = "MNK_NAME")
    private String name;
    @Column(name = "MAT_X")
    private Matrix X;
    @Column(name = "MAT_Y")
    private Matrix Y;
    @Column(name = "PARAMETERS")
    private double[] parameters;
    @Column(name = "RESIDUAL_VARIANCE")
    private double residualVariance;
    @Column(name = "STANDARD_DEVIATION")
    private double standardDeviation;
    @Column(name = "AVERAGE_ESTIMATE_ERROR")
    private double AverageEstimateError;

    public MNKModel(){}

    public MNKModel(Long id, String name, Matrix x, Matrix y, double[] parameters, double residualVariance, double standardDeviation, double averageEstimateError) {
        this.id = id;
        this.name = name;
        X = x;
        Y = y;
        this.parameters = parameters;
        this.residualVariance = residualVariance;
        this.standardDeviation = standardDeviation;
        AverageEstimateError = averageEstimateError;
    }

    public MNKModel(Long id, String name, Matrix x, Matrix y) {
        this.id = id;
        this.name = name;

        X = x;
        Y = y;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Matrix getX() {
        return X;
    }

    public void setX(Matrix x) {
        X = x;
    }

    public Matrix getY() {
        return Y;
    }

    public void setY(Matrix y) {
        Y = y;
    }

    public double[] getParameters() {
        return parameters;
    }

    public void setParameters(double[] parameters) {
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

    public double getAverageEstimateError() {
        return AverageEstimateError;
    }

    public void setAverageEstimateError(double averageEstimateError) {
        AverageEstimateError = averageEstimateError;
    }

    @Override
    public String toString() {
        return "MNKModel{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", X=" + X +
                ", Y=" + Y +
                ", parameters=" + Arrays.toString(parameters) +
                ", residualVariance=" + residualVariance +
                ", standardDeviation=" + standardDeviation +
                ", AverageEstimateError=" + AverageEstimateError +
                '}';
    }
}
