import React, {Component} from 'react';
import {Button, Form, FormGroup, Input} from "reactstrap";
import {connect} from "react-redux";

import {shortenLink} from "../store/actions/linksActions";
import {apiURL} from '../constants';

class ShortenLinkPage extends Component {
    state = {
      originalUrl: '',
    };

    inputHandler = e => {
      this.setState({originalUrl: e.target.value})
    };

    submitHandler = e => {
        e.preventDefault();

        this.props.shortenLink(this.state.originalUrl);
    };

    renderLink = () => (
        <div>
            <h3>Your link now looks like this:</h3>
            <a href={`${apiURL}/${this.props.shortUrl}`}>{`${apiURL}/${this.props.shortUrl}`}</a>
        </div>
    );

    render() {
        return (
            <div className="wrapper">
                <h1 className="text-center mt-5">Shorten your link!</h1>
                <Form onSubmit={(e) => this.submitHandler(e)}>
                    <FormGroup className="w-50 p-5 mx-auto">
                        <Input
                            required
                            type="text"
                            name="link"
                            id="link"
                            value={this.state.originalUrl}
                            onChange={this.inputHandler}
                            placeholder="Enter URL here"
                        />
                    </FormGroup>
                    <FormGroup className="text-center">
                        <Button type="submit">Shorten!</Button>
                    </FormGroup>
                </Form>
                {this.props.shortUrl ? this.renderLink() : null}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    shortUrl: state.shortUrl,
    error: state.error,
});

const mapDispatchToProps = dispatch => ({
    shortenLink: (link) => dispatch(shortenLink(link)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShortenLinkPage);