CREATE DATABASE typescriptdb

CREATE TABLE productosTotal(

      idprod SERIAL PRIMARY KEY,
      name VARCHAR (40),
      lastname VARCHAR (40),
      categories VARCHAR (40),
      id VARCHAR (40),
      title VARCHAR (256),
      price  INT
      currency VARCHAR (40),
      amount  INT
      decimals  INT
      picture VARCHAR (256),
      condition VARCHAR (40),
      free_shipping VARCHAR (40),
)



INSERT INTO productosTotal (name,lastname,categories,id,title, price , currency, amountdecimals,picture ,
      condition,free_shipping)
    VALUES ('DANIEL','PERCO','MLA1055','MLA01','Motorola m40', 3456 , 'ARS', 3456,007,'IMG_MOTOROLA1.png' ,
            'NEW',true),
           ('DANIEL','PERCO','MLA1055','MLA01','samsun galaxy', 2700 , 'ARS', 2700,0889,'IMG_SAMSUNG.png',
            'NEW',true),
            ('DANIEL','PERCO','MLA1055','MLA01','nec 1134', 1800, 'ARS', 1800,1009,'IMG_NEC.png' ,
           'OLD',true);