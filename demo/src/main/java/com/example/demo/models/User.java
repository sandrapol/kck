package com.example.demo.models;

/**
 * Created by Sandra on 2018-11-02.
 */
import javax.persistence.*;

@Entity
@Table(name="USER")
public class User {
    @Id
    @GeneratedValue
    @Column(name = "USER_ID", nullable = false)
    private Long userId;
    @Column(name = "USER_NAME", nullable = false)
    private String lastName;
    @Column(name = "USER_LOGIN", nullable = false,unique = true)
    private String login;
    @Column(name = "USER_PASSWORD", nullable = false)
    private String password;

    public User(){}

    public User(String lastName,String login, String password){
        this.lastName=lastName;
        this.login=login;
        this.password=password;
    }

    public User(Long id, String lastName,String login, String password){
        this.userId=id;
        this.lastName=lastName;
        this.login=login;
        this.password=password;
    }

    public String getLastName() {
        return lastName;
    }

    public Long getUserId() {
        return userId;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getPassword() {
        return password;
    }
    @Override
    public String toString() {
        return "User: " +
                "\n\tid: '" + userId + '\'' +"\n\tname: '" + lastName + '\'' +", \n\tlogin: '" + login+ '\'';
    }
}

