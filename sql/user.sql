create table if not exists user(
  id int not null auto_increment,
  user_name varchar(20),
  account varchar(11),
  password varchar(6),
  primary key (id)
);

create table if not exists chat_history(
  id int not null auto_increment,
  user_name varchar(20),
  
)