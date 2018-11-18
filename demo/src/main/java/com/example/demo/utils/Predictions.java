package com.example.demo.utils;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Sandra on 2018-11-17.
 */
public class Predictions {
    List<Prediction> predictionList= new ArrayList<>();
    public void createPredictions(int from, int to, double[] params)
    {


    }
}
class Prediction{
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