//תרגול 7
db.books.find({pageCount: {$gt:1000}})
//1
db.books.update({pageCount: 1234},{$set: {title:"1,2,3,4 to Java programming", status: "PUBLISH"}},{upsert: true})
//2
db.books.remove({title:/^b/},{publishedDate: true})
//3
db.books.update({status: "PUBLISH" ,publishedDate:{$exists:false}},{$currentDate:{publishedDate:true}})
//5
db.books.update({categories:{$all:["Java"]}},{$mul:{price : 1.1}})
//6
db.books.update({title: /C#/},{$inc:{pageCount: -20}},{$currentDate:{lastModified:true}})
//7
db.books.update({},{$max:{pageCount:0}, $set:{pageCount: 0}}, {$currentDate:{lastModifiedPages:true}})
//8
db.books.update({},{$rename:{lastModifiedPages: lastModified}})
//9
db.books.update({},{$min:{pageCount:1000} , $set:{pageCount: 1000}})
//10
db.books.update({$or:[{categories:null}, {categories:{$size:0}}]},{$unset:{categories: true}})
db.books.update({$or:[{authors:null}, {authors:{$size:0}}]},{$unset:{authors: true}})