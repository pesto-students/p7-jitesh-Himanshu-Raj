create database warehouse;
use warehouse;

-- Create CITIES table
CREATE TABLE CITIES (
    CITY CHAR(20),
    STATE CHAR(20),
    PRIMARY KEY (CITY)
);

-- Create WAREHOUSES table
CREATE TABLE WAREHOUSES (
    WID INTEGER,
    WNAME CHAR(30),
    LOCATION CHAR(20),
    EXTRA_CONTEXT JSON,
    CITY CHAR(20),
    PRIMARY KEY (WID),
    FOREIGN KEY (CITY) REFERENCES CITIES(CITY)
);

-- Create STORES table
CREATE TABLE STORES (
    SID INTEGER,
    STORE_NAME CHAR(20),
    WID INTEGER,
    LOCATION_CITY CHAR(20),
    PRIMARY KEY (SID),
    FOREIGN KEY (WID) REFERENCES WAREHOUSES(WID)
);

-- Create CUSTOMER table
CREATE TABLE CUSTOMER (
    CNO INTEGER,
    CNAME CHAR(50),
    ADDR VARCHAR(50),
    CU_CITY CHAR(20),
    PRIMARY KEY (CNO),
    FOREIGN KEY (CU_CITY) REFERENCES CITIES(CITY)
);

-- Create ORDERS table
CREATE TABLE ORDERS (
    ONO INTEGER,
    ODATE DATE,
    CNO INTEGER,
    PRIMARY KEY (ONO),
    FOREIGN KEY (CNO) REFERENCES CUSTOMER(CNO)
);

-- Create ITEMS table
CREATE TABLE ITEMS (
    ITEMNO INTEGER,
    DESCRIPTION TEXT,
    WEIGHT DECIMAL(5,2),
    COST DECIMAL(5,2),
    PRIMARY KEY (ITEMNO)
);

-- Create relationship between STORES and ITEMS
CREATE TABLE STORE_ITEMS (
    SID INTEGER,
    ITEMNO INTEGER,
    PRIMARY KEY (SID, ITEMNO),
    FOREIGN KEY (SID) REFERENCES STORES(SID),
    FOREIGN KEY (ITEMNO) REFERENCES ITEMS(ITEMNO)
);

-- Create relationship between ORDERS and ITEMS
CREATE TABLE ORDER_ITEMS (
    ONO INTEGER,
    ITEMNO INTEGER,
    PRIMARY KEY (ONO, ITEMNO),
    FOREIGN KEY (ONO) REFERENCES ORDERS(ONO),
    FOREIGN KEY (ITEMNO) REFERENCES ITEMS(ITEMNO)
);

-- ----------------------------

-- Insert data into CITIES table
INSERT INTO CITIES (CITY, STATE) VALUES
('New York', 'New York'),
('Los Angeles', 'California'),
('Chicago', 'Illinois'),
('Houston', 'Texas');

-- Insert data into WAREHOUSES table
INSERT INTO WAREHOUSES (WID, WNAME, LOCATION, EXTRA_CONTEXT, CITY) VALUES
(1, 'Warehouse A', '123 Main St.', '{"capacity": 1000}', 'New York'),
(2, 'Warehouse B', '456 1st Ave.', '{"capacity": 500}', 'Los Angeles'),
(3, 'Warehouse C', '789 Oak St.', '{"capacity": 750}', 'Chicago'),
(4, 'Warehouse D', '101 Main St.', '{"capacity": 1200}', 'Houston');

-- Insert data into STORES table
INSERT INTO STORES (SID, STORE_NAME, WID, LOCATION_CITY) VALUES
(1, 'Store A', 1, 'New York'),
(2, 'Store B', 1, 'New York'),
(3, 'Store C', 2, 'Los Angeles'),
(4, 'Store D', 3, 'Chicago'),
(5, 'Store E', 4, 'Houston');

-- Insert data into CUSTOMER table
INSERT INTO CUSTOMER (CNO, CNAME, ADDR, CU_CITY) VALUES
(1, 'John Doe', '123 Main St.', 'New York'),
(2, 'Jane Smith', '456 1st Ave.', 'Los Angeles'),
(3, 'Bob Johnson', '789 Oak St.', 'Chicago'),
(4, 'Sarah Williams', '101 Main St.', 'Houston');

-- Insert data into ORDERS table
INSERT INTO ORDERS (ONO, ODATE, CNO) VALUES
(1, '2022-01-01', 1),
(2, '2022-01-02', 1),
(3, '2022-01-03', 2),
(4, '2022-01-04', 3),
(5, '2022-01-05', 4);

-- Insert data into ITEMS table
INSERT INTO ITEMS (ITEMNO, DESCRIPTION, WEIGHT, COST) VALUES
(1, 'Item A', 2.5, 10.50),
(2, 'Item B', 1.5, 7.99),
(3, 'Item C', 3.0, 15.75),
(4, 'Item D', 0.5, 2.99),
(5, 'Item E', 1.0, 5.25);

-- Insert data into STORE_ITEMS table
INSERT INTO STORE_ITEMS (SID, ITEMNO) VALUES
(1, 1),
(1, 2),
(2, 3),
(2, 4),
(3, 1),
(3, 3),
(4, 2),
(4, 4),
(5, 3),
(5, 5);

-- Insert data into ORDER_ITEMS table
INSERT INTO ORDER_ITEMS (ONO, ITEMNO) VALUES
(1, 1),
(1, 2),
(2, 3),
(2, 4),
(3, 1),
(3, 3),
(4, 2),
(4, 4),
(5, 3),
(5, 5);