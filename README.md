# Using MySQL

## INSTALLATION

```sh
brew install mysql
sudo apt isntall mysql-server
```

## SETUP

```sh
mysql_secure_installation
```

## RUN

```sh
mysql -u root -p
```

## CREATE DATABASE

```sql
CREATE DATABASE students_impactbyte;
```

Output:

```txt
Query OK, 1 row affected (0.01 sec)
```

```sql
USE students_impactbyte;
```

Output:

```txt
Database changed
```

## CREATE TABLE

Table:

| id  | first_name | last_name | email            | address       |
| --- | ---------- | --------- | ---------------- | ------------- |
| 1   | jono       | joni      | jonjon@gmail.com | jln. buntu    |
| 2   | Hanif      | finah     | hanif@gmail.com  | jln. gambir   |
| 3   | sakyd      | natra     | natra@gmail.com  | jln. merapi 4 |

SQL Create Table:

```sql
CREATE TABLE IF NOT EXISTS students (
    students_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    email VARCHAR(70),
    address VARCHAR(250));
```

```txt
Query OK, 0 rows affected (0.01 sec)
```

| Endpoint        | Method | Description        |
| --------------- | ------ | ------------------ |
| `/students`     | GET    | Get all users      |
| `/students/:id` | GET    | Get one user by id |
| `/students`     | POST   | Input new users    |
| `/students/:id` | DELETE | Input new users    |
