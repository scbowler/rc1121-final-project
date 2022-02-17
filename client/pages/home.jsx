import React from 'react';
import Card from '../components/card';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: []
    };
  }

  componentDidMount() {
    fetch('/api/entries')
      .then(resp => resp.json())
      .then(entries => {
        this.setState({ entries });
      });
  }

  render() {
    const { entries } = this.state;

    return (
      <div className="pt-5">
        <h1>All Entries</h1>
        <div className="row">
          {
            entries.length
              ? entries.map(entry => (
                <Card
                  key={entry.entryId}
                  title={entry.title}
                  photoUrl={entry.photoUrl}
                  notes={entry.notes}
                />
              ))
              : <h3 className="text-center text-danger py-5">No Entries Available</h3>
          }
        </div>
      </div>
    );
  }
}
