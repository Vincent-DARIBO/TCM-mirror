import axios from 'axios';
import Constants from 'expo-constants';

// export const baseUrl = 'http://localhost:3000/';

export const baseUrl = process.env.API_URL;

export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0)
    return 'Vous devez remplir le champs mot de passe';
  if (!re.test(email)) return "Ooops! Votre addresse mail n'est pas valid";

  console.log('email valid');
  return '';
};

export const passwordValidator = password => {
  if (!password || password.length <= 0) return 'Password cannot be empty.';

  console.log('password valid');
  return '';
};

export const nameValidator = name => {
  if (!name || name.length <= 0) return 'Name cannot be empty.';

  return '';
};

export async function getDataFromRoute(routeName) {
  try {
    const response = await axios.get(baseUrl + routeName);
    return response.data;
  } catch (err) {
    console.log(err);
  }
  return undefined;
}

export async function createUser(userInfo) {
  return axios.post(baseUrl + '/auth/signUp', {
    ...userInfo,
  });
}

export async function loginUser(email, password) {
  try {
    console.log(baseUrl + '/auth/login');
    return axios.post(baseUrl + '/auth/login', {
      email,
      password,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function editUser(userId, newUserInfo) {
  try {
    const response = await axios.put(baseUrl + 'users', {
      userId,
      ...newUserInfo,
    });
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function createArea(userId, actionId, reactionId) {
  try {
    const response = await axios.post(baseUrl + 'areas', {
      user: userId,
      actionId: actionId,
      reactionId: reactionId,
    });
    return response;
  } catch (err) {
    console.log(err);
  }
}
