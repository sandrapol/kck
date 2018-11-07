package com.example.demo.repositories;

import com.example.demo.models.MNKModel;
import com.example.demo.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Sandra on 2018-11-03.
 */
@Repository
public interface MNKRepo extends CrudRepository<MNKModel, Long> {
    List<MNKModel> findByName(String findByName);
    List<MNKModel> findAll();
}
