const API_BASE_URL =
  'https://0sbtgksbzj.execute-api.ap-southeast-2.amazonaws.com';

// player helper function

//function to add new player in the db
export const createGame = async (data) => {
  console.log(JSON.stringify(data), 'data in createGame');
  try {
    const response = await fetch(`${API_BASE_URL}/gameId`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to create a new game');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating a new game:', error);
    throw error;
  }
};
// Function to get game by ID
export const getGameById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/gameId/${id}`);

    if (!response.ok) {
      throw new Error(`Failed to get game with ID ${id}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error getting game with ID ${id}:`, error);
    throw error;
  }
};
// function to update the game rounds with id
export const addPlayer = async (id, data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/gameId/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error('Error adding a new player ADDPLAYER:', error);
    throw error;
  }
};
// round helper function
