package com.example.demo.utils;

import com.example.demo.models.Combination;
import com.example.demo.models.DividedData;
import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.math3.stat.correlation.PearsonsCorrelation;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static java.lang.Math.abs;

/**
 * Created by Sandra on 2018-11-05.
 */
public class HellwigMethod {
    private DataGenerator dataGenerator;
    private DividedData dividedData;
    private Double[] y = null;
    private Double[][] dataX = null;
    private double[] R0 = null;
    private double[][] RMatrix;
    private int combinationsNumber;
    private List<Combination> combinationsList;
    public void chooseVariables(String fileName) {
        dataGenerator = new DataGenerator(fileName);
        dividedData = dataGenerator.getDividedData();
        dataX = dividedData.getDataMatrix();
        y = dividedData.getYdata();
        generateR0();
        generateRMatrix();
        combinationsNumber= 2^(dataX[0].length)-1;
        combinationsList=new ArrayList<>();
        createNCr();
        countAllCapacity();
        combinationsList.forEach(elem->elem.calculateCapacity());
        //combinationsList.map(elem->elem.getCapacitySum());
        combinationsList.forEach(elem->elem.ttring());

    }
    private void countAllCapacity(){
        combinationsList.forEach(elem-> elem.setInformationCapacity(countCapacity(elem.getIndexesVariable())));
    }
    private double[] countCapacity(int[] variableIndexes){
        double[] cap= new double[variableIndexes.length];
        double numerator;
        for(int i=0;i<variableIndexes.length;i++) {
            double denominator=0;
            numerator = R0[variableIndexes[i]] * R0[variableIndexes[i]];
            for (int j = 0; j < variableIndexes.length; j++) {
                int num = variableIndexes[j];
                denominator =denominator +abs(RMatrix[variableIndexes[i]][num]);
            }
            System.out.println(denominator);
            System.out.println(numerator);
            cap[i]=numerator/denominator;
        }
        return cap;
    }

    private void generateR0() {
        Double[] xVariable = new Double[y.length];
        R0 = new double[dataX[0].length];
        for (int i = 0; i < dataX[0].length; i++) {
            for (int j = 0; j < dataX.length; j++) {
                xVariable[j] = dataX[j][i];
            }
            R0[i] = new PearsonsCorrelation().correlation(ArrayUtils.toPrimitive(y), ArrayUtils.toPrimitive(xVariable));
        }
    }

    private void generateRMatrix() {
        RMatrix = new double[dataX[0].length][dataX[0].length];
        for (int i = 0; i < RMatrix.length; i++) {
            for (int j = 0; j < RMatrix.length; j++) {
                if (i > j) {
                    RMatrix[i][j] = getCorrelation(i, j);
                    RMatrix[j][i] = RMatrix[i][j];
                }
                if (i == j) {
                    RMatrix[i][j] = 1;
                    break;
                }
            }
        }
    }

    private double getCorrelation(int first, int second) {
        Double[] Variable1 = new Double[y.length];
        Double[] Variable2 = new Double[y.length];
        for (int i = 0; i < dataX.length; i++) {
            Variable1[i] = dataX[i][first];
            Variable2[i] = dataX[i][second];
        }

        return new PearsonsCorrelation().correlation(ArrayUtils.toPrimitive(Variable1), ArrayUtils.toPrimitive(Variable2));
    }

    private void createNCr(){
        int len=dataX[0].length;
        for(int i=1;i<=len; i++){
            nCr(len,i);
        }
    }

    public void nCr(final int n, final int r) {
        int[] res = new int[r];
        for (int i = 0; i < res.length; i++) {
            res[i] = i + 1;
        }
        boolean done = false;
        while (!done) {
            Combination combination=new Combination(Arrays.stream(res).map(elem->elem-1).toArray());
            combinationsList.add(combination);
            done = getNext(res, n, r);
        }
    }


    public boolean getNext(final int[] num, final int n, final int r) {
        int target = r - 1;
        num[target]++;
        if (num[target] > ((n - (r - target)) + 1)) {
            // Carry the One
            while (num[target] > ((n - (r - target)))) {
                target--;
                if (target < 0) {
                    break;
                }
            }
            if (target < 0) {
                return true;
            }
            num[target]++;
            for (int i = target + 1; i < num.length; i++) {
                num[i] = num[i - 1] + 1;
            }
        }
        return false;
    }
}