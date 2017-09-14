const db = require('./models');

/* --------------- Determine which method & Get General Config ----------------------*/

exports.handler = function(event, context, callback) {

let header = {'Access-Control-Allow-Origin': '*'}

// otherwise the function will wait until the connection is lost;
context.callbackWaitsForEmptyEventLoop = false;

const getMethod = (event) => {
  return event.httpMethod;
}

const extractPath = (event) => {
  let path = event.path.split('/').filter((el) => {
    if (el !== '') {
      return el
    }
  })
  return path
}

// query[0] is the base url (i.e. api);
const getDB = () => {
    let existingDB = Object.keys(db).slice(0, Object.keys(db).length - 2);
    let query = extractPath(event);
    if (existingDB.includes(query[1])) {
        return query[1];
    } else {
        return false;
    }
}
const determineSubRoutine = (event) => {
  let method = getMethod(event);
  switch (method) {
    case 'GET':
      get(getDB(), queryType(event), getQuery());
      break
    case 'POST':
      post(getDB());
      break;
    case 'PUT':
      update(getDB(), getPatchConfig());
      break
    case 'PATCH':
      update(getDB(), getPatchConfig());
      break
    case 'DELETE':
      destroy(getDB(), getDestroyConfig());
      break
    default:
      callback(null, {"statusCode": 400, "headers": header, "body": "Method Not Recognized"});
  }
}

/* --------------- GET METHOD FUNCTIONS ------------------------- */

const getIncludes = (obj) => {
    let inc = JSON.parse(obj);
    console.log(inc)
    if (inc[0] === 'all') {
        return [{"all": true}];
    } else {
        let includes = [];
        for (var i = 0; i < inc.length; ++i) {
            let model = inc[i];
            includes.push({"model": db[model], required: false});
        }
        return includes;
    }
}
const getQuery = () => {
    let path = extractPath(event);
    let query = {};
    let where = {};
    query["where"] = where;
    if (path[2] && path[3]) {
        where[path[2]] = path[3];
    }
    if (event.queryStringParameters) {
    if (event.queryStringParameters.extraParams) {
        params = JSON.parse(event.queryStringParameters.extraParams);
        let len = Object.keys(params).length; 
        for (var i = 0; i < len; ++i) {
            where[Object.keys(params)[i]] = params[Object.keys(params)[i]];
        }
    }
    if (event.queryStringParameters.offset) {
        query.offset = JSON.parse(event.queryStringParameters.offset);
    }
    if (event.queryStringParameters.limit) {
        query.limit = JSON.parse(event.queryStringParameters.limit);
    }
    if (event.queryStringParameters.attr) {
        query.attributes = JSON.parse(event.queryStringParameters.attr);
    }
    if (event.queryStringParameters.include) {
        console.log(event.queryStringParameters.include);
        query.include = getIncludes(event.queryStringParameters.include);
    }
 } else {
     query.limit = 2000;
 }
    query["raw"] = true;
    console.log(query);
    return query;
}

const isFindOne = (event) => {
    if (event.queryStringParameters) {
        if (event.queryStringParameters.limit === "1") {
            return true;
        } else {
            return false;
        }
    }
    else {
        return false;
    }
}

const queryType = (event) => {
    if (isFindOne(event)) {
        return "findOne";
    } else {
        return "findAll";
    }
}

const get = (config, method, query) => {
    if (config) {
    db[config]["findAll"](query)
                .then(res => {
                    callback(null, {"headers": header, "body": JSON.stringify(res)});
                })
         .catch(err=> {
             callback(null, {"statusCode": 400, "headers": header, "body": JSON.stringify(err)});
         });
    } else {
        callback(null, {"statusCode": 400, "headers": header, "body": "Resource Not Found!"});
    }
}

/* --------------- Post ------------------------- */

const post = (config) => {
    console.log(config);
        if (config) {
    db[config].create(JSON.parse(event.body))
        .then(res => {
            callback(null, {"statusCode": 200, "headers": header, "body": JSON.stringify(res)})
                        })
         .catch(err => { 
             console.log(err);
            callback(null, {"statusCode": 400,"headers": header, "body": JSON.stringify(err)}
                )}
            )} else {
        callback(null, {"statusCode": 400,"headers": header, "body": "Resource Not Found!"});
    }
}

/* --------------- Patch ------------------------- */

const getPatchConfig = () => {
    let query = {};
    let path = extractPath(event);
    let where = {};
    where[path[2]] = decodeURI(path[3]);
    query["where"] = where;
    return query;
}

const update = (dbName, config) => {
    console.log(config);
    console.log(event.body);
    if (dbName) {
    db[dbName].update(JSON.parse(event.body), config)
        .then(res =>  {
            console.log(res);
            callback(null, {"statusCode": 200,"headers": header, "body": JSON.stringify(res)})
                        })
          .catch(err =>  {
              console.log(err);
              callback(null, {"statusCode": 400,"headers": header, "body": JSON.stringify(err)})
        
    });
              } else {
                  console.log('gen error');
        callback(null, {"statusCode": 400,"headers": header, "body": "Resource Not Found!"});
    }
}

/* --------------- Delete ------------------------- */

const getDestroyConfig = () => {
    let query = {};
    let path = extractPath(event);
    let where = {};
    where[path[2]] = decodeURI(path[3]);
    query["where"] = where;
    return query;
}

const destroy = (dbName, config) => {
    if (dbName) {
    db[dbName].destroy(config)
        .then(res => {
            console.log("DELETED ITEM");
            console.log(res);
            callback(null, {"statusCode": 400,"headers": header, "body": JSON.stringify(res)})
                        })
         .catch(err =>  callback(null, {"statusCode": 400,"headers": header, "body": JSON.stringify(err)}));
             } else {
        callback(null, {"statusCode": 400,"headers": header, "body": "Resource Not Found!"});
    }
}
    determineSubRoutine(event);
}