package com.example.demo.models;

import java.util.Arrays;

/**
 * Created by Sandra on 2018-11-06.
 */
public class Combination {
    private int[] indexesVariable;
    private double[] informationCapacity;
    private double capacitySum;


    public void ttring() {
        System.out.println("Combination{" +
                "indexesVariable=" + Arrays.toString(indexesVariable) +
                ", informationCapacity=" + Arrays.toString(informationCapacity) +
                ", CapacitySum=" + capacitySum +
                '}');
    }

    public void calculateCapacity(){
        capacitySum= Arrays.stream(informationCapacity).sum();
    }
    public Combination(int[] indexesVariable) {
        this.indexesVariable = indexesVariable;
    }

    public int[] getIndexesVariable() {
        return indexesVariable;
    }

    public void setIndexesVariable(int[] indexesVariable) {
        this.indexesVariable = indexesVariable;
    }

    public double[] getInformationCapacity() {
        return informationCapacity;
    }

    public void setInformationCapacity(double[] informationCapacity) {
        this.informationCapacity = informationCapacity;
    }

    public double getCapacitySum() {
        return capacitySum;
    }

    public void setCapacitySum(double capacitySum) {
        capacitySum = capacitySum;
    }
}
