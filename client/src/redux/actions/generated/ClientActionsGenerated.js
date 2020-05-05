/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5eb1455f82f82d390e7843ec
*
* You will get 10% discount for each one of your friends
* 
*/
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN ClientActionsGenerated.js PLEASE EDIT ../ClientActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import ClientApi from "../../../api/ClientApi";

let actionsFunction = {

  //CRUD METHODS

  // Create client
  createClient: function(client) {
    return function(dispatch) {
      return ClientApi
        .createClient(client)
        .then(client => {
          dispatch(actionsFunction.createClientSuccess(client));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createClientSuccess: function(client) {
    return { type: types.CREATE_CLIENT_SUCCESS, payload: client };
  },


  // Delete client
  deleteClient: function(id) {
    return function(dispatch) {
      return ClientApi
        .deleteClient(id)
        .then(client => {
          dispatch(actionsFunction.deleteClientSuccess(client));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteClientSuccess: function(client) {
    return { type: types.DELETE_CLIENT_SUCCESS, payload: client };
  },


  // Find by payment
  findBypayment: function(key) {
    return function(dispatch) {
      return ClientApi
        .findBypayment(key)
        .then(item => {
          dispatch(actionsFunction.findBypaymentSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBypaymentSuccess: function(item) {
    return { type: types.FINDBYPAYMENT_CLIENT_SUCCESS, payload: item };
  },


  // Find by project
  findByproject: function(key) {
    return function(dispatch) {
      return ClientApi
        .findByproject(key)
        .then(item => {
          dispatch(actionsFunction.findByprojectSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findByprojectSuccess: function(item) {
    return { type: types.FINDBYPROJECT_CLIENT_SUCCESS, payload: item };
  },


  // Get client
  loadClient: function(id) {
    return function(dispatch) {
      return ClientApi
        .getOneClient(id)
        .then(client => {
          dispatch(actionsFunction.loadClientSuccess(client));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadClientSuccess: function(client) {
    return { type: types.GET_CLIENT_SUCCESS, payload: client };
  },

  // Load  list
  loadClientList: function() {
    return function(dispatch) {
      return ClientApi
        .getClientList()
        .then(list => {
          dispatch(actionsFunction.loadClientListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadClientListSuccess: function(list) {
    return { type: types.LIST_CLIENT_SUCCESS, payload: list };
  },

	
  // Save client
  saveClient: function(client) {
    return function(dispatch) {
      return ClientApi
        .saveClient(client)
        .then(client => {
          dispatch(actionsFunction.saveClientSuccess(client));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveClientSuccess: function(client) {
    return { type: types.UPDATE_CLIENT_SUCCESS, payload: client };
  },


};

export default actionsFunction;
