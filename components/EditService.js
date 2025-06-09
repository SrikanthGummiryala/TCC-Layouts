import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Box,
} from '@mui/material';

const EditServiceDialog = ({ open, handleClose, onSave, initialData }) => {
  // Initialize formData with an empty object or default values
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    category: '',
    link: '',
    seo: '',
  });

  // Update formData whenever initialData changes (important when dialog opens)
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Edit Service</DialogTitle>
      <DialogContent dividers>
        <Box display="flex" flexDirection="column" gap={2} mt={1}>
          <TextField
            label="Title"
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            required
          />
          <TextField
            label="Short Description"
            multiline
            rows={3}
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
          />
          <TextField
            label="Image URL"
            value={formData.image}
            onChange={(e) => handleChange('image', e.target.value)}
          />
          <TextField
            label="Category"
            select
            value={formData.category}
            onChange={(e) => handleChange('category', e.target.value)}
          >
            <MenuItem value="Payments">Payments</MenuItem>
            <MenuItem value="Security">Security</MenuItem>
            <MenuItem value="Support">Support</MenuItem>
          </TextField>
          <TextField
            label="Unique Page / Link"
            value={formData.link}
            onChange={(e) => handleChange('link', e.target.value)}
          />
          <TextField
            label="Custom SEO"
            multiline
            rows={2}
            value={formData.seo}
            onChange={(e) => handleChange('seo', e.target.value)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="inherit">
          Cancel
        </Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditServiceDialog;
