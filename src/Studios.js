import React, { useState } from 'react';
import './Studios.css'; // Assuming you have a Studio.css file for styling
import { useNavigate } from 'react-router-dom';
function Studio() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    email: '',
    address: '',
    aboutUs: '',
    website: '',
    logo: null,
    coverArt: null,
    agreeTerms: false,
    confirmOwner: false,
  });
const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const newValue = type === 'file' ? files : type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (let key in formData) {
      if (key === 'logo' || key === 'coverArt') {
        for (let i = 0; i < formData[key].length; i++) {
          formDataToSend.append(key, formData[key][i]);
        }
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      const response = await fetch('https://gaming-backend-f2n7.onrender.com/studio', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Studio data inserted successfully:', data);
        navigate('/mydashboard');
        // Handle any further action after successful submission, e.g., redirecting to another page
      } else {
        throw new Error('Failed to insert studio data');
      }
    } catch (error) {
      console.error('Error inserting studio data:', error);
      // Handle error, e.g., display error message to user
    }
  };

  const { name, location, email, address, aboutUs, website, logo, coverArt, agreeTerms, confirmOwner } = formData;

  // Function to check if all required fields are filled
  const isFormValid = () => {
    return name.trim() !== '' && location.trim() !== '' && email.trim() !== '' && address.trim() !== '' && agreeTerms && confirmOwner;
  };

  const renderImagePreview = (imageList) => {
    if (!imageList || !imageList.length) {
      console.log('No image found');
      return null;
    }
  
    try {
      const imageUrl = URL.createObjectURL(imageList[0]); // Accessing the first file from the FileList
      return <img src={imageUrl} alt="Preview" className="image-preview" />;
    } catch (error) {
      console.error('Error creating image preview:', error);
      return null;
    }
  };
  

  // List of countries
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
    "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland",
    "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
    "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
    "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos",
    "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi",
    "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova",
    "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands",
    "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
    "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
    "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia",
    "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan",
    "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga",
    "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
    "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen",
    "Zambia", "Zimbabwe"
  ];

  return (
    <div className="studio">
      <div className="header">
        <img src={require('./assets/studio.jpg')} alt='' className="studio-image" />
      </div>
      <div className="details-form">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" name="name" value={name} onChange={handleChange} placeholder="Name" />
            <select name="location" value={location} onChange={handleChange}>
              <option value="">Select Country</option>
              {countries.map((countryName, index) => (
                <option key={index} value={countryName}>{countryName}</option>
              ))}
            </select>
            <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" />
          </div>
          <div className="form-row">
            <textarea name="aboutUs" value={aboutUs} onChange={handleChange} placeholder="About us"></textarea>
          </div>
          <div className="form-row">
            <input type="text" name="website" value={website} onChange={handleChange} placeholder="Official Website" />
          </div>
          <div className="form-row">
            {renderImagePreview(logo)}
            <input type="file" accept="image/jpeg, image/jfif" name="logo" onChange={handleChange} />
            {renderImagePreview(coverArt)}
            <input type="file" accept="image/jpeg, image/jfif" name="coverArt" onChange={handleChange} />
          </div>
          <div className="form-row">
            <label htmlFor="agreeTerms">
              <input type="checkbox" id="agreeTerms" name="agreeTerms" checked={agreeTerms} onChange={handleChange} />
              I have read and agree to the Terms of Service and Privacy Policy.
            </label>
          </div>
          <div className="form-row">
            <label htmlFor="confirmOwner">
              <input type="checkbox" id="confirmOwner" name="confirmOwner" checked={confirmOwner} onChange={handleChange} />
              I confirm that I'm the rightful owner of this game studio. In case of potential fraud or infringement, I grant POGR full control of changing its leadership.
            </label>
          </div>
          <div className="form-row">
            <button type="submit" disabled={isFormValid()}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Studio;
