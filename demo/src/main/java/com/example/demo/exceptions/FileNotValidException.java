package com.example.demo.exceptions;

/**
 * Created by Sandra on 2018-11-03.
 */
public class FileNotValidException extends Exception {
    /**
     * Instantiates a new File not valid exception.
     *
     * @param message the message
     */
    public FileNotValidException(String message) {
        super(message);
    }

    /**
     * Instantiates a new File not valid exception.
     *
     * @param message the message
     * @param cause   the cause
     */
    public FileNotValidException(String message, Throwable cause) {
        super(message, cause);
    }

    /**
     * Instantiates a new File not valid exception.
     *
     * @param cause the cause
     */
    public FileNotValidException(Throwable cause) {
        super(cause);
    }
}
