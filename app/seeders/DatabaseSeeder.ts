import type { EntityManager } from "@mikro-orm/core";
import { Seeder } from "@mikro-orm/seeder";
import { Majors } from "../entities/Majors";
import { Students } from "../entities/Students";
import { Departments } from "../entities/Departments";
import { Courses } from "../entities/Courses";
import { Enrollments } from "../entities/Enrollments";
import { Professors } from "../entities/Professors";
import { Exams } from "../entities/Exams";
import { Results } from "../entities/Results";
import { v4 as uuidv4 } from "uuid";

export class DatabaseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const major1 = em.create(Majors, {
      majorId: uuidv4(),
      name: "Computer Engineering",
    });
    const major2 = em.create(Majors, {
      majorId: uuidv4(),
      name: "Shipbuilding",
    });
    const major3 = em.create(Majors, {
      majorId: uuidv4(),
      name: "Electrical Engineering",
    });
    const major4 = em.create(Majors, {
      majorId: uuidv4(),
      name: "Industrial Engineering",
    });
    const major5 = em.create(Majors, {
      majorId: uuidv4(),
      name: "Mechanical Engineering",
    });

    const department1 = em.create(Departments, {
      deparmentId: uuidv4(),
      name: "Programming deparment",
    });
    const department2 = em.create(Departments, {
      deparmentId: uuidv4(),
      name: "Tehnical department",
    });
    const department3 = em.create(Departments, {
      deparmentId: uuidv4(),
      name: "Mechanical department",
    });
    const department4 = em.create(Departments, {
      deparmentId: uuidv4(),
      name: "Aeronautics department",
    });
    const department5 = em.create(Departments, {
      deparmentId: uuidv4(),
      name: "Robotics department",
    });
    const department6 = em.create(Departments, {
      deparmentId: uuidv4(),
      name: "Machine department",
    });

    const student1 = em.create(Students, {
      studentId: uuidv4(),
      name: "Toni Kutlesa",
      email: "toni.kutlesa@gmail.com",
      address: "Splitska 2",
      phoneNumber: "+38598745321",
      majorId: major1,
    });
    const student2 = em.create(Students, {
      studentId: uuidv4(),
      name: "Frane Kalebic",
      email: "frane.kalebic@gmail.com",
      address: "Velebitska 36",
      phoneNumber: "+38591564832",
      majorId: major2,
    });
    const student3 = em.create(Students, {
      studentId: uuidv4(),
      name: "Matej Pavic",
      email: "matej.pavic@gmail.com",
      address: "Poljicka 23",
      phoneNumber: "+38598245521",
      majorId: major5,
    });
    const student4 = em.create(Students, {
      studentId: uuidv4(),
      name: "Lovre Begovic",
      email: "lovre.begovic@gmail.com",
      address: "Vukovarska 65",
      phoneNumber: "+38598143321",
      majorId: major3,
    });
    const student5 = em.create(Students, {
      studentId: uuidv4(),
      name: "Lucija Banek",
      email: "lucija.banek@gmail.com",
      address: "Zvonimirova 65",
      phoneNumber: "+38597735321",
      majorId: major4,
    });
    const student6 = em.create(Students, {
      studentId: uuidv4(),
      name: "Klara Klaric",
      email: "klara.klaric@gmail.com",
      address: "Zgon 42",
      phoneNumber: "+38597135323",
      majorId: major3,
    });
    const student7 = em.create(Students, {
      studentId: uuidv4(),
      name: "Paula Polic",
      email: "paula.polic@gmail.com",
      address: "Imotska 32",
      phoneNumber: "+38597837321",
      majorId: major2,
    });
    const student8 = em.create(Students, {
      studentId: uuidv4(),
      name: "Borna Barisic",
      email: "borna.barisic@gmail.com",
      address: "Ravnice 13",
      phoneNumber: "+38597735321",
      majorId: major1,
    });

    const professor1 = em.create(Professors, {
      professorId: uuidv4(),
      name: "Ante Antic",
      email: "ante.antic@gmail.com",
      address: "Splitska 54",
      phoneNumber: "+38598745121",
      deparmentId: department3,
    });
    const professor2 = em.create(Professors, {
      professorId: uuidv4(),
      name: "Luka Lukic",
      email: "luka.lukic@gmail.com",
      address: "Velebitska 98",
      phoneNumber: "+38597564832",
      deparmentId: department1,
    });
    const professor3 = em.create(Professors, {
      professorId: uuidv4(),
      name: "Ivo Ivic",
      email: "ivo.ivic@gmail.com",
      address: "Poljicka 12",
      phoneNumber: "+38591245521",
      deparmentId: department6,
    });
    const professor4 = em.create(Professors, {
      professorId: uuidv4(),
      name: "Perica Peric",
      email: "perica.peric@gmail.com",
      address: "Vukovarska 12",
      phoneNumber: "+38598343521",
      deparmentId: department2,
    });
    const professor5 = em.create(Professors, {
      professorId: uuidv4(),
      name: "Ivana Ivanovic",
      email: "ivana.ivanovic@gmail.com",
      address: "Zvonimirova 12",
      phoneNumber: "+38598735321",
      deparmentId: department1,
    });
    const professor6 = em.create(Professors, {
      professorId: uuidv4(),
      name: "Filip Filipovic",
      email: "filip.filipovic@gmail.com",
      address: "Zvonimirova 23",
      phoneNumber: "+38591735321",
      deparmentId: department5,
    });

    const course1 = em.create(Courses, {
      courseId: uuidv4(),
      name: "Artificial intelligence",
      ects: 6,
      professorId: professor6,
    });
    const course2 = em.create(Courses, {
      courseId: uuidv4(),
      name: "Numerical science",
      ects: 5,
      professorId: professor2,
    });
    const course3 = em.create(Courses, {
      courseId: uuidv4(),
      name: "Computer graphics",
      ects: 3,
      professorId: professor1,
    });
    const course4 = em.create(Courses, {
      courseId: uuidv4(),
      name: "Advanced web technologies",
      ects: 6,
      professorId: professor4,
    });
    const course6 = em.create(Courses, {
      courseId: uuidv4(),
      name: "Programming languages",
      ects: 5,
      professorId: professor5,
    });
    const course7 = em.create(Courses, {
      courseId: uuidv4(),
      name: "IP communications",
      ects: 4,
      professorId: professor6,
    });
    const course8 = em.create(Courses, {
      courseId: uuidv4(),
      name: "Optimisation methods",
      ects: 7,
      professorId: professor3,
    });
    const course9 = em.create(Courses, {
      courseId: uuidv4(),
      name: "Data storage",
      ects: 6,
      professorId: professor3,
    });
    const course10 = em.create(Courses, {
      courseId: uuidv4(),
      name: "Cryptography",
      ects: 5,
      professorId: professor1,
    });
    const course11 = em.create(Courses, {
      courseId: uuidv4(),
      name: "Forensical computer science",
      ects: 6,
      professorId: professor4,
    });
    const course12 = em.create(Courses, {
      courseId: uuidv4(),
      name: "Multimedia",
      ects: 4,
      professorId: professor6,
    });
    const course13 = em.create(Courses, {
      courseId: uuidv4(),
      name: "Management",
      ects: 5,
      professorId: professor3,
    });
    const course14 = em.create(Courses, {
      courseId: uuidv4(),
      name: "Medical electronic instruments",
      ects: 3,
      professorId: professor4,
    });
    const course15 = em.create(Courses, {
      courseId: uuidv4(),
      name: "English",
      ects: 4,
      professorId: professor2,
    });
    const course16 = em.create(Courses, {
      courseId: uuidv4(),
      name: "Mathematics I",
      ects: 7,
      professorId: professor5,
    });
    const course17 = em.create(Courses, {
      courseId: uuidv4(),
      name: "Mathematics II",
      ects: 7,
      professorId: professor5,
    });
    const course18 = em.create(Courses, {
      courseId: uuidv4(),
      name: "Communication skills",
      ects: 2,
      professorId: professor1,
    });
    const course19 = em.create(Courses, {
      courseId: uuidv4(),
      name: "Electronics",
      ects: 6,
      professorId: professor6,
    });
    const course20 = em.create(Courses, {
      courseId: uuidv4(),
      name: "Computer architecture",
      ects: 4,
      professorId: professor2,
    });
    const course21 = em.create(Courses, {
      courseId: uuidv4(),
      name: "Operational systems",
      ects: 5,
      professorId: professor3,
    });

    const enrollments = em.create(Enrollments, {
      studentId: student1,
      courseId: course1,
    });
    em.create(Enrollments, {
      studentId: student1,
      courseId: course3,
    });
    em.create(Enrollments, {
      studentId: student1,
      courseId: course4,
    });
    em.create(Enrollments, {
      studentId: student1,
      courseId: course6,
    });
    em.create(Enrollments, {
      studentId: student1,
      courseId: course9,
    });
    em.create(Enrollments, {
      studentId: student1,
      courseId: course11,
    });
    em.create(Enrollments, {
      studentId: student2,
      courseId: course1,
    });
    em.create(Enrollments, {
      studentId: student2,
      courseId: course4,
    });
    em.create(Enrollments, {
      studentId: student2,
      courseId: course7,
    });
    em.create(Enrollments, {
      studentId: student2,
      courseId: course10,
    });
    em.create(Enrollments, {
      studentId: student2,
      courseId: course12,
    });
    em.create(Enrollments, {
      studentId: student2,
      courseId: course17,
    });
    em.create(Enrollments, {
      studentId: student2,
      courseId: course19,
    });
    em.create(Enrollments, {
      studentId: student2,
      courseId: course21,
    });
    em.create(Enrollments, {
      studentId: student3,
      courseId: course3,
    });
    em.create(Enrollments, {
      studentId: student3,
      courseId: course6,
    });
    em.create(Enrollments, {
      studentId: student3,
      courseId: course9,
    });
    em.create(Enrollments, {
      studentId: student3,
      courseId: course12,
    });
    em.create(Enrollments, {
      studentId: student3,
      courseId: course16,
    });
    em.create(Enrollments, {
      studentId: student3,
      courseId: course20,
    });
    em.create(Enrollments, {
      studentId: student4,
      courseId: course4,
    });
    em.create(Enrollments, {
      studentId: student4,
      courseId: course8,
    });
    em.create(Enrollments, {
      studentId: student4,
      courseId: course12,
    });
    em.create(Enrollments, {
      studentId: student4,
      courseId: course13,
    });
    em.create(Enrollments, {
      studentId: student4,
      courseId: course15,
    });
    em.create(Enrollments, {
      studentId: student4,
      courseId: course17,
    });
    em.create(Enrollments, {
      studentId: student4,
      courseId: course18,
    });
    em.create(Enrollments, {
      studentId: student5,
      courseId: course2,
    });
    em.create(Enrollments, {
      studentId: student5,
      courseId: course8,
    });
    em.create(Enrollments, {
      studentId: student5,
      courseId: course11,
    });
    em.create(Enrollments, {
      studentId: student5,
      courseId: course21,
    });
    em.create(Enrollments, {
      studentId: student6,
      courseId: course4,
    });
    em.create(Enrollments, {
      studentId: student6,
      courseId: course7,
    });
    em.create(Enrollments, {
      studentId: student6,
      courseId: course6,
    });
    em.create(Enrollments, {
      studentId: student6,
      courseId: course14,
    });
    em.create(Enrollments, {
      studentId: student6,
      courseId: course16,
    });
    em.create(Enrollments, {
      studentId: student7,
      courseId: course1,
    });
    em.create(Enrollments, {
      studentId: student7,
      courseId: course2,
    });
    em.create(Enrollments, {
      studentId: student7,
      courseId: course7,
    });
    em.create(Enrollments, {
      studentId: student7,
      courseId: course13,
    });
    em.create(Enrollments, {
      studentId: student7,
      courseId: course19,
    });
    em.create(Enrollments, {
      studentId: student8,
      courseId: course2,
    });
    em.create(Enrollments, {
      studentId: student8,
      courseId: course6,
    });
    em.create(Enrollments, {
      studentId: student8,
      courseId: course8,
    });
    em.create(Enrollments, {
      studentId: student8,
      courseId: course11,
    });
    em.create(Enrollments, {
      studentId: student8,
      courseId: course19,
    });

    const exam1 = em.create(Exams, {
      examId: uuidv4(),
      name: "Initial exam",
      examDatetime: "2023-04-20T12:00:00",
      courseId: course1,
    });
    const exam2 = em.create(Exams, {
      examId: uuidv4(),
      name: "Final exam",
      examDatetime: "2023-06-20T15:00:00",
      courseId: course1,
    });
    const exam3 = em.create(Exams, {
      examId: uuidv4(),
      name: "Initial exam",
      examDatetime: "2023-04-20T12:00:00",
      courseId: course2,
    });
    const exam4 = em.create(Exams, {
      examId: uuidv4(),
      name: "Final exam",
      examDatetime: "2023-06-20T15:00:00",
      courseId: course2,
    });
    const exam5 = em.create(Exams, {
      examId: uuidv4(),
      name: "Initial exam",
      examDatetime: "2023-04-20T12:00:00",
      courseId: course2,
    });
    const exam6 = em.create(Exams, {
      examId: uuidv4(),
      name: "Final exam",
      examDatetime: "2023-06-20T15:00:00",
      courseId: course2,
    });
    const exam7 = em.create(Exams, {
      examId: uuidv4(),
      name: "Initial exam",
      examDatetime: "2023-04-20T12:00:00",
      courseId: course3,
    });
    const exam8 = em.create(Exams, {
      examId: uuidv4(),
      name: "Final exam",
      examDatetime: "2023-06-20T15:00:00",
      courseId: course3,
    });
    const exam9 = em.create(Exams, {
      examId: uuidv4(),
      name: "Initial exam",
      examDatetime: "2023-04-20T12:00:00",
      courseId: course4,
    });
    const exam10 = em.create(Exams, {
      examId: uuidv4(),
      name: "Final exam",
      examDatetime: "2023-06-20T15:00:00",
      courseId: course4,
    });
    const exam11 = em.create(Exams, {
      examId: uuidv4(),
      name: "Initial exam",
      examDatetime: "2023-01-02T12:00:00",
      courseId: course6,
    });
    const exam12 = em.create(Exams, {
      examId: uuidv4(),
      name: "Final exam",
      examDatetime: "2023-01-18T15:00:00",
      courseId: course6,
    });
    const exam13 = em.create(Exams, {
      examId: uuidv4(),
      name: "Initial exam",
      examDatetime: "2023-01-02T12:00:00",
      courseId: course7,
    });
    const exam14 = em.create(Exams, {
      examId: uuidv4(),
      name: "Final exam",
      examDatetime: "2023-01-18T15:00:00",
      courseId: course7,
    });
    const exam15 = em.create(Exams, {
      examId: uuidv4(),
      name: "Initial exam",
      examDatetime: "2023-01-02T12:00:00",
      courseId: course8,
    });
    const exam16 = em.create(Exams, {
      examId: uuidv4(),
      name: "Final exam",
      examDatetime: "2023-01-18T15:00:00",
      courseId: course8,
    });
    const exam17 = em.create(Exams, {
      examId: uuidv4(),
      name: "Initial exam",
      examDatetime: "2023-01-02T12:00:00",
      courseId: course9,
    });
    const exam18 = em.create(Exams, {
      examId: uuidv4(),
      name: "Final exam",
      examDatetime: "2023-01-18T15:00:00",
      courseId: course9,
    });

    const result1 = em.create(Results, {
      studentId: student1,
      examId: exam1,
      grade: 5,
    });
    const result2 = em.create(Results, {
      studentId: student1,
      examId: exam2,
      grade: 5,
    });
    const result3 = em.create(Results, {
      studentId: student1,
      examId: exam3,
      grade: 3,
    });
    const result4 = em.create(Results, {
      studentId: student1,
      examId: exam4,
      grade: 4,
    });
    const result5 = em.create(Results, {
      studentId: student1,
      examId: exam11,
      grade: 4,
    });
    const result6 = em.create(Results, {
      studentId: student1,
      examId: exam12,
      grade: 2,
    });
    const result7 = em.create(Results, {
      studentId: student1,
      examId: exam13,
      grade: 3,
    });
    const result8 = em.create(Results, {
      studentId: student1,
      examId: exam14,
      grade: 5,
    });
    const result9 = em.create(Results, {
      studentId: student2,
      examId: exam1,
      grade: 5,
    });
    const result10 = em.create(Results, {
      studentId: student2,
      examId: exam2,
      grade: 5,
    });
    const result11 = em.create(Results, {
      studentId: student3,
      examId: exam3,
      grade: 3,
    });
    const result12 = em.create(Results, {
      studentId: student3,
      examId: exam4,
      grade: 4,
    });
    const result13 = em.create(Results, {
      studentId: student4,
      examId: exam11,
      grade: 4,
    });
    const result14 = em.create(Results, {
      studentId: student4,
      examId: exam12,
      grade: 2,
    });
    const result15 = em.create(Results, {
      studentId: student4,
      examId: exam13,
      grade: 3,
    });
    const result16 = em.create(Results, {
      studentId: student4,
      examId: exam14,
      grade: 5,
    });
    const result17 = em.create(Results, {
      studentId: student5,
      examId: exam1,
      grade: 5,
    });
    const result18 = em.create(Results, {
      studentId: student5,
      examId: exam2,
      grade: 5,
    });
    const result19 = em.create(Results, {
      studentId: student6,
      examId: exam3,
      grade: 3,
    });
    const result20 = em.create(Results, {
      studentId: student6,
      examId: exam4,
      grade: 4,
    });
    const result21 = em.create(Results, {
      studentId: student7,
      examId: exam11,
      grade: 4,
    });
    const result22 = em.create(Results, {
      studentId: student7,
      examId: exam12,
      grade: 2,
    });
    const result23 = em.create(Results, {
      studentId: student8,
      examId: exam13,
      grade: 3,
    });
    const result24 = em.create(Results, {
      studentId: student8,
      examId: exam14,
      grade: 5,
    });
  }
}
