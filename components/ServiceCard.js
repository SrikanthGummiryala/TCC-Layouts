import React, { useState } from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  TextField,
  Button, IconButton,
   Popover,
  Stack,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LockIcon from "@mui/icons-material/Lock";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EditServiceDialog from "../components/EditService";

const initialServices = [
  {
    id: 1,
    title: "Secure Transactions",
    description:
      "Enjoy peace of mind with our secure and private transaction system.",
    icon: <LockIcon fontSize="large" />,
  },
  {
    id:2 ,
    title: "Dedicated Support",
    description:
      "Our team is here to assist you at every step, offering consistent and reliable help.",
    icon: <SupportAgentIcon fontSize="large" />,
  },
  {
    id: 3,
    title: "Effortless Bookings",
    description:
      "Schedule your services with just a few clicks, saving you precious time.",
    icon: <EventAvailableIcon fontSize="large" />,
  },
];

const ServiceCard = ({ title, setTitle }) => {
  const [services, setServices] = useState(initialServices);
  const [isEditing, setIsEditing] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
   const [dialogOpen, setDialogOpen] = useState(false);
  const [serviceToEdit, setServiceToEdit] = useState(null);


  const handleTitleClick = () => setIsEditing(true);
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleTitleBlur = () => setIsEditing(false);

  const handleEditClick = (service) => {
    setServiceToEdit(service);
    setDialogOpen(true);
  };
   const handleDialogClose = () => {
    setDialogOpen(false);
    setServiceToEdit(null);
  };
  const handleSave = (updatedData) => {
    setServices((prevServices) =>
      prevServices.map((svc) =>
        svc.id === updatedData.id ? { ...svc, ...updatedData } : svc
      )
    );
    handleDialogClose();
  };

    const handleDeleteClick = (event, service) => {
    setAnchorEl(event.currentTarget);
    setSelectedService(service);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
    setSelectedService(null);
  };

  const handleConfirmDelete = () => {
    console.log('Confirmed delete for:', selectedService?.title);
    handleClosePopover();
  };

  return (
    <Box
      sx={{ bgcolor: "#1a1f23", color: "#f8f5f1", minHeight: "100vh", py: 5 }}
    >
     <Box textAlign="center" mb={2}>
  <Box
    sx={{
      border: isEditing ? '2px solid #1976d2' : 'none',
      borderRadius: 1,
      width: '90%',
      maxWidth: 900,
      mx: 'auto',
      px: 2,
      py: 0,
      
    }}
  >
    {isEditing ? (
      <TextField
        variant="standard"
        value={title}
        onChange={handleTitleChange}
        onBlur={handleTitleBlur}
        autoFocus
        InputProps={{
          disableUnderline: true,
          style: {
            fontSize: '2rem',
            color: '#f8f5f1',
            textAlign: 'center',
          },
        }}
        sx={{
          input: { textAlign: 'center' },
          width: '100%',
        }}
      />
    ) : (
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontFamily: 'serif',
          fontWeight: 'bold',
          letterSpacing: 1,
          cursor: 'pointer',
        }}
        onClick={handleTitleClick}
      >
        {title}
      </Typography>
    )}
  </Box>

  <Box sx={{ width: 50, height: 3, bgcolor: '#d3b673', mx: 'auto', mt: 1 }} />
</Box>

      {/* Cards */}
      <Grid
  container
  spacing={3}
  justifyContent="center"
  alignItems="stretch"
  sx={{
    px: { xs: 2, sm: 4, md: 8 },
    flexWrap: 'wrap',
  }}
>
  {services.map((service, index) => (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
       key={service.id}
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          border: '2px solid transparent',
          borderRadius: '8px',
          transition: 'border-color 0.3s ease',
          '&:hover': {
            borderColor: '#00BFFF', 
          },
        }}
      >
      <Card
        sx={{
          position: 'relative',
          bgcolor: '#000',
          textAlign: 'center',
          py: 5,
          px: 2,
          height: '100%',
          border: '1px solid white',
          width: '100%',
          maxWidth: 250,
          transition: 'transform 0.6s',
          zIndex: 1,
          '&:hover': {
            transform: 'translateY(-10px)',
            border: '1px solid #00BFFF',
            
            '& .hover-actions': {
              opacity: 1,
              visibility: 'visible',
              transform: 'translateX(-50%) translateY(0)',
            },
          },
        }}
        elevation={3}
      >
        <Avatar sx={{ bgcolor: '#fff', width: 100, height: 100, mx: 'auto', mb: 3, fontFamily: 'serif', }}>
          {service.icon}
        </Avatar>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ color: '#ccc', fontWeight: 'bold', fontFamily: 'serif', }}>
            {service.title}
          </Typography>
          <Typography variant="body2" sx={{ color: '#ccc', fontFamily: 'serif', }}>
            {service.description}
          </Typography>
        </CardContent>
        <Box
          className="hover-actions"
          sx={{
            position: 'absolute',
            bottom: 1,
            left: '50%',
            transform: 'translateX(-50%) translateY(10px)',
            display: 'flex',
            gap: 0,
            opacity: 0,
            visibility: 'hidden',
            transition: 'opacity 0.3s ease',
            fontFamily: 'serif', 
          }}
        >
          <Box
    sx={{
      display: 'flex',
      bgcolor: '#2e2e2e',
      borderRadius: 1,
      overflow: 'hidden',
      border: '1px solid #444',
    }}
  >
          <Button
               variant="text"
      size="small"
              sx={{
                color: '#fff',
                textTransform: 'none',
                fontSize: '0.8rem',
                fontFamily: 'serif',
                px: 2,
                py: 0.5,
                minWidth: 48,
                '&:hover': { bgcolor: '#444' },
              }}
              onClick={() => handleEditClick(service)}
            >
              Edit
            </Button>
             <Box
      sx={{
        width: '1px',
        bgcolor: '#555',
        my: 'auto',
      }}
    />
            <IconButton
              size="small"
              disableRipple
              sx={{
                px: 1.5,
                color: '#fff',
                fontFamily: 'serif',
                borderRadius: 0,
                '&:hover': { bgcolor: 'red' },
              }}
               onClick={(e) => handleDeleteClick(e, service)}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
          </Box>
        </Card>
      </Box>
    </Grid>
  ))}
</Grid>
<Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        sx={{ mt: 1 }}
      >
        <Box sx={{ p: 2, bgcolor: '#fff', color: 'black', minWidth: 200 }}>
          <Typography variant="body2" sx={{ mb: 2 , fontFamily:'serif'}}>Are you sure?</Typography>
          <Stack direction="row" spacing={1} justifyContent="center">
            <Button
              variant="contained"
              size="small"
              color="error"
              onClick={handleConfirmDelete}
              sx={{ fontFamily: 'serif' }}
            >
              YES
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{ bgcolor: '#666', '&:hover': { bgcolor: '#555' }, fontFamily: 'serif' }}
              onClick={handleClosePopover}
              
            >
              NO
            </Button>
          </Stack>
        </Box>
      </Popover>
      {dialogOpen && serviceToEdit && (
  <EditServiceDialog
  open={dialogOpen}
  handleClose={() => setDialogOpen(false)} 
  onSave={handleSave}
  initialData={serviceToEdit}
/>
)}
    </Box>
  );
};
 

export default ServiceCard;
