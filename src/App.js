import React, {PureComponent} from 'react';
import './App.css';
import Step from "./Step";
import CardForm from "./CardForm";
import PersonalForm from "./PersonalForm";

const stepTitles = ["Personal information", "Card information", "Finish"];

class App extends PureComponent {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    isTimeOver: false
  };

  handleTabClick = (step) => {
    return this.setState({
      step
    });
  }

  handleChangeForm = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  handleClickNextForm = e => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  handleChangeTimeOver = value => {
    debugger
    this.setState({
      isTimeOver: value
    });
  };

  isFormCommitable() {
    const { step, firstName, lastName, email, cardNumber } = this.state;
    switch (step) {
      case 1:
        if (
          firstName !== "" &&
          lastName !== "" &&
          email !== "" &&
          email.includes("@")
        ) {
          return true;
        } else if (
          firstName === "" &&
          lastName !== "" &&
          email !== "" &&
          email.includes("@")
        ) {
          return false;
        } else {
          return false;
        }

      case 2:
        return cardNumber.length === 16;
      case 3:
        return false;
    }
 }

  renderForm = () => {
    const { step, firstName, lastName, email, cardNumber } = this.state;
    switch (step) {
      case 1:
        return (
          <PersonalForm
            firstName={firstName}
            lastName={lastName}
            email={email}
            onChangeForm={this.handleChangeForm}
          />
        );

      case 2:
        return (
          <CardForm
            cardNumber={cardNumber}
            onChangeForm={this.handleChangeForm}
            onChangeTimeOver={this.handleChangeTimeOver}
          />
        );

      case 3:
        return "Поздравляем!";
    }
  };

  renderSteps = () => {
      const stepNumber = this.state.step;
      return stepTitles.map((step, i) => {
        const currentStep = i + 1;
        if (stepNumber === 1) {
          return (
            <Step
              key={step}
              onClick={this.handleTabClick}
              isSelected={currentStep === 1}
              number={currentStep}
              isClickable={false}
            >
              {step}
            </Step>
          );
        } else if (stepNumber === 2) {
          return (
            <Step
              key={step}
              onClick={this.handleTabClick}
              isSelected={currentStep === 2}
              number={currentStep}
              isClickable={currentStep === 1}
            >
              {step}
            </Step>
          );
        }
        return (
          <Step
            key={step}
            onClick={this.handleTabClick}
            isSelected={currentStep === stepNumber}
            number={currentStep}
            isClickable={currentStep !== stepNumber}
          >
            {step}
          </Step>
        );
      });
    };

  render() {
    return (
      <div className="container">
        <div className="tab-panel">{this.renderSteps()}</div>
        <div className="form-content">{this.renderForm()}</div>
        <div className="button-panel">
          <button
            className="button-next"
            onClick={this.handleClickNextForm}
            disabled={!this.isFormCommitable() || this.state.isTimeOver}
          >
            next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
