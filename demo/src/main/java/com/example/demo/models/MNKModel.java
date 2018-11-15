package com.example.demo.models;

import org.ejml.simple.SimpleMatrix;

import javax.persistence.*;

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
    @Column(name = "PARAMETERS")
    private SimpleMatrix parameters;
    @Column(name = "HEADERS")
    private String[] headers;
    @Column(name = "RESIDUAL_VARIANCE")
    private double residualVariance;
    @Column(name = "STANDARD_DEVIATION")
    private double standardDeviation;
    @Column(name = "AVERAGE_ESTIMATE_ERROR")
    private double AverageEstimateError;
    @Column(name = "CRV")
    private double CRV;
    @Column(name = "R2")
    private double R2;

    public MNKModel() {}

    public MNKModel(Long id, String name) {
        this.id = id;
        this.name = name;
    }
    public String[] getHeaders() {
        return headers;
    }

    public void setHeaders(String[] headers) {
        this.headers = headers;
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

    public double getAverageEstimateError() {
        return AverageEstimateError;
    }

    public void setAverageEstimateError(double averageEstimateError) {
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
}
