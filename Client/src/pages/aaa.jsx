
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import ReCAPTCHA from "react-google-recaptcha";
import '../assets/css/register.css'
import 'antd/dist/antd.css';
import abc from "../assets/image/register.jpg";
import AuthService from '../services/AuthService';
import { Button, Form, Input, Select } from 'antd';
import { gouvernerat, group } from '../mocks/groupEmplacement';
import { Registred, selectregister, selectregistererror } from '../features/authentification/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
const { Option } = Select;


function Register(props) {

    const [role, setrole] = useState('');
    // const { setUser, setIsAuth } = useContext(AuthContext);
    // const [form] = Form.useForm();


const [err, setErr] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [confirmPassword, setConfirm] = useState('')
const [nom_famille, setNom] = useState('')
const [prenom, setPrenom] = useState('')
const [tel, setTel] = useState('')
const [groupe_sanguin, setGroupe] = useState('')
const [gouvernorat, setGouvernorat] = useState('')
const errors = useSelector(selectregistererror)
const registerr = useSelector(selectregister)
const dispatch = useDispatch()


const onFinish = (e) => {

  e.preventDefault();

  let data = { 
    email: email,
    password: password,
    nom_famille:nom_famille,
    prenom:prenom,
    groupe_sanguin:groupe_sanguin,
    tel:tel,
    gouvernorat:gouvernorat,
    // confirmPassword:confirmPassword,
  }

  dispatch(Registred(data))

//   props.history.replace("/login")

}
useEffect(()=>{

if(registerr ==="success"){

    props.history.replace("/login")

}},[registerr])

    // const onGenderChange = (value) => {
    //     switch (value) {
    //       case 'male':
    //         form.setFieldsValue({
    //           note: 'Hi, man!',
    //         });
    //         return;

    //       case 'female':
    //         form.setFieldsValue({
    //           note: 'Hi, lady!',
    //         });
    //         return;

    //       case 'other':
    //         form.setFieldsValue({
    //           note: 'Hi there!',
    //         });
    //     }
    //   };
    
    // const onFinish = (values) => {

    //     console.log('Success:', values);
    //     values.role = role

    //     AuthService.register(values).then(jsonData => {

    //         console.log(jsonData, '%cabcdefgh', "color: blue");

    //         if (!jsonData.error) {

    //             alert('Vous êtes inscrit avec succès')
    //             props.history.replace("/login")
    //         }
    //         else {
    //             console.log("%c...register error...", "color: blue", jsonData.error)
    //             setError(jsonData.error)
    //         }
    //     })

    // };

    const ErrorHandler = ({ name }) => { 

        return (
            <>
                {
                   errors.map(e => {
                        return (
                            <>
                                {
                                    e.path[0] === name
                                    &&
                                    <span style={{ color: "red" }}  >{e.message}</span>
                                }
                            </>
                        )
                    })
    
                }
            </>
        )
    }


    function onChange(value) {

        console.log("Captcha value:", value);

    }


    const onFinishFailed = (errorInfo) => {

        console.log('Failed:', errorInfo);
        alert('Erreur inscription');

    };


    return (

        <div>
            <div className='row'><div className="col-md-6 ">
                <img src={abc} alt="" align="left" style={{ marginTop: "166px", height: "80%", position: "fixed" }} />
            </div>
                <div className="col-md-5 mt-3"> <Form name="basic" style={{ paddingRight: "100px", padding: "20px", marginTop: "80px", boxShadow: " 0 6px 8px 0 rgba(0, 0, 0, 0.8), 0 10px 20px 0 rgba(0, 0, 0, 0.19)" }}

                    labelCol={{

                        span: 12,
                    }}

                    wrapperCol={{

                        span: 15,
                    }}

                    initialValues={{

                        remember: true,

                    }}
                 
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"

                >

                    <Form.Item
                        name="nom_famille" onChange={(e) => setNom(e.target.value)} 
                        label="Nom"
                        rules={[
                            {
                                required: true,
                                
                            },
                        ]}
                        hasFeedback
                    >
                        <Input />

                        <ErrorHandler name='nom_famille' />

                    </Form.Item>

                    <Form.Item

                        name="prenom" onChange={(e) => setPrenom(e.target.value)} 
                        label="Prenom"
                        rules={[
                            {
                                required: true,

                            },
                        ]}
                        
                        hasFeedback
                    >
                        <Input />
                        <ErrorHandler name='prenom' />
                    </Form.Item>
                    <Form.Item
                        name="tel" onChange={(e) => setTel(e.target.value)} 
                        label="telephone"
                        rules={[
                            {
                                required: true,
                             
                            },
                        ]}
                        hasFeedback
                    >
                        <Input />
                        <ErrorHandler name='tel' />
                    </Form.Item>

                    <Form.Item  label="gouvernorat" required>  
                     <select class="ant-form-item-control-input-content"
                              value={gouvernorat}  onChange={(e) => setGouvernorat(e.target.value)}
               
              >
                     {
   
                    gouvernerat.map((c, i) => {console.log(c,'cccccccccccc');
                      return (
                        <option value={c._id} >{c}</option>
                      )
                    })

                  }
          
              </select>
                      
                        <ErrorHandler name='gouvernorat' />
                    </Form.Item>


                    <Form.Item
                        name="groupe_sanguin" 
                        label="groupe_sanguin"
                        rules={[
                            {
                                required: true,
                           
                            },
                        ]}
                        hasFeedback
                    >
                        <select onChange={(e) => setGroupe(e.target.value)} 
                            placeholder="Select groupe_sanguin"

                            allowClear
                        >
                            {
                                group.map((c, i) => {
                                
                                    return (
                                        <option value={c} >{c}</option>
                                    )
                                })
                            }
                        </select>

                        <ErrorHandler name='groupe_sanguin' />       

                    </Form.Item>


                    <Form.Item

                        name="email" onChange={(e) => setEmail(e.target.value)} 
                        label="E-mail"

                        rules={[

                            {
                                type: 'email',
                                
                            },

                            {
                                required: true,
                              
                            },                       
                        ]}
                    >
                        <Input />

                        <ErrorHandler name='email' />

                    </Form.Item>

                    <Form.Item

                        name="password"  onChange={(e) => setPassword(e.target.value)}
                        label="Password"

                        rules={[
                            {
                                required: true,
                               
                            },
                        ]}

                        hasFeedback
                    >
                        <Input.Password />
                        {/* <ErrorHandler name='password' /> */}
                        
                    </Form.Item>
                    <Form.Item


                        name="confirmPassword"  
                        label="confirme Password"
                        dependencies={['password']}
                        hasFeedback
                        rules = {[

                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },


                            ({ getFieldValue }) => ({

                                validator(_, value) {
                                    
                                    if (!value || getFieldValue('password') === value) {

                                        return Promise.resolve();
                                    }

                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}
                    >

                    <Input.Password />
                    </Form.Item>
                    <Form.Item label="reCaptcha" 
                        name="reCaptcha"
                        rules={[

                            { 

                                required: true,
                                message: 'recaptcha is required',
                            },
                        ]}

                    >
                        <ReCAPTCHA
                            sitekey="6LfjfUEgAAAAAKbXRAPaDq7H1rR9i_0XtnG30kZo"
                            onChange={onChange}
                        />

                    </Form.Item>
                    <Form.Item name='gender' style={{ align: "right" }}>
                    <span onClick={() => setrole('beneficiaire')} >   <Button onClick={onFinish} type="primary" htmlType="submit" style={{ align: "right", color: "primary", marginLeft: "400px" }}> S'inscrire </Button>
                   </span> </Form.Item>

                </Form>
                </div>
            </div>
        </div>
    )
}

export default Register
