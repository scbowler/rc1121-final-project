import React from 'react';
import Home from './pages/home';
import NotFound from './pages/not-found';
import { parseRoute } from './lib';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      route: parseRoute(location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: parseRoute(location.hash)
      });
    });
  }

  renderPage() {
    const { route } = this.state;

    if (route.path === '') {
      return <Home />;
    }

    return <NotFound />;
  }

  render() {
    return (
      <>
        <div className="container">
          {this.renderPage()}
        </div>
      </>
    );
  }
}
