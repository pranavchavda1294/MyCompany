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
 *  TO CUSTOMIZE FUNCTIONS IN EmployeActionsGenerated.js PLEASE EDIT ../EmployeActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import EmployeApi from "../../../api/EmployeApi";

let actionsFunction = {

  //CRUD METHODS

  // Create employe
  createEmploye: function(employe) {
    return function(dispatch) {
      return EmployeApi
        .createEmploye(employe)
        .then(employe => {
          dispatch(actionsFunction.createEmployeSuccess(employe));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createEmployeSuccess: function(employe) {
    return { type: types.CREATE_EMPLOYE_SUCCESS, payload: employe };
  },


  // Delete employe
  deleteEmploye: function(id) {
    return function(dispatch) {
      return EmployeApi
        .deleteEmploye(id)
        .then(employe => {
          dispatch(actionsFunction.deleteEmployeSuccess(employe));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteEmployeSuccess: function(employe) {
    return { type: types.DELETE_EMPLOYE_SUCCESS, payload: employe };
  },


  // Find by admin
  findByadmin: function(key) {
    return function(dispatch) {
      return EmployeApi
        .findByadmin(key)
        .then(item => {
          dispatch(actionsFunction.findByadminSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findByadminSuccess: function(item) {
    return { type: types.FINDBYADMIN_EMPLOYE_SUCCESS, payload: item };
  },


  // Find by project
  findByproject: function(key) {
    return function(dispatch) {
      return EmployeApi
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
    return { type: types.FINDBYPROJECT_EMPLOYE_SUCCESS, payload: item };
  },


  // Get employe
  loadEmploye: function(id) {
    return function(dispatch) {
      return EmployeApi
        .getOneEmploye(id)
        .then(employe => {
          dispatch(actionsFunction.loadEmployeSuccess(employe));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadEmployeSuccess: function(employe) {
    return { type: types.GET_EMPLOYE_SUCCESS, payload: employe };
  },

  // Load  list
  loadEmployeList: function() {
    return function(dispatch) {
      return EmployeApi
        .getEmployeList()
        .then(list => {
          dispatch(actionsFunction.loadEmployeListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadEmployeListSuccess: function(list) {
    return { type: types.LIST_EMPLOYE_SUCCESS, payload: list };
  },

	
  // Save employe
  saveEmploye: function(employe) {
    return function(dispatch) {
      return EmployeApi
        .saveEmploye(employe)
        .then(employe => {
          dispatch(actionsFunction.saveEmployeSuccess(employe));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveEmployeSuccess: function(employe) {
    return { type: types.UPDATE_EMPLOYE_SUCCESS, payload: employe };
  },


};

export default actionsFunction;
