USE yummy;

DROP TABLE IF EXISTS foods;

CREATE TABLE foods (
    id SMALLINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    cosher_type CHAR(5) NULL, -- MILK,MEAT,PARVE
    cuisine_id TINYINT NULL,
    image VARCHAR(250) NOT NULL,
    kalories SMALLINT NULL,
    prepare_time_min SMALLINT NOT NULL, 
    ingredients VARCHAR(300),
    type_of_dish CHAR(9) --DESSERT,SOUP,MAIN,SIDE DISH,DRINK
);

/**
1byte = 8bits
00000000
2^8 = 256 (0-255)
*/