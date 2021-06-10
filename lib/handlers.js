/*
* Request handlers
*
*/

// Dependencies;
var config = require('./config');
var _data = require('./data');
var helpers = require('./helpers');

// Define the Handlers
var handlers = {}



/*
* HTML Handlers
*
*/

// Index handler
handlers.index = function(data, callback){
    // Reject any request that isn't a GET
    if(data.method == 'get'){

        // Prepare data for interpolation
        var templateData = {
            'head.title' : 'Uptime Monitoring — Made Simple',
            'head.description': 'We offer free, simple uptime monitoring for HTTP/HTTPS sites of all kinds. When your sites go down, we\'ll send you a text to let you know.',
            'body.class': 'index'
        };

        // Read in a template as a string
        helpers.getTemplate('index', templateData, function(err, str){
            if(!err && str){
                // Add the universal header and footer
                helpers.addUniversalTemplates(str, templateData, function(err, str){
                    if(!err && str){
                        // Return that page as HTML
                        callback(200, str, 'html');
                    } else {
                        callback(500, undefined, 'html');
                    }
                });
            } else {
                callback(500, undefined, 'html')
            }
        })
    } else {
        callback(405, undefined, 'html');
    }
}

// Create Account handler
handlers.accountCreate = function(data, callback){
    // Reject any request that isn't a GET
    if(data.method == 'get'){

        // Prepare data for interpolation
        var templateData = {
            'head.title' : 'Create an Account',
            'head.description': 'Signup is easy and just takes a few seconds.',
            'body.class': 'accountCreate'
        };

        // Read in a template as a string
        helpers.getTemplate('accountCreate', templateData, function(err, str){
            if(!err && str){
                // Add the universal header and footer
                helpers.addUniversalTemplates(str, templateData, function(err, str){
                    if(!err && str){
                        // Return that page as HTML
                        callback(200, str, 'html');
                    } else {
                        callback(500, undefined, 'html');
                    }
                });
            } else {
                callback(500, undefined, 'html')
            }
        })
    } else {
        callback(405, undefined, 'html');
    }
}

// Create Session handler
handlers.sessionCreate = function(data, callback){
    // Reject any request that isn't a GET
    if(data.method == 'get'){

        // Prepare data for interpolation
        var templateData = {
            'head.title' : 'Login to your Account',
            'head.description': 'Please enter your Phone Number and Password to access your account.',
            'body.class': 'sessionCreate'
        };

        // Read in a template as a string
        helpers.getTemplate('sessionCreate', templateData, function(err, str){
            if(!err && str){
                // Add the universal header and footer
                helpers.addUniversalTemplates(str, templateData, function(err, str){
                    if(!err && str){
                        // Return that page as HTML
                        callback(200, str, 'html');
                    } else {
                        callback(500, undefined, 'html');
                    }
                });
            } else {
                callback(500, undefined, 'html')
            }
        })
    } else {
        callback(405, undefined, 'html');
    }
}

// Session Deleted handler
handlers.sessionDeleted = function(data, callback){
    // Reject any request that isn't a GET
    if(data.method == 'get'){

        // Prepare data for interpolation
        var templateData = {
            'head.title' : 'Logged Out',
            'head.description': 'You have been logged out of your account.',
            'body.class': 'sessionDeleted'
        };

        // Read in a template as a string
        helpers.getTemplate('sessionDeleted', templateData, function(err, str){
            if(!err && str){
                // Add the universal header and footer
                helpers.addUniversalTemplates(str, templateData, function(err, str){
                    if(!err && str){
                        // Return that page as HTML
                        callback(200, str, 'html');
                    } else {
                        callback(500, undefined, 'html');
                    }
                });
            } else {
                callback(500, undefined, 'html')
            }
        })
    } else {
        callback(405, undefined, 'html');
    }
}

// Acoount Edit handler
handlers.accountEdit = function(data, callback){
    // Reject any request that isn't a GET
    if(data.method == 'get'){

        // Prepare data for interpolation
        var templateData = {
            'head.title' : 'Account Settings',
            'body.class': 'accountEdit'
        };

        // Read in a template as a string
        helpers.getTemplate('accountEdit', templateData, function(err, str){
            if(!err && str){
                // Add the universal header and footer
                helpers.addUniversalTemplates(str, templateData, function(err, str){
                    if(!err && str){
                        // Return that page as HTML
                        callback(200, str, 'html');
                    } else {
                        callback(500, undefined, 'html');
                    }
                });
            } else {
                callback(500, undefined, 'html')
            }
        })
    } else {
        callback(405, undefined, 'html');
    }
}

