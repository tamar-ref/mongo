//3
db.catalog.books.find({isbn:1933988797});
//8
db.catalog.books.find({name:/a$/});
//11
db.catalog.books.find({name:/data/i},{name});
//12
db.catalog.books.find({name:/e$/i},{isbn,name});
//13
db.catalog.books.find().sort({name});
//14
db.catalog.books.find().sort({name:-1});
//15
db.catalog.books.find({name:/^j/i}).count;
//16
db.catalog.books.find().sort(pages).limit(5);
//17
db.catalog.books.find({category:{$exist:false}});
//18
db.catalog.books.find({shortDescription:{$exist:true}});
//19
db.catalog.books.find({ObjectId:{$exist:true}}).count;