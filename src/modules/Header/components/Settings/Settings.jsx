import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from 'reactstrap';

export default class Settings extends Component {

    setLanguage = (e) => {
        this.props.changeLanguage(e.target.value);
    };

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            backdrop: 'static'
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        const { languages } = this.props;
        return (
            <div className="settings">
                <a href="#" className="settings__link" onClick={this.toggle}>
                    <img src="assets/img/settings.svg" alt="settings" className="settings__icon"/>
                </a>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{languages.dialogResources.settingsTitle}</ModalHeader>
                    <ModalBody>
                        <Form inline onSubmit={(e) => e.preventDefault()}>
                            <FormGroup>
                                <Input type="select" name="language" id="language" onChange={this.setLanguage}>
                                    <option value="en">{languages.languages.en}</option>
                                    <option value="ru">{languages.languages.ru}</option>
                                    <option value="ar">{languages.languages.ar}</option>
                                </Input>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>{languages.dialogResources.settingsSaveBtn}</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}