// Account Delete handler
handlers.accountDeleted = function(data, callback){
    // Reject any request that isn't a GET
    if(data.method == 'get'){

        // Prepare data for interpolation
        var templateData = {
            'head.title' : 'Account deleted successfully',
            'head.description': 'Your account has been deleted successfully.',
            'body.class': 'accountDeleted'
        };

        // Read in a template as a string
        helpers.getTemplate('accountDeleted', templateData, function(err, str){
            if(!err && str){
                // Add the universal header and footer
                helpers.addUniversalTemplates(str, templateData, function(err, str){
                    if(!err && str){
                        // Return that page as HTML
                        callback(200, str, 'html');
                    } else {
                        callback(500, undefined, 'html');
                    }
                });
            } else {
                callback(500, undefined, 'html')
            }
        })
    } else {
        callback(405, undefined, 'html');
    }
}

// Create Checks handler
handlers.checksCreate = function(data, callback){
    // Reject any request that isn't a GET
    if(data.method == 'get'){

        // Prepare data for interpolation
        var templateData = {
            'head.title' : 'Create a new check',
            'body.class': 'checksCreate'
        };

        // Read in a template as a string
        helpers.getTemplate('checksCreate', templateData, function(err, str){
            if(!err && str){
                // Add the universal header and footer
                helpers.addUniversalTemplates(str, templateData, function(err, str){
                    if(!err && str){
                        // Return that page as HTML
                        callback(200, str, 'html');
                    } else {
                        callback(500, undefined, 'html');
                    }
                });
            } else {
                callback(500, undefined, 'html')
            }
        })
    } else {
        callback(405, undefined, 'html');
    }
}

// Dashboard handler
handlers.checksList = function(data, callback){
    // Reject any request that isn't a GET
    if(data.method == 'get'){

        // Prepare data for interpolation
        var templateData = {
            'head.title' : 'Dashboard',
            'body.class': 'checksList'
        };

        // Read in a template as a string
        helpers.getTemplate('checksList', templateData, function(err, str){
            if(!err && str){
                // Add the universal header and footer
                helpers.addUniversalTemplates(str, templateData, function(err, str){
                    if(!err && str){
                        // Return that page as HTML
                        callback(200, str, 'html');
                    } else {
                        callback(500, undefined, 'html');
                    }
                });
            } else {
                callback(500, undefined, 'html')
            }
        })
    } else {
        callback(405, undefined, 'html');
    }
}

// Edit Checks handler
handlers.checksEdit = function(data, callback){
    // Reject any request that isn't a GET
    if(data.method == 'get'){

        // Prepare data for interpolation
        var templateData = {
            'head.title' : 'Edit your Check',
            'body.class': 'checksEdit'
        };

        // Read in a template as a string
        helpers.getTemplate('checksEdit', templateData, function(err, str){
            if(!err && str){
                // Add the universal header and footer
                helpers.addUniversalTemplates(str, templateData, function(err, str){
                    if(!err && str){
                        // Return that page as HTML
                        callback(200, str, 'html');
                    } else {
                        callback(500, undefined, 'html');
                    }
                });
            } else {
                callback(500, undefined, 'html')
            }
        })
    } else {
        callback(405, undefined, 'html');
    }
}

// Favicon handler
handlers.favicon = function(data, callback){
    // Reject any request that isn't a GET
    if(data.method == 'get'){
        // Read in the favicon's data
        helpers.getStaticAsset('favicon.ico', function(err, data){
            if(!err && data){
                // Callback the data
                callback(200, data, 'favicon');
            } else {
                callback(500);
            }
        });
    } else {
        callback(405);
    }
}

