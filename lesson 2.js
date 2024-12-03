//1
use bookDB
//2
show dbs 
//3
db.createCollection("books")
db.createCollection("websites")
db.books.insert({name:"hello world",
                 short_desc:"exciting",
                 img_url:"https://www.office.com/",
                 book_url:"https://www.office.com/",
                 isbn:"1234",
                 price: 54.90,
                 categories:["drama", "action", "adult", "children"],
                 website_id:1234})
db.websites.insert({name:"yafe nof",
                    url:"https://www.office.com/",
                    books:[]})
//4
show collections
//5
db.websites.drop()
//6
db.books.insert({name:"dina dey",
                 short_desc:"cute",
                 img_url:"https://www.office.com/",
                 book_url:"https://www.office.com/",
                 isbn:"2548",
                 price: 29.90,
                 categories:["drama", "action", "adult", "children"],
                 website_id:1234})
db.books.insert({name:"tomorrow",
                 short_desc:"exciting",
                 img_url:"https://www.office.com/",
                 book_url:"https://www.office.com/",
                 isbn:"6987",
                 price: 61.50,
                 categories:["drama", "action", "adult" ,"children"],
                 website_id:1234})
db.books.insert({name:"hello world",
                 short_desc:"great book",
                 img_url:"https://www.office.com/",
                 book_url:"https://www.office.com/",
                 isbn:"3658",
                 price: 36.89,
                 categories:["drama", "action", "adult"],
                 website_id:1234})
db.websites.insert({name:"yafe nof",
                    url:"https://www.office.com/",
                    books:[]})
db.websites.insert({name:"yafe nof",
                    url:"https://www.office.com/",
                    books:[]})
db.websites.insert({name:"yafe nof",
                    url:"https://www.office.com/",
                    books:[]})
//8
//id-קוד אוטומטי