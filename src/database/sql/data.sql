
--IMPORTANTE. INDICAR DB DONDE METER REGISTROS
USE FSD_LIBRERIA_DATABASE
insert into roles (id, name) values (1, 'user');
insert into roles (id, name) values (2, 'admin');
insert into roles (id, name) values (3, 'super_admin');

--en el sistema
insert into users (id, name, email, password, role_id) values (1, 'user', 'user@user.com', 'useruser', '1');
insert into users (id, name, email, password, role_id) values (2, 'admin', 'admin@admin.com', 'adminadmin', '2');
insert into users (id, name, email, password, role_id) values (3, 'super_admin', 'superadmin@superadmin.com', 'Christian', '3');

--poner a todos la misma contraseña hasheada mediante algun usuario del cual sepamos la suya. indicar en el readme la contraseña sin hashear. incluir role_id