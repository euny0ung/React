DATABASE
====================================
**관계형 데이터베이스란?**

데이터베이스(이하 DB)는 어플리케이션에서 사용할 데이터를 체계적으로 디스크에 담도록 만들어진 데이터 저장 전용 프로그램이다. 그 중에서도 관계형 데이터베이스는 고전적으로 많이 사용해온 데이터베이스의 형태이다. 오라클, MySQL, SQLServer, SQLLite 등의 시스템이 존재한다. SQL이라는 언어로 DB파일 안에 구조를 만들고 자료를 담는다.

**DB 명령어**
세미콜론으로 구문의 끝을 알린다.  
`CREATE  
DATABASE  
LIBRARY;`  

`CREATE TABLE MEMBER  
(  
  name VARCHAR(30) NOT NULL,  
  regno VARCHAR(15) PRIMARY KEY,  
  address VARCHAR(200),  
  num NUMBER(20)  
 );`
 
 `INSERT INTO MEMBER  
 VALUES  
 (  
   '재현',
   '12345667',  
   '서울시 동작구',  
   '01000000000'  
 );`
 
 `SELECT *  
 FROM MEMBER  
 WHERE name='재현';  `
 
 `SELECT *  
 FROM MEMBER  
 WHERE address like'서울%';  `
 
 `UPDATE MEMBER  
 SET num='01011111111'  
 WHERE name='재현'`
 
 `DELETE FROM MEMBER  
 WHERE name='재현'  `
 

사용할 DB 지정 (접속할 때 마다)  
`use DB이름`
