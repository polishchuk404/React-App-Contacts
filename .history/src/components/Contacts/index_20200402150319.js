import React, { Component } from "react";
import Contact from "../Contact";
import "./Contacts.sass";

const contacts = [
  {
    firstName: "Барней",
    lastName: "Стинсовский",
    phone: "+380956319521",
    gender: "male"
  },
  {
    firstName: "Робин",
    lastName: "Щербатская",
    phone: "+380931460123",
    gender: "female"
  },
  {
    firstName: "Аномный",
    lastName: "Анонимус",
    phone: "+380666666666"
  },
  {
    firstName: "Лилия",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
  },
  {
    firstName: "Маршэн",
    lastName: "Эриксонян",
    phone: "+380739432123",
    gender: "male"
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбэс",
    phone: "+380956319521",
    gender: "male"
  }
];

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
          <div className="col-xl-3 col-md-4 col-sm-6 ml-auto mr-auto">
            <form className="form">
              <input type="text" value={search} onChange={this.handleSearchChange} className="input" />
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