
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import ReCAPTCHA from "react-google-recaptcha";
import '../assets/css/register.css'
import 'antd/dist/antd.css';
import abc from "../assets/image/register.jpg";
import AuthService from '../services/AuthService';
import { Button, Form, Input, Select } from 'antd';
import { gouvernerat, group } from '../mocks/groupEmplacement';
const { Option } = Select;


function Register(props) {

    const [role, setrole] = useState('');
    const { setUser, setIsAuth } = useContext(AuthContext);
    const [form] = Form.useForm();

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
    const onFinish = (values) => {

        console.log('Success:', values);
        values.role = role

        AuthService.register(values).then(jsonData => {

            console.log(jsonData, '%cabcdefgh', "color: blue");

            if (!jsonData.error) {

                alert('Vous êtes inscrit avec succès')
                props.history.replace("/login")
            }
            else {
                console.log("%c...register error...", "color: blue", jsonData)
            }
        })

    };


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
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"

                >

                    <Form.Item
                        name="nom_famille"
                        label="Nom"
                        rules={[
                            {
                                required: true,
                                message: 'SVP entrer votre Nom',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="prenom"
                        label="Prenom"
                        rules={[
                            {
                                required: true,
                                message: 'SVP entrer votre prenom',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="tel"
                        label="telephone"
                        rules={[
                            {
                                required: true,
                                message: 'SVP entrer votre numéro de téléphone',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="gouvernorat"
                        label="gouvernorat"
                        rules={[
                            {
                                required: true,
                                message: 'SVP entrer votre gouvernorat',
                            },
                        ]}
                        hasFeedback
                    >
                    
                        <Select
                            placeholder="Select gouvernerat"

                            allowClear
                        >
                          
                            {
                                gouvernerat.map((c, i) => {
                                    console.log(c, 'cccccccccccc');
                                    return (
                                        <Option value={c} >{c}</Option>
                                    )
                                })
                            }
                         
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="groupe_sanguin"
                        label="groupe_sanguin"
                        rules={[
                            {
                                required: true,
                                message: 'SVP entrer votre groupe_sanguin',
                            },
                        ]}
                        hasFeedback
                    >
                        <Select
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
                        </Select>
                    </Form.Item>


                    <Form.Item
                        name="email"
                        label="E-mail"

                        rules={[
                            {
                                type: 'email',
                                message: 'Donnée entrée pas valide',
                            },
                            {
                                required: true,
                                message: 'SVP entrer votre E-mail',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'SVP entrer le mot de passe',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        label="confirme Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
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

                            },
                        ]}
                    >
                        <ReCAPTCHA
                            sitekey="6LfjfUEgAAAAAKbXRAPaDq7H1rR9i_0XtnG30kZo"
                            onChange={onChange}
                        />

                    </Form.Item>
                    <Form.Item name='gender' style={{ align: "right" }}>
                        <Button onClick={() => setrole('beneficiaire')} type="primary" htmlType="submit" style={{ align: "right", color: "primary", marginLeft: "400px" }}> S'inscrire </Button>
                    </Form.Item>


                </Form>
                </div>
            </div>
        </div>
    )
}
export default Register
