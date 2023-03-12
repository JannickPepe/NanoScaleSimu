import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container, Grid } from '@mui/material';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper'}}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider'}}
      >
        <Tab label="A modern, feature-packed platform for molecular design" {...a11yProps(0)} />
        <Tab label="A unique platform for science communication" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <h3 className='text-center mb-2'>A modern, feature-packed platform for molecular design</h3>
        <Grid container>
            <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
                <Container>
                <img rounded className='produkt-img mt-4' alt="vision" src={require('../../img/galleri6.jpg')} style={{height:300}} />
                </Container>
            </Grid>
            <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
                <Container>
                    <h4 className='mt-4'>Build and simulate, at the same time!</h4>
                    <div className='produkt-tekst mt-4'>
                        <p>Use physics-based construction to create molecules and assemblies.Model nanosystems through their structures, dynamics, interactions, visuals, and properties.</p>
                        <p>Enable expert-in-the-loop design with interactive simulations.</p>
                        <p>Export to large-scale simulators, and import trajectories to compute properties.</p>
                    </div>
                </Container>
            </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <h3 className='text-center mb-2'>A unique platform for science communication</h3>
        <Grid container>
            <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
                <Container>
                    <h4 className='mt-4'>Build and simulate, at the same time!</h4>
                    <div className='produkt-tekst mt-4'>
                        <p>Use physics-based construction to create molecules and assemblies.Model nanosystems through their structures, dynamics, interactions, visuals, and properties.</p>
                        <p>Enable expert-in-the-loop design with interactive simulations.</p>
                        <p>Export to large-scale simulators, and import trajectories to compute properties.</p>
                    </div>
                </Container>
            </Grid>
            <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
                <Container>
                <img rounded className='produkt-img mt-4' alt="vision" src={require('../../img/galleri6.jpg')} style={{height:300}} />
                </Container>
            </Grid>
        </Grid>
      </TabPanel>
    </Box>
  );
}