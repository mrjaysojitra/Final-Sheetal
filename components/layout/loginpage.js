import { useEffect, useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';


// ----------------------------------------------------------------------


const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  // minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
  paddingTop: 0,
  paddingBottom: 0
}));

// ----------------------------------------------------------------------
const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '5px',
}));
export default function loginpage() {

  const [data, setdata] = useState({
    email: '',
    password: '',
  });
  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== data.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule('isPasswordMatch');
  }, [data.password]);

  const handleChange = (e) => {
    e.persist();
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(data);
    e.preventDefault();
    // --------------------------API----------------------------
    axios.post('', data).then((r) => {
      console.log(r.data);
    });
    setdata((e.target.value = ''));
  };

  return (
    <>
      <section className="contact-details">
        <div className="container ">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <img src='images/login.gif'/>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="contact-details__right  sec-title text-center">
                <h2>Sign in to Shital</h2>
                <Container maxWidth="sm">
                  <StyledContent>
                    <Typography variant="body2" sx={{ mb: 5 }}>
                      Don't have an account?
                      <Link variant="subtitle2">Get started</Link>
                    </Typography>
                    {/* ========================================= */}

                    <ValidatorForm onSubmit={handleSubmit} onError={() => null} autocomplete="off">
                      <Stack spacing={3}>
                        <TextField
                          type="email"
                          name="email"
                          label="Email"
                          value={data.email || ''}
                          onChange={handleChange}
                          validators={['required', 'isEmail']}
                          autoComplete="off"
                          errorMessages={['this field is required', 'email is not valid']}
                        />
                        <TextField
                          name="password"
                          type="password"
                          label="Password"
                          value={data.password || ''}
                          onChange={handleChange}
                          validators={['required']}
                          errorMessages={['this field is required']}
                        />
                      </Stack>

                      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                        <Link variant="subtitle2" style={{ cursor: 'pointer' }}>
                          Forgot password?
                        </Link>
                      </Stack>

                      <Button fullWidth size="large" type="submit" variant="contained">
                        Login
                      </Button>
                    </ValidatorForm>
                  </StyledContent>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}