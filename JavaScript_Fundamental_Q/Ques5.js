function calculateDeliveryTime(packageType) {
    var deliveryTime;
  
    switch (packageType.toLowerCase()) {
      case 'standard':
        deliveryTime = '3-5 days';
        break;
      case 'express':
        deliveryTime = '1-2 days';
        break;
      case 'overnight':
        deliveryTime = 'next day';
        break;
      default:
        deliveryTime = 'unknown';
    }
  
    console.log(`The estimated delivery time for ${packageType} package is ${deliveryTime}.`);
  }
  
  
  calculateDeliveryTime('standard');
  calculateDeliveryTime('express');
  calculateDeliveryTime('overnight');
  calculateDeliveryTime('unknown');
  