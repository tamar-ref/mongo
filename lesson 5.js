//עמוד 3

//1
db.catalog.books.find({name:{$in:[/c#/i,/java/i,/python/i]}});
//2
db.catalog.books.find({isbn:{$nin:[/^19/,1884777384,/0/]}});
//3
db.catalog.books.find({$nor:[{isbn:/^19/},{name:/mongo/i},{pages:{$gt:600}}]});
//4
db.catalog.books.find({status:{$not:{PUBLISH}}});
//5
db.catalog.books.find({pages:{$mod:[10,0]}});
//7
db.catalog.books.find({book_url:{$exist:false}});