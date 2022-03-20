DATABASE
====================================
**관계형 데이터베이스란?**

데이터베이스(이하 DB)는 어플리케이션에서 사용할 데이터를 체계적으로 디스크에 담도록 만들어진 데이터 저장 전용 프로그램이다. 그 중에서도 관계형 데이터베이스는 고전적으로 많이 사용해온 데이터베이스의 형태이다. 오라클, MySQL, SQLServer, SQLLite 등의 시스템이 존재한다. SQL이라는 언어로 DB파일 안에 구조를 만들고 자료를 담는다.

**DB 명령어**   

세미콜론으로 구문의 끝을 알린다.  
`CREATE  
DATABASE  
LIBRARY;`  



1. 테이블 생성   
`CREATE TABLE MEMBER  
(  
  name VARCHAR(30) NOT NULL,  
  regno VARCHAR(15) PRIMARY KEY,  
  address VARCHAR(200),  
  num NUMBER(20)  
 );`   
 
 
 2. 데이터 삽입    
 `INSERT INTO MEMBER  
 VALUES  
 (  
   '재현',
   '12345667',  
   '서울시 동작구',  
   '01000000000'  
 );`   
 
 
 3. 데이터 찾기 -WHERE 조건절   
 
    -이름이 재현인 사람 찾기   
`SELECT *  
 FROM MEMBER  
 WHERE name='재현';  `   
 
    -주소가 서울로 시작하는 사람 모두 찾기 -LIKE   
 `SELECT *  
 FROM MEMBER  
 WHERE address like'서울%';  `    
 
    -이름이 재현이고 주소가 서울로 시작하는 사람 찾기 -AND   
 `SELECT *   
 FROM MEMBER   
 WHERE name='재현' AND   
 address like'서울%';   `    
 
    -이름이 재현이거나 주소가 서울로 시작하는 사람 찾기 -OR   
 `SELECT *   
 FROM MEMBER   
 WHERE name='재현' AND   
 address like'서울%';  `     
  
    -이름이 재현이고 주소가 서울로 시작하는 사람을 제외한 모든 사람 찾기 -NOT(여집합)   
 `SELECT *   
 FROM MEMBER   
 WHERE   
 NOT(name='재현' AND   
 address like'서울%');`     
 
 
 4. 데이터 업데이트하기   
    -이름이 재현인 사람의 전화번호 업데이트하기   
 `UPDATE MEMBER   
 SET num='01011111111'      
 WHERE name='재현';    `     
 
 
 5. 데이터 삭제    
    -이름이 재현인 사람의 레코드를 모두 삭제   
 `DELETE FROM MEMBER   
 WHERE name='재현';    `    
 
 
 6. 데이터 병합 -INNER JOIN      
`SELECT *     
FROM MEMBER    
WHERE name='재현'   
INNER JOIN HISTORY    
ON    
MEMBER.name=   
HISTORY.name;`   

  -INNER JOIN을 사용하지 않고 병합
`SELECT *   
FROM MEMBER, HISTORY   
WHERE name='재현'   
AND   
MEMBER.name=
HISTORY.name;`   


7. 정렬   -ORDER BY (기본 오름차순)      
   -name column을 기준으로 오름차순 정렬       
`SELECT  *
FROM MEMBER
ORDER BY name;`   
    -name column을 기준으로 내림차순 정렬   
`SELECT *
FROM MEMBER
ORDER BY name desc;`   


 
 **DB 연산자**    
 `num=111`   
 `num<>111`  
 `num>111, num<111`   
 `num>=111, num<=111`   
 `num BETWEEN 111 AND 123 (111<=num<=123)`   
 `num IN(1,2,3,4) (num은 1, 2, 3, 4 중 하나다)`   
 `num is NULL`   
 `num is NOT NULL`   
 

**사용할 DB 지정 (접속할 때 마다)**    
`use DB이름`