// Public Assets handler
handlers.public = function(data, callback){
    // Reject any method that isn't a GET
    if(data.method == 'get'){
        // Get the filename being requested
        var trimmedAssetName = data.trimmedPath.replace('public/', '').trim();
        if(trimmedAssetName.length > 0){
            // Read in the asset's data
            helpers.getStaticAsset(trimmedAssetName, function(err, data){
                if(!err && data){
                    // Determine the content type (default to plain text)
                    var contentType = 'plain';

                    if(trimmedAssetName.indexOf('.css') > -1){
                        contentType = 'css';
                    }
                    if(trimmedAssetName.indexOf('.jpg') > -1){
                        contentType = 'jpg';
                    }
                    if(trimmedAssetName.indexOf('.png') > -1){
                        contentType = 'png';
                    }
                    if(trimmedAssetName.indexOf('.ico') > -1){
                        contentType = 'favicon';
                    }

                    // Callback the data
                    callback(200, data, contentType);
                } else {
                    callback(404);
                }
            });
        } else {
            callback(404);
        }
    } else {
        callback(405);
    }
}


/*
* JSON API Handlers
*
*/

// Users handler
handlers.users = function(data, callback){
    var acceptableMethods = ['post', 'get', 'put', 'delete'];
    if(acceptableMethods.indexOf(data.method) > -1){
        handlers._users[data.method](data, callback);
    } else {
        callback(405);
    }
};

// Container for the users submethods
handlers._users = {};

// Users - post
// Required data: firstName, lastName, phone, password, tosAgreement
// Optional data: none
handlers._users.post = function(data, callback){
    // Check that all required fields are filled out
    var firstName = typeof(data.payload.firstName) == 'string' && data.payload.firstName.trim().length > 0 ? data.payload.firstName.trim() : false;
    var lastName = typeof(data.payload.lastName) == 'string' && data.payload.lastName.trim().length > 0 ? data.payload.lastName.trim() : false;
    var phone = typeof(data.payload.phone) == 'string' && data.payload.phone.trim().length == 10 ? data.payload.phone.trim() : false
    var password = typeof(data.payload.password) == 'string' && data.payload.password.trim().length >= 8 ? data.payload.password.trim() : false
    var tosAgreement = typeof(data.payload.tosAgreement) == 'boolean' && data.payload.tosAgreement == true ? true : false

    if(firstName && lastName && phone && password && tosAgreement){
        // Make sure that the user doesn't already exist
        _data.read('users', phone, function(err, data){
            if(err){
                // Hash the password
                var hashedPassword = helpers.hash(password)

                if(hashedPassword){
                    // Create the user object
                    var userObject = {
                        firstName,
                        lastName,
                        phone,
                        hashedPassword,
                        'tosAgreement': true
                    };
    
                    // Store the user
                    _data.create('users', phone, userObject, function(err) {
                        if(!err){
                            callback(201);
                        } else {
                            console.log(err);
                            callback(500, {'Error': "Could not create the new user"});
                        }
                    });
                } else {
                    callback(500, {'Error': "Could not hash the user's password"})
                }
            } else {
                // User already exists
                callback(400, {'Error': 'A user with that phone number already exists'})
            }
        });
    } else {
        callback(400, {'Error': 'Missing required fields'});
    }
}

// Users - get
// Required data: phone
// Optional data: none
handlers._users.get = function(data, callback){
    // Check that the phone number is valid
    var phone = typeof(data.queryStringObject.phone) == 'string' && data.queryStringObject.phone.trim().length == 10 ? data.queryStringObject.phone.trim() : false;
    if(phone){
        // Get the token from the headers
        var token = typeof(data.headers.token) == 'string' ? data.headers.token : false
        //Verify that the given token is valid for the phone number
        handlers._tokens.verifyToken(token, phone, function(tokenIsValid){
            if(tokenIsValid){
                // Lookup the user
                _data.read('users', phone, function(err, data){
                    if(!err && data){
                        // Remove the hashed password from the user object before returning it to the requestor
                        delete data.hashedPassword;
                        delete data.tosAgreement;
                        callback(200, data); 
                    } else {
                        callback(404);
                    }
                })
            } else {
                callback(403, {'Error': 'Missing required token in the header, or token is invalid'})
            }
        })
    } else {
        callback(400, {'Error': 'Missing required field'})
    }
}

