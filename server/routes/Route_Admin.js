var Object_Express  = require("express"); 
var Object_Router   = Object_Express.Router(); 
//Import the Admin model schema. 
var Model_Admin_    = require("../models/Model_Admin"); 
//These below are the routers. 
Object_Router.delete("/:model_admin_id", 
    function(_Object_Request, _Object_Respond){ 
    Model_Admin_.remove({ 
        _id: _Object_Request.params.model_admin_id 
    }, 
    function(_Object_Error, _Model_Admin){ 
        if(_Object_Error){ 
            _Object_Respond.send(_Object_Error); 
 
            //Confirmation log sent to server's terminal. 
            _Object_Respond.json 
                ({ message: "An admin was just successfully deleted." }); 
        } 
    }); 
}); 
Object_Router.get("/", function(_Object_Request, _Object_Respond){ 
    Model_Admin_.find(function(_Object_Error, _Model_Admin){ 
        if(_Object_Error){ 
            _Object_Respond.send(_Object_Error); 
        } 
        _Object_Respond.json(_Model_Admin); 
    }); 
}); 
Object_Router.get("/:model_admin_id", 
    function(_Object_Request, _Object_Respond){ 
        Model_Admin_.findById(_Object_Request.params.model_admin_id, 
        function(_Object_Error, _Model_Admin){
            if(_Object_Error){ 
                _Object_Respond.send(_Object_Error); 
            } 
            _Object_Respond.json(_Model_Admin); 
        }); 
    });
/* PENDING: I do not think these codes below is necessary anymore.
Here we create new instance of admin.
Object_Router.post("", function(_Object_Request, _Object_Respond){ 
    var Model_Admin_Temp = new Model_Admin_(); 
    Model_Admin_Temp.Admin_Bool_Available   = _Object_Request.body.Admin_Bool_Available; 
    Model_Admin_Temp.Admin_String_Email     = _Object_Request.body.Admin_String_Email; 
    Model_Admin_Temp.Admin_String_Location  = _Object_Request.body.Admin_String_Location; 
    Model_Admin_Temp.Admin_String_Name      = _Object_Request.body.Admin_String_Name; 
    Model_Admin_Temp.Admin_String_Password  = _Object_Request.body.Admin_String_Password; 
    Model_Admin_Temp.save(function(_Object_Error){ 
        if(_Object_Error){ 
            _Object_Respond.send(_Object_Error); 
            console.log("Error happened!"); 
        } 
 
        _Object_Respond.json({ message: "Admin successfully created." }); 
    }); 
    console.log("An admin added into the database."); 
});*/
//Update an admin. 
Object_Router.put("/:/:speaker_id", function(_Object_Request, _Object_Respond){ 
    Model_Admin_.findById(req.params.model_admin_id, 
        function(_Object_Error, _Model_Speaker){ 
        if(_Object_Error){ 
            _Object_Respond.send(_Object_Error); 
        } 
 
        Model_Admin_Temp.Admin_Bool_Available   = _Object_Request.body.Admin_Bool_Available; 
        Model_Admin_Temp.Admin_String_Email     = _Object_Request.body.Admin_String_Email; 
        Model_Admin_Temp.Admin_String_Location  = _Object_Request.body.Admin_String_Location; 
        Model_Admin_Temp.Admin_String_Name      = _Object_Request.body.Admin_String_Name; 
        Model_Admin_Temp.Admin_String_Password  = _Object_Request.body.Admin_String_Password; 
 
        _Model_Speaker.save(function(_Object_Error){ 
            if(_Object_Error){ 
                _Object_Respond.send(_Object_Error); 
            } 
 
            _Object_Respond.json({ message: "Admin successfully updated!" }); 
        }); 
    }); 
}); 
//Exports all the routes to Object_Router variable. 
module.exports = Object_Router;