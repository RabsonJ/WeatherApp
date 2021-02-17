import React, { Component } from 'react';

class SearchBar extends Component {
   state = { term: '' }

   handleSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmit(this.state.term);
   }
   
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						className="form-control"
						placeholder="Enter city name..."
                  style={{ fontSize: 'inherit', fontFamily: 'inherit' }}
                  value={this.state.term}
                  onChange={(e) => this.setState({term: e.target.value})}
					/>
					<small className="form-text text-white">
						Press Return/Enter to search
					</small>
				</form>
			</div>
		);
	}
}

export default SearchBar;