// Users - put
// Required data : phone
// Optional data : firstName, lastName, password (at least one must be specified)
handlers._users.put = function(data, callback){
    // Check for the required field
    var phone = typeof(data.payload.phone) == 'string' && data.payload.phone.trim().length == 10 ? data.payload.phone.trim() : false;

    // Check for optional fields
    var firstName = typeof(data.payload.firstName) == 'string' && data.payload.firstName.trim().length > 0 ? data.payload.firstName.trim() : false;
    var lastName = typeof(data.payload.lastName) == 'string' && data.payload.lastName.trim().length > 0 ? data.payload.lastName.trim() : false;
    var password = typeof(data.payload.password) == 'string' && data.payload.password.trim().length >= 8 ? data.payload.password.trim() : false;

    // Error if the phone is invalid
    if(phone){

        // Error if nothing is sent to update
        if(firstName || lastName || password){
            // Get the token from the headers
            var token = typeof(data.headers.token) == 'string' ? data.headers.token : false
            //Verify that the given token is valid for the phone number
            handlers._tokens.verifyToken(token, phone, function(tokenIsValid){
                if(tokenIsValid){
                    // Lookup the user
                    _data.read('users', phone, function(err, userData){
                        if(!err && userData){
                            // Update the fields necessary
                            if(firstName){
                                userData.firstName = firstName;
                            }
                            if(lastName){
                                userData.lastName = lastName;
                            }
                            if(password){
                                userData.hashedPassword = helpers.hash(password);
                            }
                        
                            // Store the new update
                            _data.update('users', phone, userData, function(err){
                                if(!err){
                                    callback(204);
                                } else {
                                    console.log(err);
                                    callback(500, {'Error': 'Could not update the user.'})
                                }
                            })
                        } else {
                            callback(400, {'Error': 'The specified user does not exist.'})
                        }
                    })
                } else {
                    callback(403, {'Error': 'Missing required token in the header, or token is invalid'})
                }
            })
        } else{
            callback(400, {'Error': 'Missing fields to update.'})
        }
    } else {
        callback(400, {'Error': 'Missing required field'})
    }
}

// Users - delete
// Required field: phone
// Optional field: none
handlers._users.delete = function(data, callback){
    // Check for the required field
    var phone = typeof(data.queryStringObject.phone) == 'string' && data.queryStringObject.phone.trim().length == 10 ? data.queryStringObject.phone.trim() : false;

    // Error if phone number is invalid
    if(phone){
        // Get the token from the headers
        var token = typeof(data.headers.token) == 'string' ? data.headers.token : false
        //Verify that the given token is valid for the phone number
        handlers._tokens.verifyToken(token, phone, function(tokenIsValid){
            if(tokenIsValid){
                // Lookup the user
                _data.read('users', phone, function(err, userData){
                    if(!err && userData){

                        // Delete the user object
                        _data.delete('users', phone, function(err){
                            if(!err){
                                var checks = typeof(userData.checks) == 'object' && responsePayload.checks instanceof Array && userData.checks !== undefined ? userData.checks : []
                                if(checks.length > 0){
                                    // Delete the checks associated with the user
                                    var checksDeleted = 0;
                                    var deletionErrors = false;
                                    // Loop through the userData.checks
                                    userData.checks.forEach(checkId => {
                                        _data.delete('checks', checkId, function(err){
                                            if(err){
                                                deletionErrors = true;
                                            }
                                            checksDeleted++
                                            if(checksDeleted == userData.checks.length){
                                                if(!deletionErrors){
                                                    callback(204)
                                                } else {
                                                    callback(500, {'Error': 'Errors encountered while attempting deletion of checks'})
                                                }
                                            }
                                        })
                                    });
                                } else {
                                    callback(204)
                                }
                            } else {
                                console.log(err);
                                callback(500, {'Error': 'Could not delete the user.'})
                            }
                        })
                    } else {
                        callback(400, {'Error': 'The specified user does not exist'})
                    }
                })
            } else {
                callback(403, {'Error': 'Missing required token in the header, or token is invalid'})
            }
        })
    } else {
        callback(400, {'Error': "Missing required field"})
    }
    
}


// Tokens handler
handlers.tokens = function(data, callback){
    var acceptableMethods = ['post', 'get', 'put', 'delete'];
    if(acceptableMethods.indexOf(data.method) > -1){
        handlers._tokens[data.method](data, callback);
    } else {
        callback(405);
    }
};

// Container for all the Tokens submethods
handlers._tokens = {}

