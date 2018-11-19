package com.example.demo.utils;

/**
 * Created by Sandra on 2018-11-17.
 */
public class Predictions {
    public double createPredictions(double[] userParams, double[] modelParams) throws Exception {

        if ((userParams.length + 1) != modelParams.length)
            throw new Exception("Zła liczba parametrów!");
        else {
            double prediction = modelParams[0];
            for (int i = 0; i < userParams.length; i++) {
                prediction += userParams[i] + modelParams[i + 1];
            }
            return prediction;
        }
    }
}
