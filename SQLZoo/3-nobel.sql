--Change the query shown so that it displays Nobel prizes for 1950.
SELECT yr, subject, winner
  FROM nobel
 WHERE yr = 1950
 --Show who won the 1962 prize for literature.
 SELECT winner
  FROM nobel
 WHERE yr = 1962
   AND subject = 'literature'
-- Show the year and subject that won 'Albert Einstein' his prize.
   select yr, subject from nobel where winner like 'Albert%in'
--Give the name of the 'peace' winners since the year 2000, including 2000.
select winner from nobel where subject = 'peace' and yr >= 2000
-- Show all details (yr, subject, winner) of the literature prize winners for 1980 to 1989 inclusive.
select yr, subject, winner from nobel where subject = 'literature' and yr >= 1980 and yr <= 1989
--Selects presidential winners
SELECT * FROM nobel
 WHERE winner in ('Theodore Roosevelt', 'Woodrow Wilson', 'Jimmy Carter','Barack Obama')
--selects winners with first name John
select winner from nobel where winner like 'John%'
--Show the year, subject, and name of physics winners for 1980 together with the chemistry winners for 1984.
select yr, subject, winner from nobel where 
(subject = 'physics' and yr = 1980) or (subject = 'chemistry' and yr = 1984)
--Show the year, subject, and name of winners for 1980 excluding chemistry and medicine
select yr, subject, winner from nobel where yr = 1980 and subject not in ('chemistry', 'medicine')
--Show year, subject, and name of people who won a 'Medicine' prize in an early year (before 1910, not including 1910) together with winners of a 'Literature' prize in a later year (after 2004, including 2004)
select yr, subject, winner from nobel where (subject = 'medicine' and yr < 1910) or (subject = 'literature' and yr >= 2004) 
--Find all details of the prize won by PETER GRÜNBERG
select * from nobel where winner like'pe%r%g'
--Find all details of the prize won by EUGENE O'NEILL
select * from nobel where winner = 'eugene o''neill' 
--List the winners, year and subject where the winner starts with Sir. Show the the most recent first, then by name order.
select winner, yr, subject from nobel where winner like 'Sir%' order by yr desc, winner