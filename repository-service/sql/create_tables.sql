CREATE SCHEMA IF NOT EXISTS  `ecommerce`;

USE `ecommerce`;

DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `cart_id` bigint(20) NOT NULL,
  `grand_total` double NOT NULL,
  `customer_id` bigint(20) NOT NULL,
  PRIMARY KEY (`cart_id`),
  KEY `FKdebwvad6pp1ekiqy5jtixqbaj` (`customer_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `cart_item`;
CREATE TABLE `cart_item` (
  `cart_item_id` bigint(20) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price_double` double NOT NULL,
  `cart_id` bigint(20) NOT NULL,
  `product_id` bigint(20)NOT NULL,
  PRIMARY KEY (`cart_item_id`),
  KEY `FK1uobyhgl1wvgt1jpccia8xxs3` (`cart_id`),
  KEY `FKjcyd5wv4igqnw413rgxbfu4nv` (`product_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `order_item`;
CREATE TABLE `order_item` (
  `order_item_id` bigint(20) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price_double` double NOT NULL,
  `customer_id` bigint(20) NOT NULL,
  `product_id` bigint(20) NOT NULL,
  `order_date` datetime DEFAULT NULL,
  PRIMARY KEY (`order_item_id`),
  KEY `FK1uobyhgl1wvgt1jpccia8xxs3` (`customer_id`),
  KEY `FKjcyd5wv4igqnw413rgxbfu4nv` (`product_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `credit_card`;
CREATE TABLE `credit_card` (
  `card_id` bigint(20) NOT NULL,
  `customer_id` bigint(20) NOT NULL,
  `PAN` varchar(16)  NOT NULL,
  `type` varchar(4) NOT NULL,
  PRIMARY KEY (`card_id`),
  KEY `FK_CUSTOMER_ID` (`customer_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer` (
  `customer_id` bigint(20) NOT NULL,
  `customer_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `register_date` datetime DEFAULT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `product_id` bigint(20) NOT NULL,
  `product_condition` varchar(255) DEFAULT NULL,
  `product_date` datetime DEFAULT NULL,
  `product_description` varchar(255) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `product_price` double NOT NULL,
  `unit_in_stock` int(11) NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
