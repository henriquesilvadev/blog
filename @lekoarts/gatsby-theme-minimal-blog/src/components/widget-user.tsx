/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react";
import axios from 'axios';
import Title from './title';
import bord from './bord-github';

interface Props {
  username: string;    
}

interface State {
  user: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    hireable: boolean;
    bio: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
  }  
}

export default class WidgetUser extends React.Component<Props, State> {
  
  state = {
    user: {
      login: '',
      id: 0,
      node_id: '',
      avatar_url: '',
      gravatar_id: '',
      url: '',
      html_url: '',
      followers_url: '',
      following_url: '',
      gists_url: '',
      starred_url: '',
      subscriptions_url: '',
      organizations_url: '',
      repos_url: '',
      events_url: '',
      received_events_url: '',
      type: '',
      site_admin: false,
      name: '',
      company: '',
      blog: '',
      location: '',
      email: '',
      hireable: false,
      bio: '',
      public_repos: 0,
      public_gists: 0,
      followers: 0,
      following: 0,
      created_at: '',
      updated_at: '',
    },
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.props.username}`)
      .then(res => {
        const user = res.data;
        this.setState({ user });
      }
    )
  }

  render() {  
    const { user } = this.state;
    return (
      <section>
        <Title text="GitHub" />      
        <section sx={{ mb: [5 , 4, 5], p: { fontSize: [1, 2, 3], mt: 2 },
          fontFamily: '-apple-system, Helvetica, Arial, sans-serif',
          padding: '2rem', border: '1px solid'}}>        
          <img src={ user.avatar_url } widht='100px' /><br /> 
          <h3> { user.name } </h3>
        </section>
        <main sx={{
          shapeRendering: 'crispEdges',
          textAlign: 'center',
          padding: '40px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          color: "#212121"
        }}>
          <rect sx={{ cursor: 'pointer' }}>
            <text sx={{fontSize: '10px', fill: "#767676" }} />
            <bord />
          </rect>
        </main>
      </section>
    )
  }
}