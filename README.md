# lil-json
Convert Large Json files into lil json files

## Installation
```
npm install -g lil-json
```

## Usage
```
lil-json myfile.json

//outputs myfile.lil.json
```

All arrays are shortened to contain only 3 elements


## Why? 
We sometimes want to take large json files and convert them to smaller ones, so we can use them for unit tests, better readability, etc..  

This typically occurs with array values with a large number of elements. 

  
```
{
  "prop1": "some value",
  "prop2": 34.5,
  "prop3": [
    [
      [
        "value 1", 
        "value 2",
        "value 3", 
        "value 4", 
        "value 5",
        "value 6", 
        // 10 gazillion more records....
      ],
      ...
    ],
    ...
  ]
}
 
// converts to smaller obj

{
  "prop1": "some value",
  "prop2": 34.5,
  "prop3": [
    [
      [
        "value 1", 
        "value 2",
        "value 3"
      ]
    ]
  ]
}
```


## License
MIT 

Please refer to the LICENSE file for details.

