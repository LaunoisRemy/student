package com.student.student.repository;

import com.student.student.dao.StudentDao;
import com.student.student.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Project: student
 * Package: com.student.student.dao
 */
@Repository
public interface StudentRepository extends JpaRepository<Student,Long> {

}
