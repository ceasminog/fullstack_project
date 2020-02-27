CREATE TABLE Cats (
    CatId int NOT NULL AUTO_INCREMENT,
    Name varchar(255),
    Age int,
    Breed varchar(255),
    OwnerId int,
    PRIMARY KEY (CatId),
    FOREIGN KEY (OwnerId) REFERENCES Users(UserId)
);
