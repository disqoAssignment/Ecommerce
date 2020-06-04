
use schema `user_authentication`;
INSERT INTO `roles` (`id`, `name`) VALUES (1,'ROLE_ADMIN'),(2,'ROLE_USER');
INSERT INTO `users` VALUES (1,'postvard@gmail.com','Varduhi','Var78%6Sa#','varduhi_u'),(2,'postvard@yahoo.com','Varduhi','Var78%6Sa#','varduhi_a');
INSERT INTO `user_roles` VALUES (1,1),(2,2);









