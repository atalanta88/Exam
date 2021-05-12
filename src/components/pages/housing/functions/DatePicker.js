import React, { Component } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import { Container, Form, Col, Button, Row } from "react-bootstrap";

class DateRangePickerWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
    };
  }

  render() {
    return (
      <>
        <Container className="datepicker-wrapper">
          <Form>
            <Row xs={1}>
              <Col>
                <Row>
                  <Col md={6}>
                    {" "}
                    <Form.Group
                      className="datepicker-container"
                      controlId="exampleForm.DatepickerCustom"
                    >
                      <Form.Label>Arrival and departure</Form.Label>

                      <DateRangePicker
                        readOnly
                        verticalHeight={370}
                        orientation="vertical"
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) =>
                          this.setState({ startDate, endDate })
                        } // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={(focusedInput) =>
                          this.setState({ focusedInput })
                        } // PropTypes.func.isRequired,
                      />
                    </Form.Group>
                  </Col>
                  <Col md={2}>
                    <Form.Group controlId="exampleForm.SelectCustom">
                      <Form.Label>Adults</Form.Label>
                      <Form.Control as="select" custom>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md={2}>
                    {" "}
                    <Form.Group controlId="exampleForm.SelectCustom">
                      <Form.Label>Children</Form.Label>
                      <Form.Control as="select" custom>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col md={10}>
                <Button variant="primary-color" block>
                  Order
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </>
    );
  }
}

export default DateRangePickerWrapper;

/**/
