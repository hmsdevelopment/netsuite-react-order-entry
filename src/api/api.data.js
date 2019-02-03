import customerData from './data/customerData';

export const searchCustomers = searchString => {
  const filteredCustomers = customerData.filter(c => {
    return c.companyName.toLowerCase().includes(searchString)
      || c.number.toLowerCase().includes(searchString)
      || c.email.toLowerCase().includes(searchString)
      || c.phone.replace(/\D/g, '').includes(searchString)
  });
  return {
    isSuccess: true,
    result: filteredCustomers,
    totalCount: 2,
    elapsedSeconds: 2.234,
    remainingUsage: 950
  };
};

