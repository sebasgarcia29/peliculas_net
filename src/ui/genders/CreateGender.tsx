import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { Button } from '../../components/Button';

const CreateGender = () => {

    const navigate = useHistory();

    return (
        <>
            <h3>CreateGender</h3>
            <Button onClick={() => {
                console.log('jejejeje');
                navigate.push('/genders');
            }}>
                {'Saved'}
            </Button>
        </>
    )
}

export default withRouter(CreateGender);