// Tokens - post
// Required fields: phone, password
// Optional fields: none
handlers._tokens.post = function(data, callback){
    // Check that all required fields are filled out
    var phone = typeof(data.payload.phone) == 'string' && data.payload.phone.trim().length == 10 ? data.payload.phone.trim() : false
    var password = typeof(data.payload.password) == 'string' && data.payload.password.trim().length >= 8 ? data.payload.password.trim() : false

    if(phone && password){
        // Lookup the user who matches that phone number
        _data.read('users', phone, function(err, userData){
            if(!err && userData){
                // Hash the sent password, and compare it to the password stored in the user object
                var hashedPassword = helpers.hash(password)
                if(hashedPassword == userData.hashedPassword){
                    // If valid, create a new token with a random name. Set expiration date 1 hour in the future.
                    var tokenId = helpers.createRandomString(20);
                    var expires = Date.now() + 1000*60*60;
                    var tokenObject = {
                        phone,
                        "id": tokenId,
                        expires
                    };

                    // Store the token
                    _data.create('tokens', tokenId, tokenObject, function(err){
                        if(!err){
                            callback(201, tokenObject);
                        } else {
                            callback(500, {'Error': 'Could not create the new token.'})
                        }
                    })
                } else {
                    callback(400, {'Error': 'Invalid password for the specified user.'})
                }
            } else {
                callback(400, {'Error': 'Could not find the specified user.'})
            }
        })

    } else {
        callback(400, {'Error': "Missing required fields"})
    }
}

