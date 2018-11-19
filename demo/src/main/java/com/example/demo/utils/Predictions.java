package com.example.demo.utils;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Sandra on 2018-11-17.
 */
public class Predictions {
    List<Prediction> predictionList = new ArrayList<>();

    public double createPredictions(double[] userParems, double[] modelParams) throws Exception {
        if ((userParems.length + 1) != modelParams.length)
            throw new Exception("Zła liczba parametrów!");
        double prediction=modelParams[0];
        for(int i=0;i<userParems.length;i++){
            prediction+=userParems[i]+modelParams[i+1];
        }
        return prediction;
    }
}

class Prediction {
    int index;
    double pred;

    public Prediction(int index, double pred) {
        this.index = index;
        this.pred = pred;
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    public double getPred() {
        return pred;
    }

    public void setPred(double pred) {
        this.pred = pred;
    }
}