import './App.css';
import { useState } from 'react';
import Snapshot from './componenets/Snapshot';
import SearchInput from './componenets/SearchInput';

function App() {

  const [input, setInput] = useState('');
  const [country, setCountry] = useState('')
  const [countryCode, setCountryCode] = useState('')
  const [holiday, setHoliday] = useState('');


  //listening to user input from input field
  function userInput(e) {

    setInput(e.target.value);
  }

  async function submit(){
     
    try {

      if(!input.trim()) return;

      // First API call, to get country data
      const countryResponse = await fetch(`https://restcountries.com/v3.1/name/${input}`);
      
      const countryData = await countryResponse.json();
     
      // just getting the cca2 code from the json object
      const code = countryData[0].cca2;

      //passing the cca2 code so we can access it later
      setCountryCode(code);

      //setting the country to whatever the user input
      setCountry(countryData[0]);


      const holidayUrl = `https://calendarific.com/api/v2/holidays?&api_key=PCXER3nC96Pn5aRPeIjJFGgSBQorCId9&country=${code}&year=2025`
      const holidayResponse = await fetch(holidayUrl);
      const holidayData = await holidayResponse.json();
      

      const today = new Date().toISOString().split('T')[0];
      const todayHoliday = holidayData.response.holidays.find(h=> h.date.iso===today);

      
      if (todayHoliday){
         setHoliday(todayHoliday.name);
      }else{

        setHoliday("No holiday today");
      }

    }catch(error){

        console.error("Error fetching data:", error)
      }
    }


  return (
    <div className="App">
      <h1 className='app-title'>Locale Lite</h1>

     
      <SearchInput submit={submit} userInput={userInput}/>

      <Snapshot holiday={holiday} country={country} countryCode={countryCode}/>
    </div>
  );
}
export default App;
