export const postRedeem = async (productId) =>
  fetch('https://coding-challenge-api.aerolab.co/redeem', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
    body: JSON.stringify({ productId }),
  });

export const postUserPoints = async (amount) =>
  fetch('https://coding-challenge-api.aerolab.co/user/points', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
    },
    body: JSON.stringify({ amount }),
  });
