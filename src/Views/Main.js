import React ,  {Component} from  'react'

const Users = props =>{
    if(props.usersData === null){
        return(
            <h4>Nothing to show right now...</h4>
        );
    }
    const elements = props.usersData.map( (row, index) =>{
        
        if(row.id.name === null || row.id.name === ""){
            row.id.name = "N/A"
        }
        if(row.id.value === null){
            row.id.value = "N/A"
        }
        return(
            <div key={index} className="users">
                <div className="row">
                    <div className="col">
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={`${row.picture.large}`} className="card-img" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{row.name.title} {row.name.first} {row.name.last} <small className="text-muted">{row.gender} - from: {row.nat}</small></h5>
                                        <hr/>
                                        
                                        <div className="row">
                                            <div className="col">
                                                <p className="cart-text">Email: <small className="text-muted">{row.email}</small></p>
                                            </div>
                                            <div className="col">
                                                <p className="card-text address">Address: <small className="text-muted">{row.location.street}, {row.location.city}. {row.location.state}. Zip Code: {row.location.postcode}</small></p>
                                            </div>
                                        </div>
                                        <div className="row">
                                                <div className="col">
                                                    <p className="cart-text">Username: <small className="text-muted">{row.login.username}</small></p>
                                                </div>
                                                <div className="col">
                                                    <p className="card-text">Password: <small className="text-muted">{row.login.password}</small></p>
                                                </div>
                                            </div>
                                        <div className="row">
                                            <div className="col">
                                                <p className="card-text">Phone: <small className="text-muted">{row.phone}</small></p>
                                            </div>
                                            <div className="col">
                                                <p className="card-text">Age: <small className="text-muted">{row.dob.age}</small></p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <p className="card-text">Cel: <small className="text-muted">{row.cell}</small></p>
                                            </div>
                                            <div className="col">
                                                <p className="card-text">Birth Date: <small className="text-muted date">{row.dob.date}</small></p>
                                            </div>
                                        </div>
                                        <p className="card-text"><small className="text-muted date">Registered since: {row.registered.date}</small></p>
                                        <p>
                                            <button className="btn btn-primary" type="button" data-toggle="collapse" data-target={`#moreInfo${index}`} aria-expanded="false" aria-controls={`moreInfo${index}`}>
                                                More Info:
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="collapse" id={`moreInfo${index}`}>
                                <div className="card card-body">
                                    <div className="row">
                                        <div className="col">
                                            <h5>Login:</h5>
                                            <ul>
                                                <li>uuid: <small className="text-muted">{row.login.uuid}</small></li>
                                                <li>salt: <small className="text-muted">{row.login.salt}</small></li>
                                                <li>md5: <small className="text-muted">{row.login.md5}</small></li>
                                                <li>sha1: <small className="text-muted">{row.login.sha1}</small></li>
                                                <li>sha256: <small className="text-muted">{row.login.sha256}</small></li>
                                            </ul>
                                        </div>
                                        <div className="col">
                                            <h5>ID</h5>
                                            <ul>
                                                <li>name: <small className="text-muted">{row.id.name}</small></li>
                                                <li>value: <small className="text-muted">{row.id.value}</small></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return(
        <div>{elements}</div>
    );
}

class Main extends Component{

    constructor(props){
        super(props);
        this.initialState = {
            usersToSearch: 0,
            usersData:props.usersData
        };
    
        this.state = this.initialState;
    }

    updateNumberUsersSearch = (event) => {
        let state = this.state;
        state.usersToSearch = event.target.value;
        this.setState(state);
    }

    render(){
        return(
            <div className="container">
				<div className="row">
					<div className="col">
						<div className="form-inline">
							<p className=" h6 lead p-3">Enter number of users to retrieve: </p>
							<input type="number" className="form-control mb-2 mr-sm-2" id="numberUsers" placeholder="number of users" onChange={this.updateNumberUsersSearch}/>							
							<button type="submit" className="btn btn-primary mb-2" onClick={()=>this.props.getUsers(this.state.usersToSearch)}>Retrieve</button>
                        </div>
					</div>
				</div>
				<hr/>
                <Users usersData={this.props.usersData}></Users>
			</div>
        );
    }
}

export default  Main