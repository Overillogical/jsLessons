fetch('http://localhost:3003/api/books/563', {method:'GET'})
fetch('http://localhost:3003/api/books/123', {method:'GET'}) // URI PARAMETERS
fetch("http://localhost:3003/api/books?author='fowler'&year=67&sort=title", {method:'GET'}) // query PARARMETERS
fetch('http://localhost:3003/api/books/563', {method:'DELETE'}) // Deletes book #563
fetch('http://localhost:3003/api/books', {method:'POST', body: JSON.stringify({title:'js', author:'dd'}), headers: {"content-type" : 'application/json'}}) // payload





