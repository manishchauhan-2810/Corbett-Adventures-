export const contactConfig = {
  phoneNumber: '+919690259185',
  secondaryPhoneNumber: '+919690259181',
  phoneDisplay: '+91 9690259185',
  secondaryPhoneDisplay: '+91 9690259181',

  email: 'Jimcorbettadventures@gmail.com',

  address:
    'BigCat Corbett, Near Diners Villa, Dhikuli, Ramnagar, Nainital, Uttarakhand 244715',

  whatsappNumber: '919690259185',

  whatsappUrl: 'https://wa.me/919690259185',

  facebookUrl: 'https://facebook.com/jimcorbettadventures',

  instagramUrl: 'https://instagram.com/jimcorbettadventures',

  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=BigCat+Corbett+Dhikuli+Ramnagar+Uttarakhand',
};

export const whatsappConfig = {
  phoneNumber: '919690259185',

  defaultMessage:
    'Hi Jim Corbett Adventures, I would like to enquire about your services.',
};

export const getWhatsAppLink = (
  message = whatsappConfig.defaultMessage
) => {
  return `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
};

export default contactConfig;