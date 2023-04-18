const getWorkouts = async (obj) => {
  const { part, difficulty } = obj

  const URL = `https://flexin-workout-api.onrender.com/workouts?part=${part}&difficulty=${difficulty}`

  const data = await fetch(URL)
  return await data.json()
}

export default getWorkouts
