## Description

Basic REST API with connecting to MySQL database through sequelize

## Configuration

Copy ".env-example" file in root folder, rename to ".env" and change properties to your data

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Postman collection

```json
{
  "info": {
    "_postman_id": "efc2915a-7e68-4e76-8fac-0b34e354ef92",
    "name": "Rest Api Test",
    "schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json",
    "_exporter_id": "14419031"
  },
  "item": [
    {
      "name": "Add book",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"title\": \"The Witcher\",\n    \"author\": \"Anjey Sapkovski\",\n    \"count\": 5\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": "http://localhost:3000/book"
      },
      "response": []
    },
    {
      "name": "Get all books",
      "request": {
        "method": "GET",
        "header": [],
        "url": "http://localhost:3000/book"
      },
      "response": []
    },
    {
      "name": "Get book",
      "request": {
        "method": "GET",
        "header": [],
        "url": "http://localhost:3000/book/1"
      },
      "response": []
    },
    {
      "name": "Update book",
      "request": {
        "method": "PATCH",
        "header": [],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"count\": 10\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": "http://localhost:3000/book/1"
      },
      "response": []
    },
    {
      "name": "Remove book",
      "request": {
        "method": "DELETE",
        "header": [],
        "url": "http://localhost:3000/book/2"
      },
      "response": []
    }
  ]
}
```
