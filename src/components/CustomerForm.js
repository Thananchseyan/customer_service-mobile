import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const FormView = styled.View`
  padding: 10px;
`;

const StyledInput = styled.TextInput`
  border: 1px solid gray;
  font-size: 18px;
  padding: 8px;
  margin-bottom: 24px;
`;

const FormLabel = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const FormButton = styled.TouchableOpacity`
  background: #0077cc;
  width: 100%;
  padding: 8px;
`;

const ButtonText = styled.Text`
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

const SignUp = styled.TouchableOpacity`
  margin-top: 20px;
`;

const Link = styled.Text`
  color: #0077cc;
  font-weight: bold;
`;

const CustomerForm = props => {
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();

    const handleSubmit = () => {
        props.action({
            variables: {
              signInCustomerPassword: password,
              signInCustomerUsername: username
            }
        });
    };

    return (
        <FormView>
            <FormLabel>User name</FormLabel>
            <StyledInput
                onChangeText={text => setUsername(text)}
                value={username}
                textContentType="User name"
                autoCompleteType="username"
                autoFocus={true}
                autoCapitalize="none"
            />
            {props.formType === 'signUp' && (
                <View>
                    <FormLabel>Username</FormLabel>
                    <StyledInput
                        onChangeText={text => setUsername(text)}
                        value={username}
                        textContentType="username"
                        autoCapitalize="none"
                    />
                </View>
            )}
            <FormLabel>Password</FormLabel>
            <StyledInput
                onChangeText={text => setPassword(text)}
                value={password}
                textContentType="password"
                secureTextEntry={true}
            />
            <FormButton onPress={handleSubmit}>
                <ButtonText>Submit</ButtonText>
            </FormButton>
            {props.formType !== 'signUp' && (
                <SignUp onPress={() => props.navigation.navigate('SignUp')}>
                    <Text>
                        Need an account? <Link>Sign up.</Link>
                    </Text>
                </SignUp>
            )}
        </FormView>
    );
};

export default CustomerForm;
