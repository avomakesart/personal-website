import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import PublicRoute from './PublicRoute'

// UI components
import Navbar from '../components/ui/Navbar'
import HomeScreen from '../components/ui/HomeSreen'
import AboutScreen from '../components/ui/About/AboutScreen'
import Projects from '../components/ui/Projects/Projects'
import Footer from '../components/ui/Footer'
import Project from '../components/ui/Projects/Project'
import PersonalProject from '../components/ui/Projects/PersonalProject'
import BoardUser from '../components/ui/Boards/BoardUser'
import BoardModerator from '../components/ui/Boards/BoardModerator'

// Admin components
import AdminScreen from '../components/admin/AdminScreen'
import AddProject from '../components/admin/Projects/AddProject'
import EditProject from '../components/admin/Projects/EditProject'
import EditPersonalProject from '../components/admin/Projects/EditPersonalProject'
import AddPersonalProject from '../components/admin/Projects/AddPersonalProject'

// Auth components
import LoginScreen from '../components/auth/LoginScreen'
import RegisterScreen from '../components/auth/RegisterScreen'
import Profile from '../components/auth/Profile'
import ProjectList from '../components/admin/Projects/ProjectList'

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <>
        <Switch>
          <PublicRoute exact path="/" component={HomeScreen} />
          <PublicRoute exact path="/projects" component={Projects} />
          <PublicRoute exact path="/projects/:id" component={Project} />
          <PublicRoute
            exact
            path="/personal_projects/:id"
            component={PersonalProject}
          />

          <PublicRoute exact path="/myself" component={AboutScreen} />
          <PublicRoute exact path="/admin/login" component={LoginScreen} />
          <PublicRoute
            exact
            path="/admin/register"
            component={RegisterScreen}
          />
          <PublicRoute exact path="/profile" component={Profile} />
          <PublicRoute exact path="/user-board" component={BoardUser} />
          <PublicRoute exact path="/mod-board" component={BoardModerator} />
          <PublicRoute exact path="/admin" component={AdminScreen} />
          <PublicRoute
            exact
            path="/admin/project-list"
            component={ProjectList}
          />
          <PublicRoute exact path="/admin/add-project" component={AddProject} />
          <PublicRoute
            exact
            path="/admin/add-personal-project"
            component={AddPersonalProject}
          />
          <PublicRoute
            exact
            path="/admin/edit-project/:id"
            component={EditProject}
          />
          <PublicRoute
            exact
            path="/admin/edit-personal-project/:id"
            component={EditPersonalProject}
          />
        </Switch>
      </>
      <Footer />
    </Router>
  )
}
