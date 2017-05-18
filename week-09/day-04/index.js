'use strict'

const mysql = require("mysql");
const express = require('express');
const app = express();
const query = `SELECT book_mast.book_name ,author.aut_name, category.cate_descrip, publisher.pub_name, book_mast.book_price FROM book_mast
                INNER JOIN author ON book_mast.aut_id=author.aut_id
                INNER JOIN category ON book_mast.cate_id=category.cate_id
                INNER JOIN publisher ON book_mast.pub_id=publisher.pub_id; `;

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "bookstore"
});


app.get('/', function get(req, res) {
    conn.query( query ,function(err, rows) {
    res.send(drawing(rows));
    });
});


function drawing(rows) {
    var table = "<table>";
    table += "<tr><th>" + "Book name" + "</th><th>" + "Author" + "</th><th>" + "Category" + "</th><th>" + "Publisher Name" + "</th><th>" + "Book Price" + "</th></tr>";
    rows.forEach(function(record) {
        // console.log(rows);
        table += "<tr>";
        table += "<td>" + record.book_name + "</td>";
        table += "<td>" + record.aut_name + "</td>";
        table += "<td>" + record.cate_descrip + "</td>";
        table += "<td>" + record.pub_name + "</td>";
        table += "<td>" + record.book_price + "</td>";
        table += "</tr>";
        });
    table += "</table>";
    return table;
}



app.listen(3000, function() {
    console.log('server is running');
});
