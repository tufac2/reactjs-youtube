import React from 'react'
import axios from 'axios'
import styled from 'styled-components'


const SearchCustom = styled.div`
  text-align: center;

  .form .input{
    width: 100%;
  }
`

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = { term: '' }
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.onFormSubmit(this.state.term)
  }
  
  onInputChange = (e) => {
    this.setState( { term: e.target.value })
  }

  render() {
    return (
      <SearchCustom>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui right icon input loading">
            <input
              type="text"
              placeholder="Search..."
              value={ this.state.term }
              onChange={this.onInputChange}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </SearchCustom>
    )
  }
}