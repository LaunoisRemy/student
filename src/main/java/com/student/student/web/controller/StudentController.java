package com.student.student.web.controller;

import com.student.student.dao.StudentDao;
import com.student.student.model.Student;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Objects;

/**
 * Project: student
 * Package: com.student.student.web.controller
 */
@RestController
public class StudentController {
    private final StudentDao studentDao;

    public StudentController(StudentDao studentDao) {
        this.studentDao = studentDao;
    }

    @GetMapping("/students")
    public List<Student> listStudents() {
        return studentDao.findAll();
    }

    @GetMapping("/student/{id}")
    public Student getStudent(@PathVariable int id) {
        return studentDao.findById(id);
    }

    @PostMapping(value = "/students")
    public ResponseEntity<Student> addStudent(@RequestBody Student student) {
        Student studentAdded = studentDao.save(student);
        if (Objects.isNull(studentAdded)) {
            return ResponseEntity.noContent().build();
        }
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(studentAdded.getId())
                .toUri();
        return ResponseEntity.created(location).build();
    }
}
