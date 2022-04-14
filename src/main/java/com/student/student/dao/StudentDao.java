package com.student.student.dao;

import com.student.student.model.Student;

import java.util.List;

/**
 * Project: student
 * Package: com.student.student.dao
 */
public interface StudentDao {
    List<Student> findAll();
    Student findById(int id);
    Student save(Student product);
    Long count();
    void delete(Student entity);
    boolean exists(int primaryKey);

}
