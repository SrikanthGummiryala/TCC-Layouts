import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Container } from '@mui/material';

const navItems = ['Home', 'About', 'Services', 'Testimonials', 'Contact', 'Form'];

const Navbar = ({title, onFormClick}) => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#1a1f23', boxShadow: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 'bold',
              fontSize: 28,
              fontFamily: 'serif',
              color: '#f8f5f1',
              textTransform: 'lowercase',
            }}
          >
            service
          </Typography>

          {/* Menu Items */}
          <Box sx={{ display: 'flex', gap: 3 }}>
            {navItems.map((item, idx) => (
              <Button
                key={idx}
                sx={{
                  color: '#f8f5f1',
                  fontWeight: 'bold',
                  fontFamily: 'serif',
                  textTransform: 'none',
                  fontSize: 16,
                  '&:hover': {
                    borderBottom: '2px solid #d3b673',
                    borderRadius: 0,
                  },
                }}
                onClick={item === 'Form' ? onFormClick : undefined}
              >
                {item === 'Services' ? title : item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