// Tokens - get
// Required data: id
// Optional data: none
handlers._tokens.get = function(data, callback){
    // Check if the sent id is valid
    var id = typeof(data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 20 ? data.queryStringObject.id.trim() : false

    if(id){
        // Lookup the token
        _data.read('tokens', id, function(err, tokenData){
            if(!err && tokenData){
                callback(200, tokenData)
            } else {
                callback(404);
            }
        })
    } else {
        callback(400, {'Error': 'Missing required fields'})
    }
}

// Tokens - put
// Required data: id, extend
// Optional data: none
handlers._tokens.put = function(data, callback){
    // Check if the sent id is valid
    var id = typeof(data.payload.id) == 'string' && data.payload.id.trim().length == 20 ? data.payload.id.trim() : false
    var extend = typeof(data.payload.extend) == 'boolean' && data.payload.extend ? true : false
    if(id && extend){
        //Lookup the token
        _data.read('tokens', id, function(err, tokenData){
            if(!err && tokenData){
                // Check if the token is already expired
                if(tokenData.expires > Date.now()){
                    // Extend the expiration time by 1 hr
                    tokenData.expires += 1000*60*60
                
                    // Update the token data
                    _data.update('tokens', id, tokenData, function(err){
                        if(!err){
                            callback(204, tokenData);
                        } else {
                            console.log(err);
                            callback(500, {'Error': 'Token could not be updated'})
                        }
                    })
                } else {
                    callback(400, {'Error': 'Token already expired'})
                }
            } else {
                callback(400, {'Error': 'Could not find specified token.'});
            }
        })
    } else {
        callback(400, {'Error': 'Missing required fields.'})
    }
}

// Tokens - delete
handlers._tokens.delete = function(data, callback){
    // Check if the sent id is valid
    var id = typeof(data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 20 ? data.queryStringObject.id.trim() : false
    if(id){
        // Lookup the token
        _data.read('tokens', id, function(err, tokenData){
            if(!err && tokenData){
                _data.delete('tokens', id, function(err){
                    if(!err){
                        callback(204);
                    } else {
                        console.log(err);
                        callback(500, {'Error': 'Could not delete the specified token'})
                    }
                })
            } else {
                callback(400, {'Error': 'Could not find specified token.'})
            }
        })
    } else {
        callback(400, {'Error': 'Missing required fields'})
    }
}



// Verify if a given token is currently valid for a given user
handlers._tokens.verifyToken = function(id, phone, callback) {
    // Lookup the token
    _data.read('tokens', id, function(err, tokenData){
        if(!err && tokenData){
            // Check that the token is for the given user and has not expired
            if(tokenData.phone == phone && tokenData.expires > Date.now()){
                callback(true);
            } else {
                callback(false);
            }
        } else {
            callback(false)
        }
    })
}



// Checks handler
handlers.checks = function(data, callback){
    var acceptableMethods = ['post', 'get', 'put', 'delete'];
    if(acceptableMethods.indexOf(data.method) > -1){
        handlers._checks[data.method](data, callback);
    } else {
        callback(405);
    }
};

// Container for all the Tokens submethods
handlers._checks = {}

// Checks - post
// Required data: protocol, url, method, successCodes, timeoutSeconds
// Optional data: none
handlers._checks.post = function(data,callback){
    // Validate required fields
    var protocol = typeof(data.payload.protocol) == 'string' && ['https', 'http'].indexOf(data.payload.protocol) > -1 ? data.payload.protocol : false
    var url = typeof(data.payload.url) == 'string' && data.payload.url.trim().length > 0 ? data.payload.url.trim() : false
    var method = typeof(data.payload.method) == 'string' && ['post', 'get', 'put', 'delete'].indexOf(data.payload.method) > -1 ? data.payload.method : false
    var successCodes = typeof(data.payload.successCodes) == 'object' && data.payload.successCodes instanceof Array ? data.payload.successCodes : false
    var timeoutSeconds = typeof(data.payload.timeoutSeconds) == 'number' && data.payload.timeoutSeconds % 1 == 0 && data.payload.timeoutSeconds >= 1 && data.payload.timeoutSeconds <= 5 ? data.payload.timeoutSeconds : false

    if(protocol && url && method && successCodes && timeoutSeconds){
        // Get the token from the headers
        var token = typeof(data.headers.token) == 'string' ? data.headers.token : false
        
        // Lookup the user by reading the token
        _data.read('tokens', token, function(err, tokenData){
            if(!err && tokenData){
                var userPhone = tokenData.phone
                // Lookup the user
                _data.read('users', userPhone, function(err, userData){
                    if(!err && userData){
                        var userChecks = typeof(userData.checks) == 'object' && userData.checks instanceof Array ? userData.checks : []
                        // Verify that the user has less than the number of max-checks-per-user
                        if(userChecks.length < config.maxChecks){
                            var checkId = helpers.createRandomString(20);

                            // Create the check object, and include the user's phone
                            var checkObject = {
                                'id': checkId,
                                'phone': userPhone,
                                protocol,
                                url,
                                method,
                                successCodes,
                                timeoutSeconds
                            }

                            // Save the object
                            _data.create('checks', checkId, checkObject, function(err) {
                                if(!err){
                                    // Add the checkid to user's object
                                    userData.checks = userChecks;
                                    userData.checks.push(checkId);

                                    // Save the new user data
                                    _data.update('users', userPhone, userData, function(err){
                                        if(!err){
                                            // Return the data about the new check
                                            callback(201, checkObject);
                                        } else {
                                            callback(500, {'Error': 'Could not update the user with the new check'})
                                        }
                                    });
                                } else {
                                    callback(500, {'Error': 'Could not create the new check'})
                                }
                            })
                        } else {
                            callback(400, {'Error': 'The user already has the maximum number of checks ('+config.maxChecks+')'});
                        }
                    } else {
                        callback(403);
                    }
                })
            } else {
                callback(403);
            }
        })
    } else {
        callback(400, {'Error': 'Missing required inputs or inputs are invalid'})
    }
}

// Checks - get
// Required fields: id
// Optional fields: none
handlers._checks.get = function(data,callback){
    // Check that the id is valid
    var id = typeof(data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 20 ? data.queryStringObject.id.trim() : false
    if(id){

        // Lookup the check
        _data.read('checks', id, function(err, checkData){
            if(!err && checkData){
                // Get the token from the headers
                var token = typeof(data.headers.token) == 'string' ? data.headers.token : false
                //Verify that the given token is valid for the user who created the check
                handlers._tokens.verifyToken(token, checkData.phone, function(tokenIsValid){
                    if(tokenIsValid){
                        // Return the check data
                        callback(200, checkData);
                    } else {
                        callback(403, {'Error': 'Missing required token in the header, or token is invalid'})
                    }
                })
            } else {
                callback(404);
            }
        })
    } else {
        callback(400, {'Error': 'Missing required field'})
    }
}

// Checks - put
// Required field : id
// Optional fields : protocol, url, method, successCodes, timeoutSeconds
handlers._checks.put = function(data,callback){
    // Check for the required field
    var id = typeof(data.payload.id) == 'string' && data.payload.id.trim().length == 20 ? data.payload.id.trim() : false
    console.log(id)

    // Check for the Optional fields
    var protocol = typeof(data.payload.protocol) == 'string' && ['https', 'http'].indexOf(data.payload.protocol) > -1 ? data.payload.protocol : false
    var url = typeof(data.payload.url) == 'string' && data.payload.url.trim().length > 0 ? data.payload.url.trim() : false
    var method = typeof(data.payload.method) == 'string' && ['post', 'get', 'put', 'delete'].indexOf(data.payload.method) > -1 ? data.payload.method : false
    var successCodes = typeof(data.payload.successCodes) == 'object' && data.payload.successCodes instanceof Array ? data.payload.successCodes : false
    var timeoutSeconds = typeof(data.payload.timeoutSeconds) == 'number' && data.payload.timeoutSeconds % 1 == 0 && data.payload.timeoutSeconds >= 1 && data.payload.timeoutSeconds <= 5 ? data.payload.timeoutSeconds : false

    // Check to make sure the id is valid
    if(id){
        // Check to make sure at least one optional field has been sent
        if(protocol || url || method || successCodes || timeoutSeconds){
            // Lookup the check
            _data.read('checks', id, function(err, checkData){
                if(!err && checkData){
                    // Get the token from the headers
                    var token = typeof(data.headers.token) == 'string' ? data.headers.token : false
                    // Verify the given token is valid and belongs to the user who created the check
                    handlers._tokens.verifyToken(token, checkData.phone, function(tokenIsValid){
                        if(tokenIsValid){
                            // Update the check where necessary
                            if(protocol){
                                checkData.protocol = protocol
                            }
                            if(url){
                                checkData.url = url
                            }
                            if(method){
                                checkData.method = method
                            }
                            if(successCodes){
                                checkData.successCodes = successCodes
                            }
                            if(timeoutSeconds){
                                checkData.timeoutSeconds = timeoutSeconds
                            }

                            // Store the new updates
                            _data.update('checks', id, checkData, function(err){
                                if(!err){
                                    callback(204)
                                } else {
                                    callback(500, {'Error': 'Could not update the specified check.'})
                                }
                            })
                        } else {
                            callback(403, {'Error': 'Missing required token in the header, or token is invalid'})
                        }
                    })
                } else {
                    callback(400, {'Error': 'Could not find the specified check'})
                }
            })
        } else {
            callback(400, {'Error': 'Missing fields to update'})
        }
    } else {
        callback(400, {'Error': 'Missing required fields'});
    }
}

// Checks - delete
// Required field: id
// Optional field: none
handlers._checks.delete = function(data,callback){
    // Check for the required field
    var id = typeof(data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 20 ? data.queryStringObject.id.trim() : false

    if(id){
        // Lookup the check
        _data.read('checks', id, function(err, checkData){
            if(!err && checkData){
                // Get the token from the headers
                var token = typeof(data.headers.token) == 'string' ? data.headers.token : false
                // Verify the given token is valid and belongs to the user who created the check
                handlers._tokens.verifyToken(token, checkData.phone, function(tokenIsValid){
                    if(tokenIsValid){
                        // Delete the check
                        _data.delete('checks', id, function(err){
                            if(!err){
                                // Lookup the user
                                _data.read('users', checkData.phone, function(err, userData){
                                    if(!err && userData){
                                        // Remove the check id from the userData
                                        if(userData.checks.indexOf(id) > -1){
                                            userData.checks = userData.checks.filter(check => check != id)

                                            // Save the new user data
                                            _data.update('users', checkData.phone, userData, function(err){
                                                if(!err){
                                                    callback(204)
                                                } else {
                                                    callback(500, {'Error': 'Could not remove check ID from the user data'})
                                                }
                                            })
                                        } else {
                                            callback(400, {'Error': "The check id could not be found in user data"})
                                        }
                                    } else {
                                        callback(400, {'Error': 'Could not find the user who created this check'})
                                    }
                                })
                            } else {
                                callback(500, {'Error': 'Could not delete the specified check'})
                            }
                        })
                    } else {
                        callback(403, {'Error': 'Missing required token in the header, or token is invalid'})
                    }
                })
            } else {
                callback(400, {'Error': 'Could not find the specified check'})
            }
        })
    } else {
        callback(400, {'Error': 'Missing required field'})
    }
}




// Ping handler
handlers.ping = function(data, callback){
  // Callback an HTTP status code, and a payload object
  callback(200);

};

// Not found handler
handlers.notFound = function(data, callback){
  callback(404);
};

// Export the module
module.exports = handlers;