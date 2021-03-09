import React from 'react';
import {Grid} from 'semantic-ui-react';

import ConfigurationForm from './ConfigurationForm';

const ConfigurationDashboard = () => {
    return(
        <Grid>
            <Grid.Column width={16}>  
                <ConfigurationForm />
            </Grid.Column>
        </Grid>
    );
}

export default ConfigurationDashboard;