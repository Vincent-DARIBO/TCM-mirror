import axios from 'axios';
import Constants from 'expo-constants';

// export const baseUrl = 'http://localhost:3000/';
export const baseUrl = process.env.API_URL;

export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';

  return true;
};

export const passwordValidator = password => {
  if (!password || password.length <= 0) return 'Password cannot be empty.';

  return true;
};

export const nameValidator = name => {
  if (!name || name.length <= 0) return 'Name cannot be empty.';

  return true;
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
  try {
    const response = await axios.post(baseUrl + '/auth/signUp', {
      profile: userInfo,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function loginUser(email, password) {
  return axios.post(baseUrl + '/auth/login', {
    email,
    password,
  });
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
