import React, { Component } from "react";
import Contact from "./Contact";
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
        <div className="device-container">
          <form className="pt-4">
            <input
              type="text"
              value={search}
              onChange={this.handleSearchChange}
              className="input"
            />
            {/* <button className="search">search</button> */}
            <div className="checkbox-container mt-2">
              <label>
                <input
                  type="checkbox"
                  checked={female}
                  name="female"
                  onChange={this.handleGender}
                />
                female
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  checked={male}
                  name="male"
                  onChange={this.handleGender}
                />
                male
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  checked={unknown}
                  name="unknown"
                  onChange={this.handleGender}
                />
                unknown
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
                (contact.gender
                  ? (female && contact.gender === "female") ||
                    (male && contact.gender === "male")
                  : unknown)
            )
            .map(contact => (
              <Contact key={contact.lastName} contact={contact} />
            ))}
        </div>
      </div>
    );
  }
}

export default Contacts;