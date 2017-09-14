# Apiquilize

Sequelize and its corresponding cli have made it easy to create models on the fly. What this libbrary allows you to do is create a lambda function that works with the API Gateway on AWS. 

## Alternatives

[Sequelize-restful](https://www.npmjs.com/package/sequelize-restful) creates a server that doesn't use the newest features of the cloud. Instead of having a server run all the time, we can create lambda functions which only run when called. Consequently, they are cheaper and more efficient.

Likewise, [Epilogue](https://github.com/dchester/epilogue) is for express or restify apps.

## To use this:

1. Zip the files:

```
zip -r index.zip *
```

2. Add a lambda function and upload the zip file.

3. Create a pass through API to connect to the lambda function.