import React, { Component } from 'react';
import { isNull, isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { get } from 'lodash';
import * as Yup from 'yup';
import { withFormik } from 'formik';
import {Modal, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { phoneRegex } from '../../helpers.js';
import firebase from '../../firebase';

import { editStoreProfile } from '../../App/AppAction';


import './styles.scss';

const logoPlaceholder = require('../../assets/StoreInfoCard.jpg');


class EditStoreForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progress: 0,
    }
  }
  componentDidMount() {
    console.log(this.props);
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleUpload = () => {
    const {image} = this.state;
    if (isNull(image)) {
      alert('Please choose some file to upload');
      return;
    }
    const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed',
      (snapshot) => {
        // progress function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      },
      (error) => {
        // error function ....
        console.log(error);
      },
      () => {
        // complete function ....
        firebase.storage().ref('images').child(image.name).getDownloadURL().then(url => {
          console.log(url);
          this.setState({url});
          this.props.setFieldValue('logoUrl', this.state.url);
        })
      });
  }
  render() {
    const { modalIsOpen, toggle, handleSubmit, handleBlur, handleChange, values, errors, touched, data } = this.props;
    const { url, progress } = this.state
    const logoUrl = isEmpty(data.logoUrl) ? logoPlaceholder : data.logoUrl;

    function getCommonBinding(fieldName) {
      return {
        error: touched[fieldName] && Boolean(errors[fieldName]),
        id: fieldName,
        onBlur: handleBlur,
        onChange: handleChange,
        value: values[fieldName],
      };
    }

    function getCommonBindingNested(fieldName) {
      return {
        id: fieldName,
        onBlur: handleBlur,
        onChange: handleChange,
        value: get(values, fieldName),
      };
    }
    return (
      <Modal isOpen={modalIsOpen} toggle={toggle}>
        <div className="edit-store-wrapper">
          <h1>Edit store profile</h1>
          <div className="edit-store-wrapper__form">
            <div className="edit-store-wrapper__form__upload">
              <h5>Store image</h5>
              <Form>
                {url ?
                  <img className="preview-store-image" src={url} alt="Uploaded images" height="200" width="300"/> :
                  <img className="preview-store-image" src={logoUrl} alt="Uploaded images" height="200" width="300"/>
                }
                <progress className="upload-progress" value={progress} max="100"/>
                <FormGroup>
                  <Input
                    onChange={this.handleChange}
                    type="file"
                    // {...getCommonBinding('logoUrl')}
                  />
                  {/* {touched.logoUrl && errors.logoUrl ? <span className="error-msg">{errors.logoUrl}</span> : null} */}
                </FormGroup>
                <Button onClick={this.handleUpload} color="primary">Upload</Button>
              </Form>
            </div>
            <div className="edit-store-wrapper__form__basic-info">
              <h5>Basic info</h5>
              <hr/>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Store name</Label>
                  <Input
                    type="text"
                    placeholder="Store name"
                    {...getCommonBinding('name')}
                  />
                  {touched.name && errors.name ? <span className="error-msg">{errors.name}</span> : null}
                </FormGroup>
                <FormGroup className="edit-store-wrapper__form__basic-info__address">
                  <div>
                    <Label for="exampleEmail">Address</Label>
                    <Input
                      type="text"
                      placeholder="Address"
                      {...getCommonBinding('address')}
                    />
                    {touched.address && errors.address ? <span className="error-msg">{errors.address}</span> : null}
                  </div>
                  <div>
                    <Label>District</Label>
                    <Input
                      type="select"
                      {...getCommonBinding('district')}
                    >
                      <option value={null}>District</option>
                      <option value="D1">D1</option>
                      <option value="D2">D2</option>
                      <option value="D3">D3</option>
                      <option value="D4">D4</option>
                      <option value="D5">D5</option>
                    </Input>
                    {touched.district && errors.district ? <span className="error-msg">{errors.district}</span> : null}
                  </div>
                  <div>
                    <Label>City</Label>
                    <Input
                      type="select"
                      {...getCommonBinding('city')}
                    >
                      <option value={null}>City</option>
                      <option value="TPHCM">TPHCM</option>
                      <option value="Da Nang">Da Nang</option>
                      <option value="Ha Noi">Ha Noi</option>
                    </Input>
                    {touched.city && errors.city ? <span className="error-msg">{errors.city}</span> : null}
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label>Phone</Label>
                  <Input
                    type="tel"
                    placeholder="Phone number"
                    {...getCommonBinding('phone')}
                  />
                  {touched.phone && errors.phone ? <span className="error-msg">{errors.phone}</span> : null}
                </FormGroup>
              </Form>
              {/* Red invoice section */}
              <h5>Red invoice</h5>
              <hr/>
              <Form>
                <FormGroup>
                  <Label>Store name</Label>
                  <Input
                    type="text"
                    placeholder="Store name"
                    {...getCommonBindingNested('redInvoice.name')}
                  />
                  {get(touched, 'redInvoice.name') && get(errors, 'redInvoice.name') ? <span className="error-msg">{get(errors, 'redInvoice.name')}</span> : null}
                </FormGroup>
                <FormGroup className="edit-store-wrapper__form__basic-info__address">
                  <div>
                    <Label>Address</Label>
                    <Input
                      type="text"
                      placeholder="Address"
                      {...getCommonBindingNested('redInvoice.address')}
                    />
                    {get(touched, 'redInvoice.address') && get(errors, 'redInvoice.address') ? <span className="error-msg">{get(errors, 'redInvoice.address')}</span> : null}
                  </div>
                  <div>
                    <Label>District</Label>
                    <Input
                      type="select"
                      {...getCommonBindingNested('redInvoice.district')}
                    >
                      <option value={null}>District</option>
                      <option value="D1">D1</option>
                      <option value="D2">D2</option>
                      <option value="D3">D3</option>
                      <option value="D4">D4</option>
                      <option value="D5">D5</option>
                    </Input>
                    {get(touched, 'redInvoice.district') && get(errors, 'redInvoice.district') ? <span className="error-msg">{get(errors, 'redInvoice.district')}</span> : null}
                  </div>
                  <div>
                    <Label>City</Label>
                    <Input
                      type="select"
                      {...getCommonBindingNested('redInvoice.city')}
                    >
                      <option value={null}>City</option>
                      <option value="TPHCM">TPHCM</option>
                      <option value="Da Nang">Da Nang</option>
                      <option value="Ha Noi">Ha Noi</option>
                    </Input>
                    {get(touched, 'redInvoice.city') && get(errors, 'redInvoice.city') ? <span className="error-msg">{get(errors, 'redInvoice.city')}</span> : null}
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label>MST</Label>
                  <Input
                    type="text"
                    placeholder="MST"
                    {...getCommonBindingNested('redInvoice.taxCode')}
                  />
                  {get(touched, 'redInvoice.taxCode') && get(errors, 'redInvoice.taxCode') ? <span className="error-msg">{get(errors, 'redInvoice.taxCode')}</span> : null}
                </FormGroup>
                <Button onClick={handleSubmit} type="submit" color="primary" className="btn">Save</Button>
                <Button onClick={toggle} color="secondary" className="btn btn-cancel">Cancel</Button>
              </Form>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

const MyEnhancedForm = withFormik({
  mapPropsToValues: (props) => {
    return {
      id: props.match.params.id,
      logoUrl: props.data.logoUrl,
      name: props.data.name,
      address: props.data.address,
      phone: props.data.phone,
      redInvoice: {
        name: props.data.redInvoice.name,
        address: props.data.redInvoice.address,
        taxCode: props.data.redInvoice.taxCode,
      },
    }
  },

  handleSubmit: (values, formikBag) => {
    const { props } = formikBag;
    props.editStoreProfile({
      id: values.id,
      name: values.name,
      logoUrl: values.logoUrl,
      address: values.address,
      district: values.district,
      city: values.city,
      phone: values.phone,
      redInvoice: {
        name: values.redInvoice.name,
        address: values.redInvoice.address,
        district: values.redInvoice.district,
        city: values.redInvoice.city,
        taxCode: values.redInvoice.taxCode,
      },
    });
    props.toggle();
  },
  validationSchema: () => {
    return Yup.object().shape({
      name: Yup.string()
        .required('Please fill in your store name'),
      address: Yup.string()
        .required('Please fill in your store address'),
      city: Yup.string().required('Please select a city'),
      district: Yup.string().required('Please select a district'),
      phone: Yup.string()
        .required('Please fill in your phone number')
        .matches(phoneRegex, 'Phone number is not valid'),
      redInvoice: Yup.object().shape({
        name: Yup.string()
          .required('Please fill in your store name'),
        address: Yup.string()
          .required('Please fill in your store address'),
        city: Yup.string().required('Please select a city'),
        district: Yup.string().required('Please select a district'),
        taxCode: Yup.string().required('Please fill in tax code'),
      }),
    });
  },
})(EditStoreForm);

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
  editStoreProfile,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyEnhancedForm));
