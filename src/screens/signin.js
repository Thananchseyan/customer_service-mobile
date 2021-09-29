import React from 'react';
import { View, Button, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useMutation, gql } from '@apollo/client';

import UserForm from '../components/CustomerForm';
import Loading from '../components/Loading';
import {signIN_Customer} from "../gql/mutation"


const SignIn = props => {
    const [signIn, { loading, error }] = useMutation(signIN_Customer, {
        onCompleted: data => {
            // store the token with a key value of `token`
            // after the token is stored navigate to the app's main screen
            SecureStore.setItemAsync('token', data.signINCustomer).then(
                props.navigation.navigate('App')
            );
        }
    });

    // if loading, return a loading indicator
    if (loading) return <Loading />;
    return (
        <React.Fragment>
            {error && <Text>Error signing in!</Text>}
            <UserForm
                action={signIn}
                formType="signIn"
                navigation={props.navigation}
            />
        </React.Fragment>
    );
};

SignIn.navigationOptions = {
    title: 'Sign In'
};

export default SignIn;
