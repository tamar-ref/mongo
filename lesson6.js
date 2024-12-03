 //עמוד 3

 //6
 db.books.remove({categories:{$size: 0}});
 //8
db.books.find({authors:"Robi Sen"},{name, long_desc});
 //9
db.books.find({authors:/a/i},{name, long_desc});
 //10
db.books.find({categories:[XML,Internet]});
 //11
db.books.find({categories:{$all:[XML,Internet]}});
 //12
 db.books.find({categories:{$all:['']}});
 //13
db.books.find({"authors.2":{$in:""}});
 //14
db.books.find({isbn:{$not:{$type:objectId}}});