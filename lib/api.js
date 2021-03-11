export const fetchData = async (zipValue) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?zip=${zipValue},in&appid=a36613676e64d664351d8abf4ac78985`,
      //`http://samples.openweathermap.org/data/2.5/forecast?zip=${zipValue}&appid=a36613676e64d664351d8abf4ac78985`,
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
