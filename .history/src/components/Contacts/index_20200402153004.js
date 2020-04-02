import React, { Component } from "react";
import Contact from "../Contact";
import "./Contacts.sass";
import {contacts} from "../Contacts-list";

class Contacts extends Component {
  state = {
    contacts,
    search: "",
    male: true,
    female: true,
    unknown: true
  };

  filterByGender = () => {};

  handleSearchChange = e => {
    e.persist();
    this.setState(state => ({
      search: e.target.value
    }));
  };

  handleGender = e => {
    e.persist();
    this.setState(state => ({
      [e.target.name]: e.target.checked
    }));
  };

  render() {
    const { search, female, male, unknown } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 ml-auto mr-auto contact-container">
            <h1>Contacts</h1>
            <form className="form">
              <input type="text" value={search} onChange={this.handleSearchChange} className="input" placeholder="search..." />
              <div className="checkbox-container">
                  <label className="checkbox-label" for="female">female
                    <input type="checkbox" id="female" className="checkbox" onChange={this.handleGender} name="female" checked={female}/>
                    <span class="checkmark"></span>
                  </label>
                  <label className="checkbox-label" for="male">male
                    <input type="checkbox" id="male" className="checkbox" onChange={this.handleGender} name="male" checked={male}/>
                    <span class="checkmark"></span>
                  </label>
                  <label className="checkbox-label" for="unknown">unknown
                    <input type="checkbox" id="unknown" className="checkbox" onChange={this.handleGender} name="unknown" checked={unknown}/>
                    <span class="checkmark"></span>
                  </label>
              </div>
            </form>
            {contacts
              .filter(
                contact =>
                  (!search ||
                    contact.lastName.toLowerCase().includes(search) ||
                    contact.firstName.toLowerCase().includes(search) ||
                    contact.phone.includes(search)) &&
                    (contact.gender  ? (female && contact.gender === "female") ||
                      (male && contact.gender === "male")  : unknown)
              )
              .map(contact => (
                <Contact key={contact.lastName} contact={contact} />
              ))}
            </div>
        </div>
      </div>
    );
  }
}

export default Contacts;