import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { ConnectedRouter } from 'react-router-redux'

// components
import MenuIcon from './common/MenuIcon'
import Sidebar from './Sidebar'
import Identity from './Identity'
import PrivateRoute from './PrivateRoute'
import Searchbar from './Searchbar'

// style
import styles from './App.scss';

// Routes
import SignIn from '../routes/Auth/SignIn';
import Dashboard from '../routes/Dashboard';
import Audits from '../routes/Audits';
import Audit from '../routes/Audit';


class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            sidebarOpened: false, // sidebar is closed until toggled
        }

        // close sidebar on location updates
        this.props.history.listen( location => {
            this.setState(prevState => ({
                sidebarOpened: false
            }));
        });

        // binds
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }


    /**
     * Toggle side bar
     */
    toggleSidebar(){
        this.setState(prevState => ({
            sidebarOpened: !prevState.sidebarOpened
        }));
    }

    render(){
        return (
            <ConnectedRouter history={this.props.history}>
                <div className={ styles.app }>
                    <header>
                        <div>
                            <MenuIcon
                                onClick={this.toggleSidebar}
                                active={this.state.sidebarOpened}
                            />
                        </div>
                        <h1> LICENSEE LOGO </h1>
                        <div className={styles.fillHeader}>
                            { this.props.isAuthenticated &&
                            <Searchbar/>
                            }
                        </div>

                        { this.props.isAuthenticated &&
                            <Identity/>
                        }

                        <NavLink exact to="/help"> <i className={"far fa-question-circle " + styles.helpIcon}></i></NavLink>

                        { this.props.isAuthenticated &&
                            <div onClick={this.props.singout}>Sign out</div>
                        }

                    </header>

                    <div className={styles.sidebar}>
                        <Sidebar opened={this.state.sidebarOpened}/>
                    </div>

                    <main>

                        <Switch>
                            <Route exact path="/" component={ SignIn }/>
                            <PrivateRoute exact path="/dashboard" component={ Dashboard }/>
                            <PrivateRoute exact path="/audits" component={ Audits }/>
                            <PrivateRoute exact path="/audit/:id" component={ Audit }/>
                        </Switch>
                    </main>
                </div>
            </ConnectedRouter>
        )
    }
}



export default App;