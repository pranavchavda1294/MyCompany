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
// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// Custom Actions


// START IMPORT ACTIONS
import ClientActions from "../redux/actions/ClientActions";
import EmployeActions from "../redux/actions/EmployeActions";
import AdminActions from "../redux/actions/AdminActions";

// END IMPORT ACTIONS

/** APIs

* actionsClient.create
*	@description CRUD ACTION create
*
* actionsClient.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsClient.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsEmploye.findByproject
*	@description CRUD ACTION findByproject
*	@param Objectid key - Id of model to search for
*
* actionsAdmin.findBypayment
*	@description CRUD ACTION findBypayment
*	@param Objectid key - Id of model to search for
*
* actionsEmploye.list
*	@description CRUD ACTION list
*
* actionsAdmin.list
*	@description CRUD ACTION list
*

**/

class ClientEdit extends Component {
  // Init client
  constructor(props) {
    super(props);
    this.state = {
      client: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsClient.loadClient(this.props.match.params.id);
      this.props.actionsAdmin.findBypayment(this.props.match.params.id);
      this.props.actionsEmploye.findByproject(this.props.match.params.id);
    }
    
    this.props.actionsAdmin.loadAdminList();
    this.props.actionsEmploye.loadEmployeList();
  }

  // Insert props client in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      client: props.client
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.client._id) {
      this.props.actionsClient.saveClient(this.state.client).then(data => {
        this.props.history.push("/clients/");
      });
    } else {
      this.props.actionsClient.createClient(this.state.client).then(data => {
        this.props.history.push("/clients/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Client Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="name"
            label="Name"
            value={this.state.client.name || ""}
            onChange={Utils.handleChange.bind(this, "client")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.client.name && this.state.client.name === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="projectname"
            label="Projectname"
            value={this.state.client.projectname || ""}
            onChange={Utils.handleChange.bind(this, "client")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.client.projectname && this.state.client.projectname === ""
              ? { error: true }
              : {})}
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m payment with Admin */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="payment">
              Payment
            </InputLabel>
            <Select
              value={this.state.client.payment || ""}
              onChange={Utils.handleChangeSelect.bind(this, "client")}
              inputProps={{
                id: "payment",
                name: "payment"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listAdmin && this.props.listAdmin.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation 1:m project with Employe */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="project">
              Project
            </InputLabel>
            <Select
              value={this.state.client.project || ""}
              onChange={Utils.handleChangeSelect.bind(this, "client")}
              inputProps={{
                id: "project",
                name: "project"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listEmploye && this.props.listEmploye.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with Admin */}
          
          <h3>Admin</h3>
          {(!this.props.listAdmin || this.props.listAdmin.length === 0) && 
            <div>No Admin associated</div>
          }
          {this.props.listAdmin &&
            this.props.listAdmin.map((item, i) => {
              return (
                <Link to={"/admins/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with Employe */}
          
          <h3>Employe</h3>
          {(!this.props.listEmploye || this.props.listEmploye.length === 0) && 
            <div>No Employe associated</div>
          }
          {this.props.listEmploye &&
            this.props.listEmploye.map((item, i) => {
              return (
                <Link to={"/employes/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/clients/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsClient: bindActionCreators(ClientActions, dispatch),
    actionsEmploye: bindActionCreators(EmployeActions, dispatch),
    actionsAdmin: bindActionCreators(AdminActions, dispatch),
  };
};

// Validate types
ClientEdit.propTypes = { 
  actionsClient: PropTypes.object.isRequired,
  actionsEmploye: PropTypes.object.isRequired,
  actionsAdmin: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    client: state.ClientEditReducer.client,
    listAdmin: state.ClientEditReducer.listAdmin,
    listEmploye: state.ClientEditReducer.listEmploye,
    listAdmin: state.ClientEditReducer.listAdmin,
    listEmploye: state.ClientEditReducer.listEmploye
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientEdit);
