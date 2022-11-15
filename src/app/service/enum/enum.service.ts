import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnumService {

  constructor() { }
  data = {
    "data": {
      "id": 1,
      "name": "james",
      "email": "james@gmail.com",
      "token": "123456",
      "refresh_token": "987654321",
      "all_modules": [
        {
          "id": 1,
          "name": "Doctor",
          "sub_modules": [
            {
              "id": 1,
              "name": "Create"
            },
            {
              "id": 1,
              "name": "Update"
            }
          ]
        },
        {
          "id": 2,
          "name": "Inventory",
          "sub_modules": [
            {
              "id": 3,
              "name": "Create"
            },
            {
              "id": 4,
              "name": "Update"
            },
            {
              "id": 5,
              "name": "Delete"
            }
          ]
        }
      ],
      "permision_modules": [
        {
          "id": 3,
          "name": "Doctor",
          "sub_modules": [
            {
              "id": 1,
              "name": "Create"
            }
          ]
        },
        {
          "id": 2,
          "name": "Inventory",
          "sub_modules": [
            {
              "id": 3,
              "name": "Create"
            },
            {
              "id": 4,
              "name": "Update"
            },
            {
              "id": 5,
              "name": "Delete"
            }
          ]
        }
      ]
    }
  }
 
  
}
